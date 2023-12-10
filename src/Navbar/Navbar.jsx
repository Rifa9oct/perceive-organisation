import logo from "../assets/logo.png"
import { HashLink } from "react-router-hash-link";

const Navbar = () => {

    const navLinks = <>
        <li><HashLink smooth to="#events">Events</HashLink></li>
        <li><HashLink smooth to="#services">Services</HashLink></li>
        <li><HashLink smooth to="#contact">Contact Us</HashLink></li>
    </>

    return (
        <div className="navbar flex-col md:flex-row items-center justify-between pb-5 md:pb-0 bg-[#F7F6F0] px-16">
            <div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabIndex={0} className="flex flex-col gap-4 dropdown-content mt-3 z-[1] p-6 py-6 shadow bg-[#F7F6F0] rounded-box text-center text-sm text-orange-950 w-52">
                        {navLinks}
                    </ul>
                </div>
                <img className="h-24 pb-3" src={logo} />
            </div>
            <div>
                <div className="hidden mr-8 lg:flex">
                    <ul className="flex gap-8">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;