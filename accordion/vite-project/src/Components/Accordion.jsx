import { useState } from "react"

const Accordion = ({items})=>{
    console.log(items)
    const [showIndex, setShowIndex] = useState(null)
    const [arrow,setArrow] = useState(false)
    const handleIsOpen = (e,i)=>{
        setShowIndex(showIndex === i? null : i)
        setArrow(!arrow)
    }
    return(
        <div className="accordian-container">
            {items.map((item,index)=> (
                <div className="accordion" key={index}>
                    <div className="head" onClick={(e)=>handleIsOpen(e,index)}>
                        {item.title}
                       {arrow === true ? <span>{"⬆️"}</span> : <span>{"⬇️"}</span> }
                    </div>
                  { index === showIndex &&  ( <div className="body">{item.content}</div>) }
                </div>
            ))}
           

        </div>
    )
}

export default Accordion