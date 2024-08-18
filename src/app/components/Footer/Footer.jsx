import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="bg-[#f6f3f4] rounded-lg shadow dark:bg-gray-900 m-4">
            <div class="w-full max-w-screen-xl mx-auto p-4">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <Link to={'/'} className="text-center">
                        <img
                            className="mx-auto w-36"
                            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                            alt="logo" />
                        <h4 className="text-xl font-semibold  md:mb-0 mb-6">
                            Supreme Car Store
                        </h4>
                    </Link>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">Supreme Car Store™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;