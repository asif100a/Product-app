import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card.jsx";
import { DotLoader } from "react-spinners";
import PropTypes from 'prop-types';
import SearchBox from "../SearchBox/SearchBox.jsx";
import FilterAndSort from "../FilterAndSort/FilterAndSort.jsx";

const Cards = ({ inputValue, handleSearch, handlePriceSorting, priceSorting }) => {
    const [products, setProducts] = useState([]);
    const [productCount, setProductCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    // console.log(inputValue);
    // console.log(products.length)
    // const productCount = products.length;
    // Define the count of product per page
    const productsPerPage = 9;
    // Get the number of pages
    const numberOfPages = Math.ceil(productCount / productsPerPage);
    // Get the array of pages
    const pages = [...Array(numberOfPages).keys()];
    // console.log(pages);

    useEffect(() => {
        // Fetch the products data from the database
        const fetchProduct = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_SERVER_URL}/products?page=${currentPage}&size=${productsPerPage}&search=${inputValue}&priceSort=${priceSorting}`);
            setProducts(data);
            setIsLoading(false);
        };
        fetchProduct();
    }, [currentPage, productsPerPage, inputValue, priceSorting]);

    useEffect(() => {
        // Fetch the count of products
        const fetchCount = async () => {
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/count`);
            const { count } = await res.json();
            // console.log(count);
            setProductCount(count);
        };
        fetchCount();
    }, []);

    console.log(products);

    const handlePrevPage = () => {
        if (currentPage !== 0) {
            setCurrentPage(currentPage - 1)
        }
    };

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div>
            {/* Search box for Small Devices */}
            <div className="flex sm:hidden mt-6 justify-center items-center">
                <SearchBox handleSearch={handleSearch} />
            </div>

            {/* Filter and Sort */}
            <div className="my-12 container max-w-7xl xl:w-[1200px] xl:mx-auto mx-3">
                <FilterAndSort handlePriceSorting={handlePriceSorting} />
            </div>

            {
                isLoading && (
                    <div className="w-full h-screen flex justify-center items-center">
                        <DotLoader color="#d8363a" />
                    </div>
                )
            }

            <div className="container max-w-7xl w-fit xl:mx-auto mx-3 my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    products?.map(product => (
                        <Card key={product._id} product={product} />
                    ))
                }
            </div>

            {/* Pagination */}
            <div className="max-w-7xl xl:w-[1200px] xl:mx-auto mx-3 flex items-center justify-between mt-0 mb-12">
                {/* Previous button */}
                <button onClick={handlePrevPage} className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border-2 border-[#dd3675] rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>

                    <span>
                        previous
                    </span>
                </button>

                <div className="items-center hidden md:flex gap-x-3">
                    {
                        pages.map(page => (
                            <button
                                onClick={() => setCurrentPage(page)}
                                key={page}
                                className={`px-2 py-1 text-sm rounded-md border-2 border-[#dd3675] ${currentPage === page && 'bg-[#dd3675] text-white'}`}>{page + 1}</button>
                        ))
                    }
                </div>

                <button onClick={handleNextPage} className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border-2 border-[#dd3675] rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                    <span>
                        Next
                    </span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

Cards.propTypes = {
    inputValue: PropTypes.string,
    handleSearch: PropTypes.func,
    handlePriceSorting: PropTypes.func,
    priceSorting: PropTypes.string,
};

export default Cards;