import Slider from "react-slick";
import "./Values.css";
import volunteerPic from "src/assets/volunteer.jpg";
import teachPic from "src/assets/Teach.jpg";
import trustPic from "src/assets/Trust.jpg";
import { useTranslation } from "react-i18next";

const values = [
    {
        id: 1,
        title: "Trust",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: trustPic,
        alt: "a drawing of three people working together",
    },

    {
        id: 2,
        title: "Volunteer",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: volunteerPic,
        alt: "a drawing of two people workers",
    },

    {
        id: 3,
        title: "Teach",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: teachPic,
        alt: "a drawing of three children studying together",
    },
];

function OurValues() {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

    const [t] = useTranslation();

    // console.log(useTranslation())
    console.log(t("ourValues.texts"))

    return (
        <div className='pl-4 pr-4 md:pl-20 md:pr-20'>
            <h2 className='pt-4 text-center font-quicksand text-5xl font-bold text-blue-dark md:text-start'>
                {t("home.ourValues.title")}
            </h2>
            <Slider {...settings}>
                {values.map(function (item) {
                    return (
                        <div key={item}>
                            {/* Slider wrapper */}
                            <div
                                className='p-12 font-quicksand font-bold text-blue-dark md:items-center'
                                id='slider-wrapper'
                            >
                                <div className='relative mt-8 flex md:w-2/4 md:justify-center'>
                                    <img
                                        className='w-3/5 rounded-full border-8 border-gray md:ml-7 md:mr-20 md:w-7/12 md:border-8'
                                        src={item.image}
                                        alt={item.alt}
                                    />
                                    <div className='absolute right-6 -z-10 h-full w-3/5 rounded-full bg-blue-dark p-1 md:w-7/12'></div>
                                </div>

                                {/* Text Wrapper */}
                                <div className='mt-14 text-justify md:w-5/12 md:break-normal md:p-4'>
                                    <h1 className='pb-4 font-quicksand text-4xl font-bold text-blue-dark'>
                                        {item.title}
                                    </h1>
                                    <p className='md:text-2lg font-SourceSansPro text-lg font-bold text-blue-dark'>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export default OurValues;
