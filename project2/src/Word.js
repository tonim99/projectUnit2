import React from "react"

export default function Word ({word}) {
    console.log('word word - ', word)
    return (
        <div> 
            {
                word.hwi &&
                <div>

                    <h1>{word.hwi.hw}</h1>
                    {
                        word.shortdef.map((def, index) => {
                            return (<p>{def}</p>)
                        })
                    }
                </div>

            }
        </div>
    )
}