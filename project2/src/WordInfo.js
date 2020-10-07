import React from "react"
import Word from "./Word"

const WordInfo = ({wordData}) => {
    console.log('this is WI wordData- ', wordData)

    return (
        <div>
            {
                wordData && 
                wordData.map((word, index) => {
                    console.log('this is word.hwi in wordData', word);
                    return (
                      <Word 
                      key={index}
                      word={word}/>
                    )
                })
            }
        </div>
    )
}

export default WordInfo