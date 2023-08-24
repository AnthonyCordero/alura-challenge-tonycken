import './styles.css'


const Button = (props) => {
    const { btnText, btnColor } = props
    return <button type='button' url='#' className='button' style={{ backgroundColor: btnColor }}> {btnText}</button >

}

export default Button