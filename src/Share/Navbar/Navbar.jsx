import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCarts from "../../hooks/useCarts";
import useAdmin from "../../hooks/useAdmin";


const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCarts();
  const handleLogedOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }
  const navlinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/menu'>Our Menu</NavLink></li>
    <li><NavLink to='/order/salad'>Order</NavLink></li>
   {
      user && isAdmin &&   <li><NavLink to='/dashboard/adminHome'>Dashboard</NavLink></li>
   }
   {
    user && isAdmin &&  <li><NavLink to='/dashboard/userHome'>Dashboard</NavLink></li>
   }
    <li><Link to='/dashboard/cart'>
      <button className="btn btn-sm">
       <FaShoppingCart className="mr-2 text-xl"></FaShoppingCart>
        <div className="badge  badge-secondary">+{cart.length}</div>
      </button>
    </Link></li>

    {
      user ? <> <button onClick={handleLogedOut} className="">LogOut</button></> :
        <> <li><NavLink to='/login'>Login</NavLink></li> </>
    }
  </>
  return (
    <div >
      <div className="navbar fixed z-10 bg-black  bg-opacity-30 max-w-screen-lg text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navlinks}
            </ul>
          </div>
          <div className="">
            <p className="  text-xl cinzel font-black tracking-widest">BISTRO BOSS</p>
            <p className="  text-xl cinzel font-extrabold tracking-widest">Restaurant</p>
          </div>
        </div>
        <div className="navbar-center hidden  lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user && <div className="flex justify-center items-center gap-4">
              <span>{user.displayName}</span>
              <div className="avatar">
                <div className="w-12">
                  <img className="rounded-full" src={user.photoURL} />
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;