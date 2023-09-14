import './styles.css'


const Button = (props) => {
    const { btnText, btnColor, onClick } = props


    return <button
        onClick={onClick}
        type='button'
        url='#'
        className='button'
        style={{ backgroundColor: btnColor }}>
        {btnText}

    </button >

}

export default Button