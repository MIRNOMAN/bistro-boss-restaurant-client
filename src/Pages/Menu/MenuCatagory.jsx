import { Link } from "react-router-dom";
import Cover from "../../Share/Cover/Cover";
import MenuItem from "../../Share/MenuItem/MenuItem";


const MenuCatagory = ({items, title, img, descrption}) => {
    return (
      <div className="mt-8">
        {title && <Cover img={img} title={title} descrption={descrption}
            ></Cover>}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-16">
                {
                    items.map(item => <MenuItem key={item} item={item}></MenuItem>)
                }
            </div>
           <Link to={`/order/${title}`}> <button className="btn btn-outline border-0 border-b-4 mt-3">Order your food</button></Link>
      </div>
    );
};

export default MenuCatagory;