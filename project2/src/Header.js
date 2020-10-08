import React from "react"
import {Link} from "react-router-dom"
const Header =(props)=> {

    return (
			<nav className='Header'>
				<Link to='/'>
					<h1>My Dictionary</h1>
				</Link>
			</nav>
		);
}

export default Header
