import React from "react"

const Word = (props) => {
	console.log(props.wordData)
	if(props.wordData){
		return (
			<div className='definition'>
				{props.wordData.meta.id &&
					<h1>{props.wordData.meta.id}</h1>
				}
				{props.wordData && (
					<p>{props.wordData.shortdef[0]}</p>
				)}
			</div>
		);
	} else {
		return (<div>Something went wrong please try again.</div>)
	}

}

export default Word