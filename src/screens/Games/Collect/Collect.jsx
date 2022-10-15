import { useState } from 'react'
import './Collect.css'

const Collect = () => {
    const [isMoist, setIsMoist] = useState(false)
    const [isTropical, setIsTropical] = useState(false)
    const [isArid, setIsArid] = useState(false)
    const [isItchy, setIsItchy] = useState(false)
    //setstate for scaly
    const [isScaly, setIsScaly] = useState(false)
    //lumps
    const [isLumpy, setIsLumpy] = useState(false)
    //margin
    const [isMargin, setIsMargin] = useState(false)
    //boils
    const [isBoils, setIsBoils] = useState(false)
    //reddish
    const [isReddish, setIsReddish] = useState(false)
    //hands
    const [isHands, setIsHands] = useState(false)
    const [isScalp, setIsScalp] = useState(false)
    //feet
    const [isThigh, setIsThigh] = useState(false)
    //hands
    //elbow
    const [isElbow, setIsElbow] = useState(false)
    //genital
    const [isGenital, setIsGenital] = useState(false)
    //mouth
    const [isMouth, setIsMouth] = useState(false)
    //spreadable
    const [isSpreadable, setIsSpreadable] = useState(false)
    //ispainful
    const [isPainful, setIsPainful] = useState(false)
    return (
        <div>
            <h1 className='welcome'>
                Few more questions to get to know your baby better
            </h1>
            <p className='quest'>What is the baby skin type?</p>
            <label class='form-control'>
                <input
                    type='checkbox'
                    name='checkbox'
                    checked={isMoist}
                    onChange={() => setIsMoist(!isMoist)}
                />
                Moist
            </label>
            <label class='form-control'>
                <input type='checkbox' name='checkbox' />
                Dry
            </label>
            <br />
            <p className='quest'>What is the climate of your region?</p>
            <label class='form-control'>
                <input
                    type='checkbox'
                    name='checkbox'
                    checked={isTropical}
                    onChange={() => setIsTropical(!isTropical)}
                />
                Tropical
            </label>
            <label class='form-control'>
                <input
                    type='checkbox'
                    name='checkbox'
                    checked={isArid}
                    onChange={() => setIsArid(!isArid)}
                />
                Arid
            </label>
            <br />
            <p className='quest'>How does the rash look like?</p>
            <label class='form-control'>
                <input
                    type='checkbox'
                    name='checkbox'
                    checked={isItchy}
                    onChange={() => setIsItchy(!isItchy)}
                />
                Itchy
            </label>
            <label class='form-control'>
                <input
                    type='checkbox'
                    name='checkbox'
                    checked={isScaly}
                    onChange={() => setIsScaly(!isScaly)}
                />
                Scaly
            </label>
            <label class='form-control'>
                <input
                    type='checkbox'
                    name='checkbox'
                    checked={isLumpy}
                    onChange={() => setIsLumpy(!isLumpy)}
                />
                Lumps
            </label>
            <label class='form-control'>
                <input
                    type='checkbox'
                    name='checkbox'
                    checked={isMargin}
                    onChange={() => setIsMargin(!isMargin)}
                />
                Margins
            </label>
            <label class='form-control'>
                <input
                    type='checkbox'
                    name='checkbox'
                    checked={isBoils}
                    onChange={() => setIsBoils(!isBoils)}
                />
                Boils
            </label>
            <label class='form-control'>
                <input
                    type='checkbox'
                    name='checkbox'
                    checked={isReddish}
                    onChange={() => setIsReddish(!isReddish)}
                />
                Reddish
            </label>
            <br />
            <p className='quest'>
                In which part of the body is the rash present?
            </p>
            <label class='form-control'>
                <input
                    type='checkbox'
                    name='checkbox'
                    checked={isHands}
                    onChange={() => setIsHands(!isHands)}
                />
                Hands
            </label>
            <label class='form-control'>
                <input
                    type='checkbox'
                    name='checkbox'
                    checked={isScalp}
                    onChange={() => setIsScalp(!isScalp)}
                />
                Scalp
            </label>
            <label class='form-control'>
                <input
                    type='checkbox'
                    name='checkbox'
                    checked={isElbow}
                    onChange={() => setIsElbow(!isElbow)}
                />
                Knees or Elbow
            </label>
            <label class='form-control'>
                <input
                    type='checkbox'
                    name='checkbox'
                    checked={isGenital}
                    onChange={() => setIsGenital(!isGenital)}
                />
                Genital Area
            </label>
            <label class='form-control'>
                <input
                    type='checkbox'
                    name='checkbox'
                    checked={isMouth}
                    onChange={() => setIsMouth(!isMouth)}
                />
                Mouth
            </label>
            <label class='form-control'>
                <input
                    type='checkbox'
                    name='checkbox'
                    checked={isThigh}
                    onChange={() => setIsThigh(!isThigh)}
                />
                Thigh
            </label>
            <br />
            <p className='quest'>
                Did the rash spread to other parts of the body?
            </p>
            <label class='form-control'>
                <input
                    type='checkbox'
                    name='checkbox'
                    checked={isSpreadable}
                    onChange={() => setIsSpreadable(!isSpreadable)}
                />
                Yes
            </label>
            <label class='form-control'>
                <input type='checkbox' name='checkbox' />
                No
            </label>
            <br />
            <p className='quest'>Are the rashes painful?</p>
            <label class='form-control'>
                <input
                    type='checkbox'
                    name='checkbox'
                    checked={isPainful}
                    onChange={() => setIsPainful(!isPainful)}
                />
                Yes
            </label>
            <label class='form-control'>
                <input type='checkbox' name='checkbox' />
                No
            </label>
            <br />
            <button className='submit'>Submit</button>
        </div>
    )
}

export default Collect
