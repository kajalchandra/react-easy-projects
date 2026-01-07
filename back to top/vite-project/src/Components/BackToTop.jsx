import { useEffect, useState } from "react"

const BackToTop = ()=>{
    const [isVisible, setIsVisible] = useState(false)
    const paragraphArray = new Array(45).fill("This is a Paragraph")
   // console.log(paragraphArray)
    useEffect(()=>{
           // Add scroll event listener to toggle visibility
        const handleScroll = ()=>{
            if(window.scrollY >500){
                console.log('yes')
                setIsVisible(true)
            }else{
                setIsVisible(false)
            }
        }
        window.addEventListener("scroll",handleScroll)
        //cleaning up the eventListener, to avoid memory leaks
        return ()=>{
            window.removeEventListener("scroll",handleScroll)
        }

        return
    },[])

    //moving the page to the top of the screen
    const scrollToTop = ()=>{
         window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return(
        <div className="backTotop">
            <h1>Back to Top</h1>
            {paragraphArray.map((para,index)=><p key={index}>{para } {index} </p>)}
            {/* show this button only after scrolling down */}
         {isVisible &&   <div>
                <button 
                className="backtotop-btn"
                onClick={scrollToTop}>Back to Top</button>
            </div>}
            
        </div>
    )
}
export default BackToTop