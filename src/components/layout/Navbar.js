import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import logo from '../../banner.png'

const Navbar = () => {
    return (
        <div>
        <img className="dalogo" src={logo} alt="Learnify logo"/>
        <nav className="nav-wrapper white">
            <div className="container">                
                <Link to='/' className="nav-stuff"> Learnify</Link>
                <SignedInLinks />
            </div>
        </nav>
        </div>
    )
}

export default Navbar