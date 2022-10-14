import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
        if (1 == 1) {
            navigate('/onboarding')
        }
    }
    return (
        <>
            <div>Landing(Will contain some intro about the site as well)</div>
            <button className='login-button' onClick={() => handleLogin()}>
                Login
            </button>
        </>
    )
}

export default Landing
