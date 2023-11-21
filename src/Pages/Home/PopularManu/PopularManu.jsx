import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Share/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularManu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    
   
    return (
        <section className="mb-16">
            <SectionTitle heading={'FROM OUR MENU'}
            subHeading={'Check it out'}
            >

            </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    popular.map(item => <MenuItem key={item} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularManu;