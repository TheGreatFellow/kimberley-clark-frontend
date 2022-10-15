import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Collect.css'
const Collect = () => {
    const [isMoist, setIsMoist] = useState(null)
    const [isTropical, setIsTropical] = useState(null)
    const [isArid, setIsArid] = useState(null)
    const [isItchy, setIsItchy] = useState(null)
    //setstate for scaly
    const [isScaly, setIsScaly] = useState(null)
    //lumps
    const [isLumpy, setIsLumpy] = useState(null)
    //margin
    const [isMargin, setIsMargin] = useState(null)
    //boils
    const [isBoils, setIsBoils] = useState(null)
    //reddish
    const [isReddish, setIsReddish] = useState(null)
    //hands
    const [isHands, setIsHands] = useState(null)
    const [isScalp, setIsScalp] = useState(null)
    //feet
    const [isThigh, setIsThigh] = useState(null)
    //hands
    //elbow
    const [isElbow, setIsElbow] = useState(null)
    //genital
    const [isGenital, setIsGenital] = useState(null)
    //mouth
    const [isMouth, setIsMouth] = useState(null)
    //spreadable
    const [isSpreadable, setIsSpreadable] = useState(null)
    //ispainful
    const [isPainful, setIsPainful] = useState(null)
    const navigate = useNavigate()
    const diseases = [
        {
            name: 'Diaper Rash',
            symptoms: [
                'isItchy',
                'isReddish',
                'isMoist',
                'isGenital',
                'isThigh',
            ],
        },
        {
            name: 'Psoriasis',
            symptoms: ['isItchy', 'isScaly', 'isScalp', 'isElbow', 'isPainful'],
        },
        {
            name: 'Candidasis',
            symptoms: [
                'isScalp',
                'isGenital',
                'isMouth',
                'isMoist',
                'isTropical',
                'isItchy',
            ],
        },
    ]
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
                    onChange={() => {
                        isMoist ? setIsMoist(null) : setIsMoist('isMoist')
                    }}
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
                    onChange={() => {
                        isTropical
                            ? setIsTropical(null)
                            : setIsTropical('isTropical')
                    }}
                />
                Tropical
            </label>
            <label class='form-control'>
                <input
                    type='checkbox'
                    name='checkbox'
                    checked={isArid}
                    onChange={() => {
                        isArid ? setIsArid(null) : setIsArid('isArid')
                    }}
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
                    onChange={() => {
                        isItchy ? setIsItchy(null) : setIsItchy('isItchy')
                    }}
                />
                Itchy
            </label>
            <label class='form-control'>
                <input
                    type='checkbox'
                    name='checkbox'
                    checked={isScaly}
                    onChange={() => {
                        isScaly ? setIsScaly(null) : setIsScaly('isScaly')
                    }}
                />
                Scaly
            </label>
            <label class='form-control'>
                <input
                    type='checkbox'
                    name='checkbox'
                    checked={isLumpy}
                    onChange={() => {
                        isLumpy ? setIsLumpy(null) : setIsLumpy('isLumpy')
                    }}
                />
                Lumps
            </label>
            <label class='form-control'>
                <input
                    type='checkbox'
                    name='checkbox'
                    checked={isMargin}
                    onChange={() => {
                        isMargin ? setIsMargin(null) : setIsMargin('isMargin')
                    }}
                />
                Margins
            </label>
            <label class='form-control'>
                <input
                    type='checkbox'
                    name='checkbox'
                    checked={isBoils}
                    onChange={() => {
                        isBoils ? setIsBoils(null) : setIsBoils('isBoils')
                    }}
                />
                Boils
            </label>
            <label class='form-control'>
                <input
                    type='checkbox'
                    name='checkbox'
                    checked={isReddish}
                    onChange={() => {
                        isReddish
                            ? setIsReddish(null)
                            : setIsReddish('isReddish')
                    }}
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
                    onChange={() => {
                        isHands ? setIsHands(null) : setIsHands('isHands')
                    }}
                />
                Hands
            </label>
            <label class='form-control'>
                <input
                    type='checkbox'
                    name='checkbox'
                    checked={isScalp}
                    onChange={() => {
                        isScalp ? setIsScalp(null) : setIsScalp('isScalp')
                    }}
                />
                Scalp
            </label>
            <label class='form-control'>
                <input
                    type='checkbox'
                    name='checkbox'
                    checked={isElbow}
                    onChange={() => {
                        isElbow ? setIsElbow(null) : setIsElbow('isElbow')
                    }}
                />
                Knees or Elbow
            </label>
            <label class='form-control'>
                <input
                    type='checkbox'
                    name='checkbox'
                    checked={isGenital}
                    onChange={() => {
                        isGenital
                            ? setIsGenital(null)
                            : setIsGenital('isGenital')
                    }}
                />
                Genital Area
            </label>
            <label class='form-control'>
                <input
                    type='checkbox'
                    name='checkbox'
                    checked={isMouth}
                    onChange={() => {
                        isMouth ? setMouth(null) : setMouth('isMouth')
                    }}
                />
                Mouth
            </label>
            <label class='form-control'>
                <input
                    type='checkbox'
                    name='checkbox'
                    checked={isThigh}
                    onChange={() => {
                        isThigh ? setIsThigh(null) : setIsThigh('isThigh')
                    }}
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
                    onChange={() => {
                        isSpreadable
                            ? setIsSpreadable(null)
                            : setIsSpreadable('isSpreadable')
                    }}
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
                    onChange={() => {
                        isPainful
                            ? setIsPainful(null)
                            : setIsPainful('isPainful')
                    }}
                />
                Yes
            </label>
            <label class='form-control'>
                <input type='checkbox' name='checkbox' />
                No
            </label>
            <br />
            <button
                className='submit'
                onClick={() => {
                    const data = [
                        isMoist,
                        isTropical,
                        isArid,
                        isItchy,
                        isScaly,
                        isLumpy,
                        isMargin,
                        isBoils,
                        isReddish,
                        isHands,
                        isScalp,
                        isElbow,
                        isGenital,
                        isMouth,
                        isThigh,
                        isSpreadable,
                        isPainful,
                    ]

                    const symptoms = []
                    data.forEach((element) => {
                        if (element != null) {
                            symptoms.push(element)
                        }
                    })

                    fetch('http://localhost:3000/getDiseaseFromSymptoms', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            symptoms: symptoms,
                        }),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            navigate('/diseaseDescription', {
                                state: { name: symptoms },
                            })
                        })
                }}
            >
                Submit
            </button>
        </div>
    )
}

export default Collect
