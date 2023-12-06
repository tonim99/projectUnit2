import React from "react"

const Word = (props) => {
    return (
		<div className='definition'>
			{
			props.wordData[0].meta.id &&
				<h1>{props.wordData[0].meta.id}</h1>

			}
			{props.wordData[0] && (
				<p>{props.wordData[0].shortdef[0]}</p>
			)}
		</div>
	);

}

export default Word