import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import WeatherImg from '../../Asset/images/6.webp';
import WeatherImg1 from '../../Asset/images/10.webp';
import WeatherImg2 from '../../Asset/images/8.webp';
import WeatherImg3 from '../../Asset/images/9.webp';
// import axios from 'axios';
import './Weather.css';

const img = [{ label: "WeatherImg", value: WeatherImg },
{ label: "WeatherImg1", value: WeatherImg1 }]
function Weather() {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [image, setImage] = useState(WeatherImg);
    let d = new Date();
    const [date, setDate] = useState(d.toDateString());

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const handleMenuItemClick = (value) => {
        setImage(value);
    }
    // useEffect(() => {
    //     fetch("https://weatherbit-v1-mashape.p.rapidapi.com/current?lang=en&lon=%3Crequired%3E&lat=%3Crequired%3E", {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
    //             "x-rapidapi-key": "7e15dcea92msh21d705098d10b51p11238djsn669d46e3e6d4"
    //         }
    //     })
    //         .then(response => {
    //             console.log(response);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });

    // }, []); //Pass Array as second argument

    return (
        <div className="container">
            <img src={image} alt="Notebook" style={{ width: '100%' }} />
            <div className="content1 ">
                <Row>
                    <Col>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle className="btn" caret>
                                Theme
                    </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => handleMenuItemClick(WeatherImg1)}>Image1</DropdownItem>
                                <DropdownItem onClick={() => handleMenuItemClick(WeatherImg2)}>Image2</DropdownItem>
                                <DropdownItem onClick={() => handleMenuItemClick(WeatherImg3)}>Image3</DropdownItem>

                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                    <Col>{date}</Col>
                </Row>
            </div>
            <div className="content">

                <Row>
                    <Col>
                        <h1>4 &#8451;</h1>
                        <span>FEEL LIKE 7 &#8451;</span>
                    </Col>
                    <Col>
                        <i class='fas fa-cloud-rain'></i>&nbsp;<span>Rain</span><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span>40%</span>
                    </Col>
                    <Col>
                        <i class="fas fa-wind"></i>&nbsp;<span>Wind</span><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span>40 km/h</span>
                    </Col>
                    <Col>
                        <i class="zmdi zmdi-fire"></i>&nbsp;<span>Humidity</span><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span>5%</span>
                    </Col>
                    <Col>
                        <i class="zmdi zmdi-sun"></i>&nbsp;<span>Sun</span><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span>0 of 10</span>
                    </Col>
                </Row>
            </div>
        </div >
    )
}

export default Weather;
