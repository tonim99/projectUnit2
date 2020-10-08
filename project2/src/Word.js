import React from "react"

const Word = ({wordData}) => {
    
    return (
		<div>
			{
			wordData &&
			wordData.map((word, index) => {
				console.log('this is word in Word - ', word);
					return (
						<div>
							{/* <h1>{word.hwi.hw}</h1>
							<p>{word.fl}</p> */}
							{word.shortdef.map((def, index) => {
								return <p key={index}>{def}</p>
							})}
						</div>
					);
				})
			}
		</div>
	);
}
export default Word