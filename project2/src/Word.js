import React from "react"

function Word(props) {
	let definition = props.words.filter((word) => {
		return word.meta.id === props.match.params.definition;
	});

    return (
		<div className='definition'>
			{
			props.words[0] &&
				<h1>{props.words[0].hwi.hw}</h1>

			}
			{definition[0] && (
				<p>{definition[0].shortdef[0]}</p>
			)}
		</div>
	);
}
	export default Word