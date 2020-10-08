import React from "react"
import {Link} from "react-router-dom"
const Header =(props)=> {

    return (
		<nav className='Header'>
			<h1>
				<Link to='/'>My Dictionary</Link>				
			</h1>
		</nav>
	);
}

export default Header
