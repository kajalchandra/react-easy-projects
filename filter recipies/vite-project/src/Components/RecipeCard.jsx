const RecipeCard = ({data,setCount})=>{
    //console.log("data",data)
    const {cuisine,image,name,rating,reviewCount} = data
    const handleAddCart = ()=>{
        setCount((prev)=>prev + 1)

    }
    return(
        <div className="card">
            <div className="image-card">
                <img src={image} className="image"></img>
            </div>
            <h3>{name}</h3>
            <p>Cuisine : {cuisine}</p>
            <h3>Rating:{rating}({reviewCount} reviews)</h3>
            <div className="btn-container">
                  <button className="btn" onClick={handleAddCart}>Add to Cart</button>
            </div>
          
        </div>
    )
}

export default RecipeCard