import React from 'react';
import WeatherImg from '../../Asset/images/weather2_1.jpg';

function Weather() {
    return (
        <div>
            {/* <div style="background-image: url('WeatherImg');"></div> */}
            <img src={WeatherImg} />
            {/* <div styles={{ backgroundImage: `url(${WeatherImg})` }}></div> */}

        </div>
    )
}

export default Weather;
