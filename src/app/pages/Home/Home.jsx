import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navber from "../../components/Navber/Navber";
import Cards from "../../components/UI-parts/Cards/Cards";

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [priceSorting, setPriceSorting] = useState('');

    // Implement Search functionality
    const handleSearch = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    };

    // Implement Price sorting
    const handlePriceSorting = (value) => {
        console.log(value);
        setPriceSorting(value);
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
                />
            </div>
            <Footer />
        </div>
    );
};

export default Home;