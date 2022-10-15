import './Quiz.css'

const Quiz = () => {
    return (
        <div className='quiz-container'>
            <img
                src='https://img.icons8.com/color/250/000000/cloud.png'
                className='cloud'
            />
            <img
                src='https://img.icons8.com/fluency/250/000000/sun.png'
                className='sun rotating'
            />
            <div className='quiz-top-container'>
                <div className='quiz-header'>
                    <i className='fa-solid fa-xmark close'></i>
                    <h1 className='quiz-title'>Baby Skin Care</h1>
                    <div className='empty'> </div>
                </div>
                <div className='progress-bar'>
                    <div className='progress'> </div>
                </div>
                <div className='quiz-question-container'>
                    <h1 className='question'>
                        When is a baby's first diaper rash most likely to occur?
                    </h1>
                </div>
            </div>

            <div className='options-container'>
                <div className='option'>1 to 3 weeks old</div>
                <div className='option'>1 to 6 months old</div>
                <div className='option'>1 to 6 months old</div>
                <div className='option selected'>1 to 6 months old</div>
            </div>
            <button className='submit'>Submit</button>
        </div>
    )
}

export default Quiz
