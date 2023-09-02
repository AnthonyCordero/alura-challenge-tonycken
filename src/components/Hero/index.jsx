import PromoVideo from '../PromoVideo'
import './styles.css'

const Hero = () => {
    return <section
        className='hero-section'
        style={{ backgroundImage: 'url(/img/toa-herobg.png)' }}>
        <img src='/img/toa-logo.png' alt='Tocken Open Air Logo' />
        <PromoVideo />

    </section >



}

export default Hero