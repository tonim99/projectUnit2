import React, {useState} from "react"
import {Link} from "react-router-dom"

const Header =(props)=> {
	const [refresh, setRefresh] = useState([])
	console.log("header props - ", props)
	const handleClick = (e) => {
		setRefresh([])
	}
    return (
			<nav className='Header' onClick={handleClick}>
				<Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
					<h1>My Dictionary</h1>
				</Link>
			</nav>
		);
}

export default Header
