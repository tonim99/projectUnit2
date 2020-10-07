import React from "react"

export default function Word ({word}) {
    console.log('word - ', word.shortdef)
    return (
			<div>
				<h1>{word.hwi.hw}</h1>
				<p>{word.fl}</p>
                <p></p>
				{word.shortdef.map((def, index) => {
					return <p key={index}>{def}</p>;
				})}
			</div>
		);
}