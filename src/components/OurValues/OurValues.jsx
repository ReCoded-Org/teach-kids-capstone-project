import Slider from "react-slick";
import "./Values.css";
import volunteerPic from "src/assets/volunteer.jpg";
import teachPic from "src/assets/Teach.jpg";
import trustPic from "src/assets/Trust.jpg";
import SliderArrow from "./SliderArrow/SliderArrow";

import { useTranslation } from "react-i18next";

function OurValues() {
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
        volunteerPic: volunteerPic,
        teachPic: teachPic,
        trustPic: trustPic,
    };
    let reverse = "flex-row";
    let reverse1 = "lg:text-left";
    if (t("home.ourValues.title") !== "Our Values") {
        console.log("hello");
        reverse = "flex-row-reverse";
        reverse1 = "lg:text-right text-start";
    }
    return (
        <div className='area  h-[55rem] sm:h-[54rem] md:h-[64rem] lg:h-[36rem] xl:h-[40rem]'>
            <ul className='circles  mb-48 flex '>
                <div className='mx-auto  w-11/12 py-24 md:w-9/12'>
                    <h2
                        className={`mb-6 text-center font-quicksand text-4xl font-bold  text-blue-dark md:text-center md:text-5xl lg:pl-16 ${reverse1}`}
                    >
                        {t("home.ourValues.title")}
                    </h2>
                    <Slider {...settings}>
                        {t("home.ourValues.texts", { returnObjects: true }).map(
                            function (item) {
                                return (
                                    <div key={item} className='px-2'>
                                        {/* Slider wrapper */}
                                        <div
                                            className={` flex justify-between font-quicksand text-blue-dark   xl:gap-24`}
                                            id='slider-wrapper'
                                        >
                                            <div className='relative my-10 flex w-10/12 md:ml-32 md:mt-8 md:w-3/5 md:justify-center lg:my-12 lg:ml-10 lg:w-2/4'>
                                                <img
                                                    className='w-3/5 rounded-full border-4 border-gray sm:mr-16 md:ml-7 md:mr-72 md:w-11/12 md:border-8 lg:mr-20 lg:w-7/12'
                                                    src={ImgMap[item.image]}
                                                    alt={item.alt}
                                                />
                                                <div className='absolute right-6 -z-10 h-full w-3/5 rounded-full bg-blue-dark md:right-6 md:w-11/12 lg:w-7/12'></div>
                                            </div>

                                            {/* Text Wrapper */}
                                            <div className=' mt-8 md:break-normal  lg:w-3/4  '>
                                                <h1
                                                    className={`pb-4 ${reverse1}   font-quicksand text-xl font-bold text-blue-dark  md:text-4xl`}
                                                >
                                                    {item.title}
                                                </h1>
                                                <p className='pb-12 font-SourceSansPro text-lg text-blue-dark md:text-xl'>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        )}
                    </Slider>
                </div>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
}

export default OurValues;
