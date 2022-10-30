import { motion } from "framer-motion"
import Typed from "react-typed"
import BackgroundCircles from "../BackgroundCircles/BackgroundCircles"
import ImG from "../../assets/svg/hero-bg.png"

const WHatWeDo = () => {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 0.2]
            }}
            transition={{
                duration: 2.5
            }}
            className=" h-screen flex flex-col items-center justify-center space-y-8 overflow-hidden"
        >
            <BackgroundCircles />
            <img src={ImG} alt="user" className="h-32 w-32 rounded-full object-cover mx-auto" />
            <h1>
                <Typed
                    strings={[
                        // 'Here you can find anything',
                        'Hi, The Name is Lord Gerald Kachi',
                        "Guy-who-loves-Code-the-Dark",
                        "<ButLovesToCodeMore />",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop

                    className="text-[30px] animate-spin mx-5"
                />
                <br />
                {/* ts-ignore */}
                {/* <Typed
                    strings={[
                        'Search for products',
                        'Search for categories',
                        'Search for brands']}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                    loop
                    className="mx-3"
                >
                    <input type="text" />
                </Typed> */}
            </h1>
        </motion.div>
    )
}

export default WHatWeDo
