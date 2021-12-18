import React from 'react';
// import  "react-responsive-carousel/lib/style/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import '../components/carouselimage.css';
import"./carouselimage.css";
const CaruoselImage = () => {
    return (
        <div>
            <Carousel>
                <div className="image">
                    {/* <img src="../pics/topslideimage.jpg" alt="person" /> */}
                 <img src={process.env.PUBLIC_URL + "./pics/topslideimage1.jpg" } style={{width:"100%", height:"100%"}}/>  
                </div>
                 <div className="image">
                    <img src="../pics/topslideimage1.jpg" alt="person"  style={{width:"100%", height:"100%"}} />
                </div>
                 <div className="image">
                    <img src="../pics/topslideimage1.jpg" alt="person"  style={{width:"100%", height:"100%"}}/>
                </div>
                 <div className="image">
                    <img src="../pics/topslideimage1.jpg" alt="person"  style={{width:"100%", height:"100%"}}/>
                </div>
                 <div className="image">
                    <img src="../pics/topslideimage1.jpg" alt="person"  style={{width:"1000%", height:"1000%"}}/>
                </div>
            </Carousel>
            
        </div>
    );
};

export default CaruoselImage
