import { useState } from "react"

const ChipsInput = ()=>{
    const [text,setText] = useState("")
    const [chips,setChips] = useState([
        // "kajal","happy"
    ])
    const handleChange = (e)=>{
        // console.log(e)
        const val = e.target.value.trim()
        setText(val)
    }
    const handleKeyDown = (e)=>{
        console.log(e)
        if(e.key === "Enter"){
            if(text){
                setChips((prev)=>[...prev,text])
            }
            setText("")
        }
        
}
const DeleteChip = (e,i)=>{
  const leftChip =  chips.filter((chip,index)=>  index !== i)
  setChips(leftChip)
}

    return(
        <div>
            <h1>Chips Input</h1>
            <input type="text" value={text} className="input" 
            placeholder="type a chip and press tag"
            onChange={handleChange}
            onKeyDown={handleKeyDown}></input>
            <div>
                {chips.map((chip,index)=> <span className="chip" key={index}>{chip}<span className="btn" onClick={(e)=>DeleteChip(e,index)}>❌</span></span>)}
            </div>
        </div>
    )
}

export default ChipsInput