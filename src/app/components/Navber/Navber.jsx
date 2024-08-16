import { Link, NavLink } from "react-router-dom";
import useAuthProvider from "../hooks/useAuthProvider";

const Navber = () => {
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

    return (
        // Header component
        <nav className=" bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20">
            {/* logo */}
            <div className="inline-flex">
                <Link className="_o6689fn" to="/">
                    <div className="hidden md:block">
                        <h3>Supreme Car Store</h3>
                    </div>
                </Link>
            </div>

            {/* end logo */}

            {/* search bar */}
            <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
                <div className="inline-block">
                    <div className="inline-flex items-center max-w-full">
                        {/* <input  type="text" /> */}
                        <button className="flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full px-3 py-1 hover:cursor-default" type="button">
                            <input
                                type="text"
                                placeholder="Start your search"
                                className="block flex-grow flex-shrink overflow-hidden focus:outline-none ml-3"
                            />
                            <div className="flex items-center justify-center relative hover:cursor-pointer h-8 w-8 rounded-full">
                                <svg
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false"
                                    style={{
                                        display: 'block',
                                        fill: 'none',
                                        height: '12px',
                                        width: '12px',
                                        stroke: 'currentcolor',
                                        strokeWidth: '5.33333',
                                        overflow: 'visible'
                                    }}
                                >
                                    <g fill="none">
                                        <path
                                            d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
                                        ></path>
                                    </g>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div >
            {/* end search bar */}

            {/* login */}
            <div className="flex-initial">
                <div className="flex justify-end items-center relative">

                    {
                        user ? (
                            <div className="block dropdown dropdown-end">
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
                                <ul className="flex flex-row gap-3 mr-4 items-center">
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

export default Navber;