import React from "react"
import {Link, Route} from "react-router-dom"
const WordInfo = ({wordData}) => {

    return (
        <ol>
            {
                wordData && 
                wordData.map((word, index) => {
                    return (
                        <div key={index}>
												
                            <Link to={`/words/${word.meta.id}`}>
                                <li>
                                    {word.hwi.hw}
                                    <span> ({word.fl})</span>
                                </li>
                            </Link>
											
                        </div>
                    );
                })
            }
        </ol>
    )
}

export default WordInfo