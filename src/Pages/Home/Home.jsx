import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Catagory from "./Catagory/Catagory";
import Featured from "./Featured/Featured";
import PopularManu from "./PopularManu/PopularManu";
import Testimonials from "./Testimonials/Testimonials";



const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Catagory></Catagory>
            <PopularManu></PopularManu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;