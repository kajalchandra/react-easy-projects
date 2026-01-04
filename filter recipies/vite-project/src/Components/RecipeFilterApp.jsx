import { useEffect, useState } from "react"
import recipesData from "../Utils/recipeData"
import RecipeCard from "./RecipeCard"

const RecipeFilterApp = ()=>{
   // console.log(recipesData)
   const [recipes,SetRecipes] = useState(recipesData)
   const [filteredCards,setFilteredCards] = useState(recipesData)
   const [count,setCount] = useState(0)
   const [avgRating,setAvgRating] = useState(null)
   const [numberOfRecipe,setNumberOfRecipe] = useState(null)

    const handleSelectedData = (e)=>{
        console.log(e.target.value)
        const selectedRating = Number(e.target.value)
        const filtered = recipes.filter((card)=> card.rating >= selectedRating)
        setFilteredCards(filtered)
        // i should not be doing this here because it takes set functions are asynchronous and it takes old values , so it is better to use useEffect
        //  const avg = filteredCards.reduce((acc,curr)=>
        //     acc + curr.rating
        //     ,0)
        
        //     setAvgRating((avg/filteredCards.length).toFixed(2))
      
    }

    useEffect(()=>{
        const avg = filteredCards.reduce((acc,curr)=>
            acc + curr.rating
            ,0)
        
            setAvgRating((avg/filteredCards.length).toFixed(2))

    },[filteredCards])
   return(
        <div>
            <div className="top-btn">
             
                    
                <select defaultValue={"4.0"} onChange={handleSelectedData}>
                   
                    <option value={4.0}>4.0+</option>
                    <option value={4.3}>4.3+</option>
                    <option value={4.5}>4.5+</option>
                    <option value={4.7}>4.7+</option>
                    <option value={4.9}>4.9+</option>
                </select>
               
              
                <div>
                    <h1>Cart Items : {count}</h1>
                </div>
            </div>
            <div>
                <h2>Average Rating :{avgRating}  ({filteredCards.length} recipes)</h2>
            </div>
            <div className="cards-container">
                {filteredCards.map((recipe,index)=><RecipeCard   key={index} data={recipe} setCount={setCount}/>)}
            </div>
            
        </div>
    )
}

export default RecipeFilterApp