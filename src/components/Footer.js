import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

export default function Footer() {
    return (
        <div className="footer">
           <Container fluid>
               <div className="rowcol-Footer"> 
                <Row>
                    <Col>
                          <img src={process.env.PUBLIC_URL + "./pics/logo2.JPG" } 
                          style={{width:"40%", height:"60%",  marginTop:"50px", marginLeft:"20px", border: "3px solid green" }}/> 
                        {/* <p style={{ fontSize:"46px",marginTop:"40px" }}>Basic</p> 
                        <p style={{ fontSize:"46px" }}>Rengøring</p>   */}
                    </Col>
                    <Col className="col" style={{ fontSize:"24px", marginTop:"70px", color:"white" }}>Basic Rengøring ApS Olsbækeng 27, 2670 Greve</Col>
                    <Col className="col" style={{ fontSize:"24px", marginTop:"70px", color:"white" }}><strong>Tlf:</strong> 40 83 44 55 
                    <strong>Email Address:</strong> info@basicren.dk <strong>CVR:</strong> 41419164</Col>
                </Row>
                </div>
           </Container>
        </div>
    )
}

