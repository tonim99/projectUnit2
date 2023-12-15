import React, { useState } from "react"
const WordInfo = (props) => {
    const [word, setWord] = useState()
    
    return (
        <div className= 'wordList'>
            <ol>
                {props.wordData &&
                    props.wordData.map((wordInfo, index) => {
                        return (
                        <React.Fragment key={index}>
                            <div>
                                <li>
                                    <div onClick={() => setWord(wordInfo.meta.id[index])}>
                                        {wordInfo.meta.id}
                                        {wordInfo.fl &&
                                            <span> ({wordInfo.fl})</span>}
                                <span className='definition'>
				                    <p>{wordInfo.shortdef}</p>
			                    </span>
                                    </div>
                                </li>
                            </div>
                        </React.Fragment> 
                    );
                })}
            </ol>
        </div>
        )
}

export default WordInfo