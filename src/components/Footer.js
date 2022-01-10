import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import Image1 from '../components/images/logo2.JPG';

export default function Footer() {
    return (
        <div className="footer">
           <Container fluid >
               <div className="rowcol-Footer"> 
                <Row className="rowfoot">
                    <Col>
                          <img src={Image1} 
                          style={{width:"35%", height:"55%",  marginTop:"50px", marginLeft:"20px", border: "3px solid green" }}/> 
                    </Col>
                    <Col className="col" style={{ fontSize:"24px", marginTop:"70px", color:"white" }}>
                        <h3>Basic Rengøring ApS Olsbækeng 27 </h3><h3>2670, Greve</h3>
                    </Col>
                    <Col className="col" style={{ fontSize:"24px", marginTop:"70px", color:"white", marginBottom:"10px" }}>
                        <h3><strong>Tlf:</strong> 40 83 44 55 </h3>
                    <h3><strong>Email Address:</strong> info@basicren.dk </h3><h3><strong>CVR:</strong> 41419164</h3>
                    </Col>
                </Row>
                </div>
           </Container>
        </div>
    )
}

