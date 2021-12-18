import React, {useState} from 'react';
import { DataSlider } from "../imageslider/DataSlider";
import { Container } from "react-bootstrap";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import '../imageslider/Style.css';
import { Carousel } from 'bootstrap';
// import img1 from '../images/topslideimage.jpg';


const ImageSlider = ({slides}) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1)
    }

    console.log(current);
    
    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }


    return (
        <div>
            <Container fluid className="carousel-slider">
                 <section className="slider">
           <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {DataSlider.map((slide, index) => {
                return (

                    <div className={ index === current ? 'slide active' : 'slide'} key={index}>

                        {index === current && (
                         <img src={slide.image} alt='recycling image' className='image'  style={{}}/>
                        
                        )}
                        </div>
                );
            })}
           
        </section>
       
           </Container> 
           </div>
    );
};

export default ImageSlider;