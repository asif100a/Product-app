import PropTypes from 'prop-types';

const SearchBox = ({handleSearch}) => {
    return (
        <button className="flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full px-3 py-1 hover:cursor-default" type="button">
            <input
                onChange={handleSearch}
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
    );
};

SearchBox.propTypes = {
    handleSearch: PropTypes.func
};

export default SearchBox;