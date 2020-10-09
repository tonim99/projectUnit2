import React from "react"
import {Link} from "react-router-dom"

const Header =(props)=> {
    return (
			<nav className='header'>
				<Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
					<h1 className='title'>My Dictionary</h1>
				</Link>
			</nav>
		);
}

export default Header
