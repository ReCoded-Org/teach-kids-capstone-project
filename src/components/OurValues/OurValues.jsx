import Slider from "react-slick";
import "./Values.css";
import volunteerPic from "src/assets/volunteer.jpg";
import teachPic from "src/assets/Teach.jpg";
import trustPic from "src/assets/Trust.jpg";
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
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };
    const [t] = useTranslation();
    const ImgMap = {
        volunteerPic: volunteerPic,
        teachPic: teachPic,
        trustPic: trustPic,
    };
    return (
        <div className='px-4 md:px-20'>
            <h2 className='text-center font-quicksand text-5xl font-bold text-blue-dark md:text-center lg:pl-16 lg:text-left'>
                {t("home.ourValues.title")}
            </h2>
            <Slider {...settings}>
                {t("home.ourValues.texts", { returnObjects: true }).map(
                    function (item) {
                        return (
                            <div key={item}>
                                {/* Slider wrapper */}
                                <div
                                    className='mx-8 font-quicksand text-blue-dark'
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
                                    <div className='mt-8 text-justify sm:mx-0 sm:w-10/12 md:w-10/12 md:break-normal lg:mr-8 lg:w-2/4 lg:px-6 lg:pl-14'>
                                        <h1 className='pb-4 font-quicksand text-5xl font-bold text-blue-dark'>
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
    );
}

export default OurValues;
