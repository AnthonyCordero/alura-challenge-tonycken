import Button from '../Button'
import './styles.css'


const headerBtnText = 'Include Video / Category';
const headerBtnColor = '#ffffff'


const Header = () => {

    return <header className='header'>
        <img src='/img/toa3.png' alt='Logo Tonycken' />
        <h1>Tonycken <span>Video Recomendations</span> </h1>
        <Button
            btnText={headerBtnText}
            btnColor={headerBtnColor}

        />


    </header>



}

export default Header