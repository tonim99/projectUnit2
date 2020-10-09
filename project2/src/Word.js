import React from "react"

function Word(props) {

	let definition = props.words.filter((word) => {
		return word.meta.id === props.match.params.definition;
	});
	console.log("definition", definition)
	// console.log('word - props- ', props)

    return (
			<div className='Definition'>
				{definition[0] && (
					<p>{definition[0].shortdef[0]}</p>
				)}
			</div>
		);
	}
	export default Word