import { useEffect, useState, CSSProperties } from "react";
import Footer from "../../components/Footer/Footer";
import Navber from "../../components/Navber/Navber";
import Card from "../../components/UI-parts/Cards/Card";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { DotLoader } from "react-spinners";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true) 

    // Fetch the products data from the database
    useEffect(() => {
        const fetchProduct = async() => {
            const {data} = await axios.get(`${import.meta.env.VITE_SERVER_URL}/products`);
            setProducts(data);
            setIsLoading(false);
        };
        fetchProduct();
    }, []);

    console.log(products);

    return (
        <div>
            <Navber />
            {/* Main Content */}
            {
                isLoading && (
                    <div className="w-full h-screen flex justify-center items-center">
                        <DotLoader color="#d8363a" />
                    </div>
                )
            }
            <div className="container max-w-7xl w-fit mx-auto my-12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    products?.map(product => (
                        <Card key={product._id} product={product} />
                    ))
                }
            </div>
            <Footer />
        </div>
    );
};

export default Home;