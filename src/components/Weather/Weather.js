import React from 'react';
import WeatherImg from '../../Asset/images/weather2_1.jpg';
// import './Weather.css';

function Weather() {
    return (
        <div styles={{ backgroundImage: `url(${WeatherImg})` }}>
            {/* <img src={WeatherImg} /> */}
        </div>
    )
}

export default Weather;
