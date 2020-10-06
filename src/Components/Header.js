import React from 'react'
import {Link} from 'react-router-dom'


const Header = () => {
    return(
        <header>
            <Link to='/pac-man'><button>Pac Man</button></Link>
            <Link to='/tetris'><button>Tetris</button></Link>
        </header>
    )
}

export default Header