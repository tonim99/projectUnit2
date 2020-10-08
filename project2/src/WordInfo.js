import React from "react"
import {Link, Route} from "react-router-dom"
import Word from './Word'
const WordInfo = ({wordData}) => {

    console.log('this is wordData in WordInfo - ', wordData)

    return (
        <div>
            {
                wordData && 
                wordData.map((word, index) => {
                    console.log('this is word in WordInfo ', word)
                    return (				
                        <div key={index}>
                                    <p>
                                        {word.hwi.hw}
                                        <span> ({word.fl})</span>
                                    </p>
                            <Word key={index} word={word} />
                        </div>						
                    );
                })
            }
        </div>
    )
}

export default WordInfo