import "./styles.css"
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ColoredLine from '../ColoredLine/ColoredLine';
import IGImg from "../../assets/svg/igsvg.svg"
import LiImg from "../../assets/svg/lisvg.svg"

const HomeHome = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='mainhero overflow-hidden'>
            <div className="split_bg">
                <div className="black_side"></div>
                <div className="yellow_side"></div>
            </div>

            {/* <Navbar /> */}
            <div className="main_side">
                <div className="left_main">
                    <ColoredLine color='bg-yellow-600' />
                    <p className="rest_about">
                        Mouthwatering <br />
                        Food & Restaurant <br /> Experiences
                    </p>
                    <p className="desc">
                        Satisfy your cravings and give yourself the perfect treat with our
                        carefully
                        <br />
                        selected lineup of top-class restaurants and meals in Lagos.
                    </p>
                    <div className="yellow_arrow">
                        <Link to="#" className="ord">
                            ORDER NOW
                        </Link>
                    </div>
                </div>
                <div className="right_main">
                    <Slider {...settings}>
                        <div className="each_carousel one bg">weghdvwjeg dfjbvdfjbdvdfjbvkdjfbk</div>{" "}
                        <div className="each_carousel two">dfjbvdfjbdvdfjbvkdjfbk</div>{" "}
                        <div className="each_carousel three">wedwefgwieubuoiub</div>
                    </Slider>
                    <ColoredLine color='bg-yellow-600' />
                </div>
            </div>

            <div className="icon_box">
                <div className="straight_line"></div>
                <div className="icon_box_small">
                    <a
                        href="#"
                        className="each_icon z-50"
                    >
                        <img src={IGImg} alt="ig" />
                    </a>
                    <a
                        href="#"
                        className="each_icon z-50"
                    >
                        <img src={LiImg} alt="LiImg" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HomeHome
