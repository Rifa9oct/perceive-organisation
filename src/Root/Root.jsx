import Navbar from "../Navbar/Navbar";
import Events from "../Components/Events/Events";
import Highlights from "../Components/Highlights/Highlights"
import Contact from "../Components/Contact/Contact";
import Headroom from "react-headroom";
import Banner from "../Components/Banner/Banner";

const Root = () => {
    return (
        <div>
            <Headroom>
                <Navbar></Navbar>
            </Headroom>
            <Banner></Banner>
            <Events></Events>
            <Highlights></Highlights>
            <Contact></Contact>
        </div>
    );
};

export default Root;