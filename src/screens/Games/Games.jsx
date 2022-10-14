import React from 'react'
import { Link } from 'react-router-dom'

const Games = () => {
    return (
        <div>
            <Link to='wordle'>
                <button className='wordle'>wordle</button>
            </Link>
        </div>
    )
}

export default Games
