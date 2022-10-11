import LeftImage from "../../assets/svg/hero-bg.png"
const Hero = () => {
    return (
        <div className="h-screen my-auto">
            <section className="relative overflow-hidden h-full" >
                <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
                    {/* <!-- Content --> */}
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h2 className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                            A Simple Bookmark Manager
                        </h2>
                        <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
                            A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites
                            load instantly. Try it for free.
                        </p>

                        <div className="flex justify-center flex-wrap gap-6">
                            <button type="button" className="btn btn-purple shadow-md py-3 px-6 rounded-md transition duration-300 hover:bg-bookmark-white hover:text-black">Get it on Chrome</button>
                            <button type="button" className="btn btn-white shadow-md py-3 px-6 rounded-md transition duration-300 hover:bg-bookmark-purple hover:text-white">Get it on Firefox</button>
                        </div>
                    </div>
                    {/* <!-- Image --> */}
                    <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
                        <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={LeftImage} alt="" />
                    </div>
                </div>
                {/* <!-- Rounded Rectangle --> */}
                <div
                    className="
          hidden
          md:block
          overflow-hidden
          bg-purple-600
          rounded-l-full
          absolute
          h-80
          w-2/4
          lg:top-80
          md:top-52
          top-32
          right-0
          lg:
          -bottom-28
          lg:-right-36
          "
                ></div>
            </section>
        </div>
    )
}

export default Hero
{/* <img src={LeftImage} className="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full" alt="leftImage" /> */ }
