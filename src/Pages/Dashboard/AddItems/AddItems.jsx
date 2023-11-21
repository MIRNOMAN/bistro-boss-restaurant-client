import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api =  `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
    const { register, handleSubmit , reset} = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async(data) => {
        console.log(data)

        const imageFile = {image : data.image[0]};
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data',
            }
        } )
        if(res.data.success){
            const menuItem ={
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe : data.recipe,
                image: res.data.data.display_url,
            }
            const menuRes = await axiosSecure.post('/menu', menuItem)
            console.log(menuRes.data)
            if(menuRes.data.insertedId){
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} item added successfully`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
    }
    return (
        <div>
            <SectionTitle heading="add an item" subHeading="What's new?"></SectionTitle>
            <div className="bg-slate-100 p-16">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recipe name*</label>
                        <input type="text" {...register("name")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type here" required />
                    </div>
                    <div className="md:flex mt-7">
                        <div className="w-1/2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category*</label>
                            <select {...register("catagory")} className="select select-bordered w-full ">
                                <option disabled selected>Select a catagory</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>

                            </select>
                        </div>
                        <div className="w-1/2 ml-4">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price*</label>
                            <input type="number" {...register("price")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Price" required />
                        </div>
                        
                    </div>
                    <div className="mt-7">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recipe Details*</label>
                        <textarea {...register("recipe")} className="textarea w-full  h-[150px] textarea-bordered" placeholder="Recipe Details"></textarea>
                     </div>
                     <div className="mt-7">
                     <input type="file" {...register("image")} className=" gap-3 bg-opacity-0 w-full" />
                     </div>

                     <input type="submit" className="btn mt-5 bg-[#D1A054] font-bold text-white" value="Add Item " />
                     
                </form>
            </div>
        </div>
    );
};

export default AddItems;