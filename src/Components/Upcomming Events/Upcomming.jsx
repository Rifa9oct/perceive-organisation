import event1 from "../../assets/event1.png"
import event2 from "../../assets/event2.png"

const Upcomming = () => {
    return (
        <div id="upcomming">
            <h1 className="text-green-600 text-center text-4xl lg:text-5xl font-bold mb-20">Upcomming Events</h1>
            {/* event-1 */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 max-w-[1420px] mx-auto items-center justify-center">
                <img className="w-1/2 rounded-lg shadow-lg" src={event1} />
                <div className="text-center lg:text-start">
                    <h1 className="text-2xl lg:text-3xl font-bold text-lime-500 my-5">Urban Legend</h1>
                    <p className="w-[400px] text-slate-500">After an immersive experience of nine long days, the participants presented their ideas and concern related to the management of Paharpur Buddhist Vihara at the Bangladesh National Museum.
                        The director general of Bangladesh Museum, the Director General of the Department of Archaeology,  Chairman of the Archaeology Department, CU and the Dean of the Architecture Faculty of Santo Marium University was present at the event.</p>
                </div>
            </div>
            {/* event-2  */}
            <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 max-w-[1420px] mx-auto items-center justify-center my-20">
                <div className="text-center lg:text-start">
                    <h1 className="text-2xl lg:text-3xl font-bold text-lime-500 my-5">Shuchita</h1>
                    <p className="w-[400px] text-slate-500">How many of us know that a woman is considered "Oshuchi" or impure during menstruation? She has to live separately or entirely alone? They are not allowed to cook, bathe or even touch the food? Yes, there are places on this earth in this 21st century with those taboos and we are here to wash them out with the project SHUCHITA.
                        It's been a year since we embarked on this journey of period equity and were planning one after another workshop in different parts of the country.</p>
                </div>
                <img className="w-1/2 rounded-lg shadow-lg" src={event2} />
            </div>
        </div>
    );
};

export default Upcomming;