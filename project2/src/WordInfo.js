import React from "react"
import {Link} from "react-router-dom"
const WordInfo = ({wordData}) => {
    return (
        <div className= 'wordList'>
            <ol>
                {wordData &&
                    wordData.map((word, index) => {
                        return (
                            <div key={index}>
                                <Link
                                    to={`/words/${word.meta.id}`}
                                    style={{
                                        textDecoration: 'none',
                                    }}>
                                    {word.shortdef.length === 0 ? null : (
                                        <li>
                                            {word.meta.id}
                                            <span> ({word.fl})</span>
                                        </li>
                                    )}
                                </Link>
                            </div>
                        );
                    })}
            </ol>
        </div>
    );
}

export default WordInfo