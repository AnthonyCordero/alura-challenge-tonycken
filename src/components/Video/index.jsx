import './styles.css'
import styled from 'styled-components';

const Video = (props) => {
    const { bandName, country, year, videoLink } = props.concerts

    return <Wrapper>
        <div className="container">
            <div className="wrapper">
                <div className="banner-video">
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${videoLink}`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                    <h2 >{bandName}</h2>
                    <p>{country}</p>
                    <p>{year}</p>
                </div>
            </div>
        </div>
    </Wrapper>



}

export default Video

const Wrapper = styled.section`

            padding: 3rem;
            font-family: "Lexend Deca Light";



            .container {
                backdrop - filter: blur(16px) saturate(180%);
            -webkit-backdrop-filter: blur(16px) saturate(180%);
            background-color: rgba(17, 25, 40, 0.25);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.125);
            padding: 38px;
            filter: drop-shadow(0 30px 10px rgba(0,0,0,0.125));
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content:center;
            text-align: center;

  }

            .wrapper {
                width: 100%;
            height: 100%;

  }

            .banner-video {
                height:auto;
            width: 100%;
            border-radius: 12px;
            border: 1px solid rgba(255,255,255, 0.255)
            overflow:hidden;
  }



            h2{
                font-family: 'Wide Latin', sans-serif;
                color: #ffffff
            font-size: 2.4rem;
  }

            p {
                color: #ffffff;
            text-align: center;
            font-size: 0.8rem;
            line-height: 150%;
            font-family: 'Oswald', sans-serif;  
  }

            .button-wrapper{
                margin - top: 18px;
  }

            .outline {
                background: transparent;
            color: rgba(0, 212, 255, 0.9);
            border: 1px solid rgba(0, 212, 255, 0.6);
            transition: all .3s ease;

  }

            .outline:hover{
                transform: scale(1.125);
            color: rgba(255, 255, 255, 0.9);
            border-color: rgba(255, 255, 255, 0.9);
            transition: all .3s ease;
  }

            .fill {
                background: rgba(0, 212, 255, 0.9);
            color: rgba(255,255,255,0.95);
            filter: drop-shadow(0);
            font-weight: bold;
            transition: all .3s ease;
  }

            .fill:hover{
                transform: scale(1.125);
            border-color: rgba(255, 255, 255, 0.9);
            filter: drop-shadow(0 10px 5px rgba(0,0,0,0.125));
            transition: all .3s ease;
  }
            `