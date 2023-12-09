import React, { useState } from "react"
import Word from './Word'
const WordInfo = ({wordData, error}) => {
    const [open, setOpen] = useState(false)
    return (
        <div className= 'wordList'>
            <ol>
                {wordData &&
                    wordData.map((word, index) => {
                        return (
                        <React.Fragment key={index}>
                            <div>
                                {word.shortdef[index] && (
                                    <li>
                                        <div onClick={() => setOpen(true)}>
                                        {word.meta.id}
                                        {word.fl &&
                                            <span> ({word.fl})</span>}
                                        </div>
                                    </li>
                                )}   
                            {open && word && <Word wordData={wordData[index]} error={error}/>}
                            </div>
                        </React.Fragment> 
                    );
                })}
            </ol>
        </div>
        )
}

export default WordInfo