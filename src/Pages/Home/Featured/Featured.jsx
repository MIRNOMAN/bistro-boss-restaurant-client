import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg"
import './Featured.css'
const Featured = () => {
    return (
        <section className="feature-item text-white pt-8 bg-slate-500 bg-opacity-40">
            <SectionTitle heading={'FROM OUR MENU'} subHeading={'Check it out'}>

            </SectionTitle>
            <div className="md:flex justify-center items-center py-20 px-36">
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className="ml-5 ">
                    <p>March 20, 2023</p>
                    <h3 className="text-xl">WHERE CAN I GET SOME?</h3>
                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-3">Read More</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;