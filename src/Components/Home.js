import React from 'react'
import {Link} from'react-router-dom'

function Home() {
    return (
        <div>
            <ul>
                <Link to="/"><li>userForm</li></Link>
                <Link to="/Dashboard"><li>Dashboard</li></Link>
                <Link to="/about"><li>About</li></Link>
            </ul>
            <center>
          
           </center> 
        </div>
    )
}

export default Home
