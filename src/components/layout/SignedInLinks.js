import React from 'react'
import {  NavLink } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import { SignOut } from 'aws-amplify-react';

const SignedInLinks = () => {

    async function getInitials() {
         await Auth.currentUserInfo().then(function(data){
            console.log(data.attributes.email.substring(0,1))
        }) 
    }

    let initials = getInitials().then(function(data){
        console.log(data)
    })
    

    return (
        <ul className="right">
            <li><button className="match-btn"><NavLink to='/create'><span className="match-txt">New Course</span></NavLink></button></li>
            <li className="nav-stuff"><SignOut /></li>
            <li className="nav-stuff"><NavLink to='/' className='btn btn-floating pink lighten-1'>MT</NavLink></li>
        </ul>
    )
}

export default SignedInLinks