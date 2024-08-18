import { Link, NavLink } from "react-router-dom";
import useAuthProvider from "../hooks/useAuthProvider";
import PropTypes from 'prop-types';
import "./navber.css";
import SearchBox from "../UI-parts/SearchBox/SearchBox";
import { CiMenuKebab } from "react-icons/ci";

const Navber = ({ handleSearch }) => {
    // Nav link array
    const navlink = [
        {
            path: '/sign-up',
            element: 'Sign Up',
        },
        {
            path: '/sign-in',
            element: 'Sign In',
        },
    ];

    const { user, signOutUser } = useAuthProvider();
    console.log(user?.photoURL);

    // Handle sign out the user
    const handleSignOut = () => {
        signOutUser();
    };

    // Handle show modal for small device
    const handleShowModal = () => {

    }

    return (
        // Header component
        <nav className=" bg-white w-full shadow-md flex relative justify-between items-center mx-auto lg:px-8 px-3 h-20">
            {/* logo */}
            <div className="inline-flex">
                <Link className="_o6689fn" to="/">
                    <div className="flex justify-center items-center">
                        <img
                            className="mx-auto md:w-24 w-16"
                            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                            alt="logo" />
                        <h3 className="text-2xl font-semibold text-gradient-color">Supreme Car Store</h3>
                    </div>
                </Link>
            </div>

            {/* end logo */}

            {/* search bar */}
            <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
                <div className="inline-block">
                    <div className="inline-flex items-center max-w-full">
                        {/* <input  type="text" /> */}
                        {/* Search Box */}
                        <SearchBox handleSearch={handleSearch} />
                    </div>
                </div>
            </div >
            {/* end search bar */}


            {/* login */}
            <div className="flex-initial">
                {/* Modal content */}
                <div className="dropdown dropdown-end block md:hidden">
                    <div tabIndex={0} role="button">
                        <div className="">
                            <CiMenuKebab className="" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {/* Nav Links */}
                        {
                            user ?
                                <li onClick={handleSignOut}><a>Logout</a></li>
                                :

                                navlink.map((link, n) => (
                                    <li key={n}><NavLink to={`${link.path}`} className={''}>{link.element}</NavLink></li>
                                ))

                        }
                    </ul>
                </div>

                <div className="flex justify-end items-center relative">

                    {
                        user ? (
                            <div className="md:block dropdown dropdown-end hidden">
                                <div className="inline relative">
                                    <button type="button" className="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg">
                                        <div className="pl-1">
                                            <svg
                                                viewBox="0 0 32 32"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                                role="presentation"
                                                focusable="false"
                                                style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: '3', overflow: 'visible' }}
                                            >
                                                <g fill="none" fillRule="nonzero">
                                                    <path d="m2 16h28"></path>
                                                    <path d="m2 24h28"></path>
                                                    <path d="m2 8h28"></path>
                                                </g>
                                            </svg>
                                        </div>

                                        <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                                            <div tabIndex={0} role="button" className="w-auto">
                                                <img src={user?.photoURL} alt="User" className="w-full rounded-full" />
                                            </div>
                                            <ul
                                                tabIndex={0}
                                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                                <li onClick={handleSignOut}><a>Logout</a></li>
                                            </ul>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        )
                            :
                            <div className="block">
                                {/* Nav Links */}
                                <ul className="md:flex flex-row gap-3 mr-4 items-center hidden">
                                    {navlink.map((link, n) => (
                                        <li key={n}><NavLink to={`${link.path}`} className={'border px-3 py-1'}>{link.element}</NavLink></li>
                                    ))}
                                </ul>
                            </div>
                    }
                </div>
            </div>
            {/* end login */}
        </nav >
    );
};

Navber.propTypes = {
    handleSearch: PropTypes.func
};

export default Navber;