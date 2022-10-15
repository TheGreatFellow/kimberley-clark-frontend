import './DiseaseDescription.css'

const DiseaseDescription = () => {
    var x = 2
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
                'Applying moisturizing creams and emollients to the skin keeping the affected areas clean and dry using specialized moisturizers for psoriatic skin symptoms.',
            products: [
                {
                    link: 'https://www.amazon.in/Huggies-Wonder-Pants-Small-Diapers/dp/B0755GBTM7',
                    name: 'KIMCARE Naturally Tuff Orange Skin Cleanser',
                    image: 'https://www.kcprofessional.co.in/media/5031956/01377.jpg',
                },
            ],
        },
        {
            diseaseName: 'Candidiasis',
            diseaseDescription:
                'Candidiasis is easily treated with medicines such as creams, suppositories, or mouthwash. Prevention includes keeping the skin dry, changing diapers often, and using antibiotics only when needed.',
            products: [
                {
                    link: 'https://www.indiamart.com/proddetail/kimcare-micromist-air-neutraliser-morning-air-25-ml-12-bottles-22238820233.html',
                    name: 'KIMCARE MICROMIST Air Neutraliser Morning Air',
                    image: 'https://static.winc.com.au/pi/3f/2a9327da3503ce9359f6e191666863a4c365ac-3389875/lgsq.jpg',
                },
            ],
        },
    ]
    return (
        <div>
            <div className='disease-container'>
                <h1 className='disease-heading'>Baby Skin Diagnosis</h1>
                <p className='disease-name'>{diseaseList[x].diseaseName}</p>
                <p className='sub-heading'>Treatment</p>
                <p className='disease-description'>
                    {diseaseList[x].diseaseDescription}
                </p>
                <p className='sub-heading'>Product Recommendation</p>
                <div className='product-container'>
                    <a className='at' href={diseaseList[x].products[0].link}>
                        <img
                            src={diseaseList[x].products[0].image}
                            alt=''
                            className='product-image'
                        />
                        <p className='pname'>
                            {diseaseList[x].products[0].name}
                        </p>
                    </a>
                    {diseaseList[x].products[1] && (
                        <a
                            className='at'
                            href={diseaseList[x].products[1].link}
                        >
                            <img
                                src={diseaseList[x].products[1].image}
                                alt=''
                                className='product-image'
                            />
                            <p className='pname'>
                                {diseaseList[x].products[1].name}
                            </p>
                        </a>
                    )}
                </div>
                <p className='sub-heading'>Additional Reads</p>
                <a
                    href='
                https://www.urmc.rochester.edu/encyclopedia/content.aspx?ContentTypeID=90&ContentID=P01888'
                    className='links'
                >
                    https://www.urmc.rochester.edu/encyclopedia/content.aspx?ContentTypeID=90&ContentID=P01888
                </a>
            </div>
        </div>
    )
}

export default DiseaseDescription
