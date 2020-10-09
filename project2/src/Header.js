import React from "react"
import {Link} from "react-router-dom"

const Header =(props)=> {
	console.log("header props - ", props)

    return (
			<nav className='Header'>
				<Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
					<h1>My Dictionary</h1>
				</Link>
			</nav>
		);
}

export default Header
