import React from 'react';
// import styled from 'styled-components';
import { Slide } from 'react-slideshow-image';
import cebolla from './assets/statics/cebolla.jpg';
import Lechuga from './assets/statics/Lechuga.jpg';
import maiz from './assets/statics/maiz.jpg';
import './components/Styles/home.css';

const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}
const Home = () => {
  return(
    <div className="GridWrapper2">
      <div className="containerSlide">
        <Slide {...proprietes}>
            <div className="each-slide">
                <div>
                    <img src={cebolla} alt="cebolla" />
                </div>
            </div>
            <div className="each-slide">
                <div>
                    <img src={Lechuga} alt="Lechuga" />
                </div>
            </div>
            <div className="each-slide">
                <div>
                    <img src={maiz} alt="maiz" />
                </div>
            </div>
        </Slide>

        </div>
        <div className="info">
          <h4>Usochicamocha</h4>
          <p> Weather Station</p>
          <h4>Contact us:</h4>
          <h5>precaginternational@gmail.com</h5>
        </div>
    </div>
  )
}

export default Home;