import './DiseaseDescription.css'

const DiseaseDescription = () => {
    const diseaseList = [
        {
            diseaseName: 'Diaper Rash',
            diseaseDescription:
                "Most rashes start to improve after a few days of at-home care with over-the-counter ointment and more frequent nappy changes. If it doesn't start to improve or if fever and rash develop, a visit to a doctor is required.",
            products: [
                {
                    link: 'https://www.amazon.in/Huggies-Wonder-Pants-Small-Diapers/dp/B0755GBTM7',
                    name: 'Huggies Wonder Pants',
                    image: 'https://img1.exportersindia.com/product_images/bc-full/2021/8/2931600/huggies-wonder-pants-extra-small-new-born-xs-1628861805-5941292.jpeg',
                },
                {
                    link: 'https://www.amazon.in/Huggies-Taped-Diapers-Counts-Cucumber/dp/B08HMBZV96',
                    name: 'Huggies Wet Wipes',
                    image: 'https://m.media-amazon.com/images/I/51CG4lJ0QAL._SL1000_.jpg',
                },
            ],
        },
        {
            diseaseName: 'Psoriasis',
            diseaseDescription:
                "Most rashes start to improve after a few days of at-home care with over-the-counter ointment and more frequent nappy changes. If it doesn't start to improve or if fever and rash develop, a visit to a doctor is required.",
            products: [
                {
                    link: 'https://www.amazon.in/Huggies-Wonder-Pants-Small-Diapers/dp/B0755GBTM7',
                    name: 'Huggies Wonder Pants',
                    image: 'https://img1.exportersindia.com/product_images/bc-full/2021/8/2931600/huggies-wonder-pants-extra-small-new-born-xs-1628861805-5941292.jpeg',
                },
            ],
        },
    ]
    return (
        <div>
            <div className='disease-container'>
                <h1 className='disease-heading'>Baby Skin Diagnosis</h1>
                <p className='disease-name'>{diseaseList[0].diseaseName}</p>
                <p className='sub-heading'>Treatment</p>
                <p className='disease-description'>
                    {diseaseList[0].diseaseDescription}
                </p>
                <p className='sub-heading'>Product Recommendation</p>
                <div className='product-container'>
                    <a className='at' href={diseaseList[0].products[0].link}>
                        <img
                            src={diseaseList[0].products[0].image}
                            alt=''
                            className='product-image'
                        />
                        <p className='pname'>
                            {diseaseList[0].products[0].name}
                        </p>
                    </a>
                    {diseaseList[0].products[1] && (
                        <a
                            className='at'
                            href={diseaseList[0].products[1].link}
                        >
                            <img
                                src={diseaseList[0].products[1].image}
                                alt=''
                                className='product-image'
                            />
                            <p className='pname'>
                                {diseaseList[0].products[1].name}
                            </p>
                        </a>
                    )}
                </div>
                <p className='sub-heading'>Additional Reads</p>
                <a
                    href='
                https://www.healthline.com/health/home-remedies-diaper-rash'
                    className='links'
                >
                    https://www.healthline.com/health/home-remedies-diaper-rash
                </a>
            </div>
        </div>
    )
}

export default DiseaseDescription
