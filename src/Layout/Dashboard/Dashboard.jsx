import { FaAd, FaBookmark, FaCalendar, FaHome,  FaList, FaShoppingCart, FaStreetView, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../../hooks/useCarts";
import useAdmin from "../../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCarts();
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-3">

                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/adminHome'><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/addItems'><FaUtensils></FaUtensils> Add Items</NavLink></li>
                            <li><NavLink to='/dashboard/manageItems'><FaList></FaList> Manage Items</NavLink></li>
                            <li><NavLink to='/dashboard/bookings'><FaAd></FaAd> Manage Bookings</NavLink></li>
                            <li><NavLink to='/dashboard/allUsers'><FaUsers></FaUsers> All users</NavLink></li>
                        </>
                            : <>
                                <li><NavLink to='/dashboard/userHome'><FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar> reservation</NavLink></li>
                                <li><NavLink to='/dashboard/cart'><FaShoppingCart></FaShoppingCart> My Cart ({cart.length})</NavLink></li>
                                <li><NavLink to='/dashboard/review'><FaStreetView></FaStreetView> add review</NavLink></li>
                                <li><NavLink to='/dashboard/paymentHistory'><FaBookmark></FaBookmark> My Payment History</NavLink></li>
                            </>
                    }

                    <div className="divider"></div>
                    <li><NavLink to='/'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <g >
                                <path d="M23.3529 11.6432C23.3524 11.6426 23.3518 11.6421 23.3513 11.6415L13.5612 1.85181C13.1439 1.43433 12.5891 1.20435 11.9989 1.20435C11.4088 1.20435 10.854 1.43414 10.4365 1.85162L0.651514 11.6364C0.648218 11.6397 0.644922 11.6432 0.641626 11.6465C-0.215307 12.5084 -0.213843 13.9067 0.645838 14.7664C1.0386 15.1594 1.55734 15.387 2.11196 15.4108C2.13449 15.413 2.15719 15.4141 2.18008 15.4141H2.57028V22.6187C2.57028 24.0444 3.73025 25.2043 5.15627 25.2043H8.98647C9.37466 25.2043 9.6896 24.8896 9.6896 24.5012V18.8528C9.6896 18.2022 10.2188 17.673 10.8693 17.673H13.1285C13.7791 17.673 14.3083 18.2022 14.3083 18.8528V24.5012C14.3083 24.8896 14.623 25.2043 15.0114 25.2043H18.8416C20.2676 25.2043 21.4276 24.0444 21.4276 22.6187V15.4141H21.7894C22.3794 15.4141 22.9342 15.1843 23.3518 14.7668C24.2124 13.9056 24.2128 12.5049 23.3529 11.6432Z" fill="#151515" />
                            </g>
                            <defs>
                                <clipPath id="clip0_42_579">
                                    <rect width="24" height="24" fill="white" transform="translate(0 0.699463)" />
                                </clipPath>
                            </defs>
                        </svg>
                        Home
                    </NavLink></li>
                    <li><NavLink to='/menu'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M1.45898 7.13368H22.5414C23.3458 7.13368 24 6.4795 24 5.67505C24 4.87059 23.3458 4.21606 22.5414 4.21606H1.45898C0.654525 4.21606 0 4.87059 0 5.67505C0 6.4795 0.654525 7.13368 1.45898 7.13368Z" fill="#151515" />
                            <path d="M22.5414 11.7454H1.45898C0.654525 11.7454 0 12.3999 0 13.2043C0 14.0088 0.654525 14.663 1.45898 14.663H22.5414C23.3458 14.663 24 14.0088 24 13.2043C24 12.3999 23.3458 11.7454 22.5414 11.7454Z" fill="#151515" />
                            <path d="M22.5414 19.2747H1.45898C0.654525 19.2747 0 19.9295 0 20.734C0 21.5384 0.654525 22.1926 1.45898 22.1926H22.5414C23.3458 22.1926 24 21.5384 24 20.734C24 19.9295 23.3458 19.2747 22.5414 19.2747Z" fill="#151515" />
                        </svg>
                        Our Menu
                    </NavLink></li>
                    <li><NavLink to='/order/contact'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <g >
                                <path d="M12.0002 1.95435C10.8067 1.95435 9.66209 2.42845 8.81817 3.27237C7.97426 4.11628 7.50015 5.26087 7.50015 6.45435V7.20435H6.87765C6.24624 7.20368 5.6389 7.44657 5.18207 7.88245C4.72523 8.31832 4.45412 8.9136 4.42515 9.54435L3.83265 21.8818C3.81746 22.2136 3.86961 22.545 3.98595 22.8561C4.10228 23.1671 4.2804 23.4514 4.50956 23.6918C4.73873 23.9322 5.01419 24.1237 5.31935 24.2547C5.62451 24.3858 5.95304 24.4537 6.28515 24.4543H17.7152C18.0473 24.4537 18.3758 24.3858 18.681 24.2547C18.9861 24.1237 19.2616 23.9322 19.4907 23.6918C19.7199 23.4514 19.898 23.1671 20.0144 22.8561C20.1307 22.545 20.1828 22.2136 20.1677 21.8818L19.5752 9.54435C19.5462 8.9136 19.2751 8.31832 18.8182 7.88245C18.3614 7.44657 17.7541 7.20368 17.1227 7.20435H16.5002V6.45435C16.5002 5.26087 16.026 4.11628 15.1821 3.27237C14.3382 2.42845 13.1936 1.95435 12.0002 1.95435ZM9.00015 6.45435C9.00015 5.6587 9.31622 4.89563 9.87883 4.33303C10.4414 3.77042 11.2045 3.45435 12.0002 3.45435C12.7958 3.45435 13.5589 3.77042 14.1215 4.33303C14.6841 4.89563 15.0002 5.6587 15.0002 6.45435V7.20435H9.00015V6.45435ZM7.77015 10.3468C7.77015 10.1985 7.81414 10.0535 7.89655 9.93017C7.97896 9.80683 8.0961 9.7107 8.23314 9.65394C8.37018 9.59717 8.52098 9.58232 8.66647 9.61126C8.81196 9.6402 8.94559 9.71163 9.05048 9.81652C9.15537 9.9214 9.2268 10.055 9.25574 10.2005C9.28468 10.346 9.26983 10.4968 9.21306 10.6339C9.1563 10.7709 9.06017 10.888 8.93683 10.9704C8.81349 11.0529 8.66849 11.0968 8.52015 11.0968C8.32124 11.0968 8.13047 11.0178 7.98982 10.8772C7.84917 10.7365 7.77015 10.5458 7.77015 10.3468ZM14.7302 10.3468C14.7302 10.1985 14.7741 10.0535 14.8566 9.93017C14.939 9.80683 15.0561 9.7107 15.1931 9.65394C15.3302 9.59717 15.481 9.58232 15.6265 9.61126C15.772 9.6402 15.9056 9.71163 16.0105 9.81652C16.1154 9.9214 16.1868 10.055 16.2157 10.2005C16.2447 10.346 16.2298 10.4968 16.1731 10.6339C16.1163 10.7709 16.0202 10.888 15.8968 10.9704C15.7735 11.0529 15.6285 11.0968 15.4802 11.0968C15.2812 11.0968 15.0905 11.0178 14.9498 10.8772C14.8092 10.7365 14.7302 10.5458 14.7302 10.3468Z" fill="#151515" />
                            </g>
                            <defs>
                                <clipPath id="clip0_42_592">
                                    <rect width="24" height="24" fill="white" transform="translate(0 0.699463)" />
                                </clipPath>
                            </defs>
                        </svg>
                        Contact
                    </NavLink></li>
                    <li><NavLink to='/secret'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M12.6942 16.2363C12.4675 16.378 12.2125 16.4347 11.9858 16.4347C11.7591 16.4347 11.5041 16.378 11.2774 16.2363L0 9.35083V18.5031C0 20.4583 1.58678 22.045 3.54191 22.045H20.4581C22.4132 22.045 24 20.4583 24 18.5031V9.35083L12.6942 16.2363Z" fill="#151515" />
                            <path d="M20.458 4.36377H3.54185C1.87007 4.36377 0.453305 5.55385 0.113281 7.14063L12.0141 14.3945L23.8866 7.14063C23.5466 5.55385 22.1298 4.36377 20.458 4.36377Z" fill="#151515" />
                        </svg>
                        Secret
                    </NavLink></li>
                </ul>

            </div>
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;