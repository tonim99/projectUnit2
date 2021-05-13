import React from "react"
import {Link} from "react-router-dom"

const Header =(props)=> {
    return (
			<nav className='nav'>
				<Link to='/' className='nav__link'>
					<h1 className='nav__link-item'>My Dictionary</h1>
				</Link>
			</nav>
		);
}

export default Header
