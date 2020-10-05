import React from "react"
import Word from "./Word"
const WordInfo = ({wordData}) => {
    console.log('this is WI wordData- ', wordData)
    //gotta figure out how to conditionally render the API data before I can use map
    // props.wordData.map()
    return (
        
        <div>
            {
                wordData && 
                wordData.map((word, index) => {
                    return (
                        <Word word={word}/>
                    )
                })
            }
        </div>
    )
}
export default WordInfo