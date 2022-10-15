import React from 'react'

const Home = () => {
    let height = window.innerHeight
    let width = window.innerWidth
    return (
        <>
            <div className='home-container'>
                <div className='navigation-bar'>
                    <i class='fa-solid fa-lightbulb logoP'></i>
                    <i class='fa-solid fa-w logoP'></i>
                    <i class='fa-solid fa-user logoP'></i>
                </div>
            </div>
        </>
    )
}

export default Home
