import PropTypes from 'prop-types';

const FilterAndSort = ({
    handlePriceSorting,
    handleTimeSorting,
    handleBrandFiltering,
    handleCategoryFiltering,
    handlePriceFiltering
}) => {

    // Handle Newest Date click
    const handleNewestDate = () => {
        handleTimeSorting('new');
    };
    // Handle Oldest Date click
    const handleOldestDate = () => {
        handleTimeSorting('old');
    };

    // Handle Brand click
    const handleBrand = (e) => {
        // console.log(e.target.value);
        handleBrandFiltering(e.target.value);
    };

    // Handle Category click
    const handleCategory = (e) => {
        // console.log(e.target.value);
        handleCategoryFiltering(e.target.value);
    };

    // Handle Category click
    const handlePriceRange = (e) => {
        // console.log(e.target.value);
        handlePriceFiltering(e.target.value);
    };

    return (
        <div className="flex justify-between">
            <div className="space-x-6">
                {/* Price Sort Button */}
                <div className="dropdown dropdown-bottom">
                    <button onClick={''} className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-red-500 rounded-lg group">
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Price</span>
                    </button>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li onClick={() => handlePriceSorting('low')}><a>Low to High</a></li>
                        <li onClick={() => handlePriceSorting('high')}><a>High to Low</a></li>
                    </ul>
                </div>

                {/* Date Sort Button */}
                <div className="dropdown dropdown-bottom">
                    <button onClick={''} className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-red-500 rounded-lg group">
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Time</span>
                    </button>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a onClick={handleNewestDate}>Newest</a></li>
                        <li><a onClick={handleOldestDate}>Oldest</a></li>
                    </ul>
                </div>
            </div>

            {/* Dropdown menu */}
            <div className='flex gap-6'>
                {/* Brand Name */}
                <select onChange={handleBrand} defaultValue={'brand'} className="select select-secondary w-fit">
                    <option disabled value={'brand'}>Brand Name</option>
                    <option value={"Tesla"}>Tesla</option>
                    <option value={"Ford"}>Ford</option>
                    <option value={"BMW"}>BMW</option>
                    <option value={"Honda"}>Honda</option>
                    <option value={"Chevrolet"}>Chevrolet</option>
                    <option value={"Toyota"}>Toyota</option>
                    <option value={"Mercedes"}>Mercedes</option>
                    <option value={"Audi"}>Audi</option>
                    <option value={"Wrangler"}>Wrangler</option>
                    <option value={"Porsche"}>Porsche</option>
                    <option value={"Lexus"}>Lexus</option>
                    <option value={"Volvo"}>Volvo</option>
                </select>

                {/* Category Name */}
                <select onChange={handleCategory} defaultValue={'category'} className="select select-secondary w-fit">
                    <option disabled value={'category'}>Category Name</option>
                    <option value={"Sedan"}>Sedan</option>
                    <option value={"Pickup"}>Pickup</option>
                    <option value={"SUV"}>SUV</option>
                    <option value={"Sports"}>Sports Car</option>
                    <option value={"Muscle"}>Muscle Car</option>
                    <option value={"Wagon"}>Wagon</option>
                    <option value={"Hatchback"}>Hatchback</option>
                    <option value={"Compact"}>Compact Car</option>
                </select>

                {/* Price Range */}
                <select onChange={handlePriceRange} defaultValue={'price'} className="select select-secondary w-fit">
                    <option disabled value={'price'}>Price Range</option>
                    <option value={"20000-50000"}>$20,000-$50,000</option>
                    <option value={"50000-70000"}>$50,000-$70,000</option>
                    <option value={"70000-100000"}>$70,000-$100,000</option>
                    <option value={"100000"}>Above $100,000</option>
                </select>
            </div>
        </div>
    );
};

FilterAndSort.propTypes = {
    handlePriceSorting: PropTypes.func,
    handleTimeSorting: PropTypes.func,
    handleBrandFiltering: PropTypes.func,
    handleCategoryFiltering: PropTypes.func,
    handlePriceFiltering: PropTypes.func,
};

export default FilterAndSort;