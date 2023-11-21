import { Helmet } from "react-helmet-async";
import Cover from "../../Share/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCatagory from "./MenuCatagory";


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={'OUR MENU'} descrption={'Would you like to try a dish?'}
            ></Cover>
            {/* menu cover */}
            <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"}></SectionTitle>
            {/* offer menu item */}
            <MenuCatagory items={offered}></MenuCatagory>
            {/* desert item */}
            <MenuCatagory
            items={desserts}
            title='dessert'
            descrption={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            img={dessertImg}
            ></MenuCatagory>
            {/* pizza item */}
           <MenuCatagory 
           items={pizza}
           title={'pizza'}
           descrption={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
           img={pizzaImg}
           ></MenuCatagory>
            {/* salad item */}
            <MenuCatagory 
           items={salad}
           title={'salad'}
           descrption={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
           img={saladImg}
           ></MenuCatagory>
            {/* soup item */}
            <MenuCatagory 
           items={soup}
           title={'soup'}
           descrption={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
           img={soupImg}
           ></MenuCatagory>
          
        </div>
    );
};

export default Menu;