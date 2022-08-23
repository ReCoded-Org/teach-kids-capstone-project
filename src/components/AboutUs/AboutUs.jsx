import Slider from "react-slick";
import "./AboutUs.css";
import aboutUsOne from "src/assets/AboutUs-1.jpg";
import aboutUsTwo from "src/assets/AboutUs-2.jpg";
import aboutUsThree from "src/assets/AboutUs-3.jpg";
import SliderArrow from "./SliderArrow/SliderArrow";
import { useTranslation } from "react-i18next";

function AboutUs() {
    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        nextArrow: <SliderArrow leftOrRight={"left"} />,
        prevArrow: <SliderArrow leftOrRight={"right"} />,
    };

    const [t] = useTranslation();
    const ImgMap = {
        aboutUsOne: aboutUsOne,
        aboutUsTwo: aboutUsTwo,
        aboutUsThree: aboutUsThree,
    };

    return (
        <div flex flex-col>
            <div className=' w-full bg-blue-light p-3'>
                <p className='text-lg text-blue-light'>1</p>
            </div>
            <div className=' absolute w-full bg-blue-light p-3'>
                <p className='text-lg text-blue-light'>1</p>
            </div>
            <div className='diagonal-box-about flex flex-col bg-blue-light '>
                <div className='content-about'>
                    <h2 className='mt-14 text-center font-quicksand text-5xl font-bold text-white md:text-center lg:pl-16 lg:text-left'>
                        {t("home.aboutUs.title")}
                    </h2>
                    <Slider {...settings}>
                        {t("home.aboutUs.texts", { returnObjects: true }).map(
                            function (item) {
                                return (
                                    <div key={item}>
                                        {/* Slider wrapper */}
                                        <div
                                            className='mx-8 font-quicksand text-white'
                                            id='slider-wrapper'
                                        >
                                            {/* Text Wrapper */}
                                            <div className='mt-8 text-justify sm:mx-0 sm:w-10/12 md:w-10/12 md:break-normal lg:mr-8 lg:w-2/4 lg:px-6 lg:pl-14'>
                                                <p className='pb-12 font-SourceSansPro text-lg text-white md:text-xl'>
                                                    {item.description}
                                                </p>
                                            </div>

                                            <div className='relative my-10 flex w-10/12 md:ml-32 md:mt-8 md:w-3/5 md:justify-center lg:my-12 lg:ml-10 lg:w-2/4'>
                                                <img
                                                    className='w-3/5 rounded-full border-4 border-gray sm:mr-16 md:ml-7 md:mr-72 md:w-11/12 md:border-8 lg:mr-20 lg:w-7/12'
                                                    src={ImgMap[item.image]}
                                                    alt={item.alt}
                                                />
                                                <div className='absolute right-6 -z-10 h-full w-3/5 rounded-full bg-blue-dark md:right-6 md:w-11/12 lg:w-7/12'></div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        )}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
