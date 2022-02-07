import React from 'react'
import { NavLink } from 'react-bootstrap'
//need to set this to route jon-meier.com/aboutme
const Links = () =>{
    return(
        <div id="contactContent">
            Contact Me!
            <NavLink id='contactChild' href="https://github.com/jmeier2715" target="_blank">github</NavLink>
            <NavLink id='contactChild' href="https://www.linkedin.com/in/jonathanlmeier/" target="_blank">linkedin</NavLink>
            <NavLink id='contactChild'>email</NavLink>

        </div>
    )
}

export default Links