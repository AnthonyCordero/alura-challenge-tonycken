import './styles.css'

const PromoVideo = () => {
    return <div className='promo-video'>
        <h2>WATCH THIS CONCERT!</h2>
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/e65Pirra6AQ?si=hcfJSNItEuSkn5Cl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
        </iframe>
    </div>


}

export default PromoVideo