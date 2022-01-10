import React from 'react';
import ImageSlider from './imageslider/ImageSlider';
import {DataSlider} from './imageslider/DataSlider';
import Footer from '../components/Footer';
import { Container, Card , Row, Col} from 'react-bootstrap';
import './mainstyles.css';
import Image1 from '../components/images/one.png';
import Image2 from '../components/images/lucy.png';

const Mainpage = () => {
    return (
        <div className="mainpage">
            <Container fluid="md">
           <div className="imageslide">
            <ImageSlider slides={DataSlider}/> 
            </div>
            <div>
                <Card className="card">
                    <Row>
                    <h2>A pure pleasure</h2>
                    <Col className="textCol">
                    <p>Since 2004, Basic Rengøring ApS has provided quality cleaning at reasonable 
                        prices throughout Greater Copenhagen. 
                        With us, you get a personal service with an understanding of your needs. We carry out 
                        our work quickly and efficiently and ensure you a clean and professional result. 
                        We take pride in our work and keep our promises. 
                        We clean with the <p style={{ textAlign:"center" }}>heart.</p></p>
                    </Col>
                    </Row>

                     <Row>
                    <Col className="imageCol">
                        <Card className="col-card">
                            <img src={Image1} style={{width:"100%", height:"100%"}}/> 
                            <h3 style={{ marginLeft:"30px", paddingLeft:"160px", color:"black"}}>Stanley Nnamani</h3>
                        </Card>
                    </Col>
                    <Col className="imageCol">   <Card className="col-card">
                                <img src={Image2 } style={{width:"100%", height:"100%"}}/>
                            <h3 style={{ marginLeft:"120px", paddingLeft:"90px", color:"black"}}>Amaka Nnamani</h3>
                            </Card>
                    </Col> 
                  </Row>
                </Card>
            </div>
            </Container>
        <Footer />
        </div>
    )}
export default Mainpage;
