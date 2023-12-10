import { BsHouseFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="mb-32" id="contact">
            <h1 className="text-green-600 text-center text-4xl lg:text-5xl font-bold mb-10">Contact Us</h1>
            <div className="flex flex-col md:flex-row max-w-[1420px] justify-center mx-auto gap-8 md:gap-20 items-center">
                <div>
                    <div className="flex gap-3 items-center">
                        <BsHouseFill className="text-lime-500 text-2xl" />
                        <p className="text-slate-500">House - 40, Road - 01, Old DOSH Banani,<br /> Dhaka - 1213, Dhaka, Bangladesh</p>
                    </div>
                    <div className="flex my-3">
                        <div className="flex gap-3 mr-5">
                            <MdEmail className="text-lime-500 text-2xl" />
                            <p className="text-slate-500">peceive.rd@gmail.com</p>
                        </div>
                        <div className="flex gap-3">
                            <IoCall className="text-lime-500 text-2xl" />
                            <p className="text-slate-500">01706-498945</p>
                        </div>
                    </div>
                </div>

                <div>
                    <ul className="flex flex-col gap-3">
                        <li><FaFacebook className="text-2xl text-blue-500 inline mr-2" /><a href="https://www.facebook.com/perceive.rd"><span className="hover:underline text-slate-500">Perceive</span></a></li>
                        <li><FaFacebook className="text-2xl text-blue-500 inline mr-2" /><a href="https://www.facebook.com/nagar.upakhyan"><span className="hover:underline text-slate-500">Urban Legend</span></a></li>
                        <li><FaFacebook className="text-2xl text-blue-500 inline mr-2" /><a href="https://www.facebook.com/Shuchiita"><span className="hover:underline text-slate-500">Shuchita</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;