import Footer from "../../components/Footer/Footer";
import Navber from "../../components/Navber/Navber";
import Cards from "../../components/UI-parts/Cards/Cards";

const Home = () => {
    return (
        <div>
            <Navber />
            {/* Main Content */}
            <div>
                <Cards />
            </div>
            <Footer />
        </div>
    );
};

export default Home;