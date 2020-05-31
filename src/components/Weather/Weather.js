import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Weather.css';

function Weather() {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [image, setImage] = useState('image');
    let d = new Date();
    const [date, setDate] = useState('');
    setDate(d.toDateString());

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
        <div className={`container ${image}`}>
            <div className="content1 ">
                <Row>
                    <Col>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle style={{ backgroundColor: 'transparent', border: 'none' }} caret>
                                Theme
                    </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => handleMenuItemClick('image1')}>Image1</DropdownItem>
                                <DropdownItem onClick={() => handleMenuItemClick('image2')}>Image2</DropdownItem>
                                <DropdownItem onClick={() => handleMenuItemClick('image3')}>Image3</DropdownItem>

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
                        <i className='fas fa-cloud-rain'></i>&nbsp;<span>Rain</span><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span>40%</span>
                    </Col>
                    <Col>
                        <i className="fas fa-wind"></i>&nbsp;<span>Wind</span><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span>40 km/h</span>
                    </Col>
                    <Col>
                        <i className="zmdi zmdi-fire"></i>&nbsp;<span>Humidity</span><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span>5%</span>
                    </Col>
                    <Col>
                        <i className="zmdi zmdi-sun"></i>&nbsp;<span>Sun</span><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span>0 of 10</span>
                    </Col>
                </Row>
            </div>
        </div >
    )
}

export default Weather;
