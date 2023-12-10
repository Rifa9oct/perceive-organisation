import service1 from "../../assets/service1.png"
import service2 from "../../assets/service2.png"

const Services = () => {
    return (
        <div className="mb-40" id="services">
            <h1 className="text-blue-500 text-center text-5xl font-bold mb-20 mt-32">Services</h1>

            <div className="flex max-w-[1420px] gap-40 justify-center items-center">
                <div className="h-[400px]">
                    <img className="w-[320px] h-[250px] rounded-lg" src={service1} />
                    <h1 className="text-3xl font-bold text-lime-500 my-5">Architectural</h1>
                    <p className="text-slate-500 w-[400px]">Preliminary & Furniture Layout 3. 3D Perspective, Structural Design 4. Architectural 3D Visualization 5. Landscape 6. Pools and Patio for residential and commercial both space, etc</p>
                </div>
                <div className="h-[400px]">
                    <img className="w-[320px] h-[250px] rounded-lg" src={service2} />
                    <h1 className="text-3xl font-bold text-lime-500 my-5">Interior Design Consultancy</h1>
                    <p className="text-slate-500 w-[400px]">Transform your spaces with our expert Interior Design Consultancy. We bring your vision to life, creating functional and aesthetically pleasing environments. From concept to execution, we craft interiors that reflect your style and enhance your living or working spaces.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;