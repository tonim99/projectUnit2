import React from "react"

const Word = (props) => {
	console.log(props.word, props.wordData)
	props.wordData && props.wordData.map((word, index) => {
		console.log(word.shortdef[0])
		return (
			<div key={index} className='definition'>
				<p>{word.shortdef[0]}</p>
			</div>
		);
	})
}

export default Word