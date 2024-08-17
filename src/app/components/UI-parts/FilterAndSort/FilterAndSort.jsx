import PropTypes from 'prop-types';

const FilterAndSort = ({ handlePriceSorting }) => {
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
                        <li><a>Newest</a></li>
                        <li><a>Oldest</a></li>
                    </ul>
                </div>
            </div>

            {/* Dropdown menu */}
            <div>
                <div className="form-control">
                    <label className="cursor-pointer label">
                        <span className="label-text">Brand Name</span>
                        <input type="checkbox" defaultChecked className="checkbox checkbox-secondary" />
                    </label>
                </div>
            </div>

            <div>
                <div className="form-control">
                    <label className="cursor-pointer label">
                        <span className="label-text">Category Name</span>
                        <input type="checkbox" defaultChecked className="checkbox checkbox-secondary" />
                    </label>
                </div>
            </div>
        </div>
    );
};

FilterAndSort.propTypes = {
    handlePriceSorting: PropTypes.func,
};

export default FilterAndSort;