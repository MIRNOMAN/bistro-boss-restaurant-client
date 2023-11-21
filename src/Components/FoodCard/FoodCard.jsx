import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import useCarts from "../../hooks/useCarts";


const FoodCard = ({ item }) => {
    const { name, image, price, recipe , _id} = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCarts();

    const handleAddToCart = () => {
        if (user && user.email) {
            //    send the card
            const cardItem = {
                menuId : _id,
                email: user.email,
                name,
                image,
                price,
            }
            axiosSecure.post('/carts', cardItem)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      refetch();
                }
            })
        } else {
            Swal.fire({
                title: "You car not login",
                text: "Please login to add to cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location }})
                }
            });
        }
    }
    return (
        <div>
            <div className="card h-full flex-grow bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-2">${price}</p>
                <div className="card-body flex-grow">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button onClick={handleAddToCart} className="btn btn-outline border-orange-400 border-0 bg-slate-100 border-b-4 mt-3">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;