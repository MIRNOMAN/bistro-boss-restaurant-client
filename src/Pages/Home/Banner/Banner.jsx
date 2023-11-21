import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import picture1 from "../../../assets/home/01.jpg"
import picture2 from "../../../assets/home/02.jpg"
import picture3 from "../../../assets/home/03.png"
import picture4 from "../../../assets/home/04.jpg"
import picture5 from "../../../assets/home/05.png"



const Banner = () => {
    return (
        <Carousel className="text-center" autoPlay={Boolean}>
                <div>
                    <img src={picture1} />
                  
                </div>
                <div>
                    <img src={picture2}/>
                    
                </div>
                <div>
                    <img src={picture3} />
                   
                </div>
                <div>
                    <img src={picture4} />
                   
                </div>
                <div>
                    <img src={picture5} />
                    
                </div>
            </Carousel>
    );
};

export default Banner;