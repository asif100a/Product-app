import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navber from "../../components/Navber/Navber";
import Cards from "../../components/UI-parts/Cards/Cards";

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [priceSorting, setPriceSorting] = useState('');
    const [timeSorting, setTimeSorting] = useState('');
    const [brandFiltering, setBrandFiltering] = useState('');
    const [categoryFiltering, setCategoryFiltering] = useState('');
    const [priceFiltering, setPriceFiltering] = useState('');

    // --------------[Searching]--------------
    // Implement Search functionality
    const handleSearch = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    };

    // -------------[Sorting]--------------
    // Implement Price sorting
    const handlePriceSorting = (value) => {
        console.log(value);
        setPriceSorting(value);
    };

    // Implement Time sorting
    const handleTimeSorting = (value) => {
        console.log(value);
        setTimeSorting(value);
    };

    // ---------------[Filtering]--------------
    // Implement Brand filtering
    const handleBrandFiltering = (value) => {
        console.log(value);
        setBrandFiltering(value);
    };

    // Implement Category filtering
    const handleCategoryFiltering = (value) => {
        console.log(value);
        setCategoryFiltering(value);
    };

    // Implement Price Range filtering
    const handlePriceFiltering = (value) => {
        console.log(value);
        setPriceFiltering(value);
    };

    return (
        <div>
            <Navber handleSearch={handleSearch} />
            {/* Main Content */}
            <div>
                <Cards
                    inputValue={inputValue}
                    handleSearch={handleSearch}
                    handlePriceSorting={handlePriceSorting}
                    priceSorting={priceSorting}
                    handleTimeSorting={handleTimeSorting}
                    timeSorting={timeSorting}
                    handleBrandFiltering={handleBrandFiltering}
                    brandFiltering={brandFiltering}
                    handleCategoryFiltering={handleCategoryFiltering}
                    categoryFiltering={categoryFiltering}
                    handlePriceFiltering={handlePriceFiltering}
                    priceFiltering={priceFiltering}
                />
            </div>
            <Footer />
        </div>
    );
};

export default Home;