import Navbar from "../Navbar/Navbar";
import Events from "../Components/Events/Events";
import Services from "../Components/Services/Services"
import Contact from "../Components/Contact/Contact";
import Banner from "../Components/Banner/Banner";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Events></Events>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Root;