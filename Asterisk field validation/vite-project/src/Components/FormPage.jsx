import { useState } from "react"

const FormPage =()=>{
  const [name,setName] = useState("")
  const [area,setArea] = useState("")
  const [error,setError] = useState({})
  const [successful,setSuccessful] = useState(false)
  const [submittedData,setSubmittedData] = useState(null)

const handleSubmit = (e)=>{
 let isValid = validate(name,area)
 console.log('isValid',isValid)

  e.preventDefault(); //Forms refresh the page by default. preventDefault() stops that behavior so React can control the UI using state.
 if(isValid){
    setSubmittedData({
        name : name,
        area : area
    })
  setSuccessful(true)
 }else{
    setSuccessful(false)
 }
  
}
const validate = (name,area)=>{
      const error = {}
    if(!name || name.length < 2){
        error.name = "Name is required"
    }
    if(!area || area.length <3){
        error.area = "location is required"
    }
    setError(error)
    if(error.name || error.area){
        return false
    }else{
        return true
    }


}
    return(
        <div className="info-container">  
            <form>
               
                <label className="label">Name:</label><span className="asterisk">*</span>
                    <div className="name">
                        <input type="text" 
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        placeholder="Enter your name" className="input"></input>
                    </div>
                  {error.name &&  <p className="error">Name is required</p>}
                    
                <label className="label">Location:</label><span className="asterisk">*</span>
                    <div className="location">
                        <input type="text" 
                        value={area}
                        onChange={(e)=>setArea(e.target.value)}
                        placeholder="Enter your location" className="input"></input>
                    </div>
                   {error.area && <p className="error">location is required</p>}
                    
                
                <button className="btn" onClick={handleSubmit}>Submit</button>
                
            {  successful &&  (<div>
                    <p>Submitted Successfully!</p>
                    <p>Name : {submittedData.name}</p>
                    <p>Location : {submittedData.area}</p>
                </div>) }
               

            </form> 
            
        </div>
    )
}

export default FormPage