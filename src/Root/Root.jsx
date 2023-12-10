import Navbar from "../Navbar/Navbar";
import Events from "../Components/Events/Events";
import Services from "../Components/Services/Services"
import Contact from "../Components/Contact/Contact";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import Upcomming from "../Components/Upcomming Events/Upcomming";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Upcomming></Upcomming>
            <Events></Events>
            <Services></Services>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Root;