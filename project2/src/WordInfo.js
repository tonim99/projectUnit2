import React, { useState } from "react"
import Word from './Word'
const WordInfo = (props) => {
    const [open, setOpen] = useState(false)
    
    return (
        <div className= 'wordList'>
            <ol>
                {props.wordData &&
                    props.wordData.map((word, index) => {
                        return (
                        <React.Fragment key={index}>
                            <div>
                                {word.shortdef && (
                                    <li>
                                        <div onClick={() => setOpen(true)}>
                                            {word.meta.id}
                                            {word.fl &&
                                                <span> ({word.fl})</span>}
                                        </div>
                                    </li>
                                )}   
                                {open && <div className='definition'>
				                    <p>{word.shortdef}</p>
			                    </div>}
                            </div>
                        </React.Fragment> 
                    );
                })}
            </ol>
        </div>
        )
}

export default WordInfo