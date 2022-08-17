import Slider from "react-slick";
import "./Values.css";
import volunteerPic from "src/assets/Volunteer.jpg";
import teachPic from "src/assets/Teach.jpg";
import trustPic from "src/assets/Trust.jpg";
 
 
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
 
    return (
        <div className='px-4 md:px-20'>
            <h2 className='text-center md:text-center lg:text-left lg:pl-16 font-quicksand text-5xl font-bold text-blue-dark'>
                Our Values
            </h2>
            <Slider {...settings}>
                {values.map(function (item) {
                    return (
                        <div key={item}>
                            {/* Slider wrapper */}
                            <div
                                className='mx-8 font-quicksand text-blue-dark'
                                id='slider-wrapper'
                            >
                                <div className='flex relative w-10/12 my-10 md:ml-32 md:mt-8 lg:my-12 md:w-3/5 lg:w-2/4 md:justify-center lg:ml-10'>
                                    <img
                                        className='md:ml-7 w-3/5 rounded-full border-4 border-gray sm:mr-16 md:mr-72 lg:mr-20 md:w-11/12 lg:w-7/12 md:border-8'
                                        src={item.image}
                                        alt={item.alt}
                                    />
                                    <div className='absolute right-6 -z-10 h-full w-3/5 rounded-full bg-blue-dark md:right-6 md:w-11/12 lg:w-7/12'></div>
                                </div>
 
                                {/* Text Wrapper */}
                                <div className='mt-8 sm:w-10/12 md:w-10/12 lg:w-2/4 lg:mr-8 text-justify sm:mx-0 md:break-normal lg:px-6 lg:pl-14'>
                                    <h1 className='pb-4 font-quicksand text-5xl font-bold text-blue-dark'>
                                        {item.title}
                                    </h1>
                                    <p className='text-lg pb-12 md:text-xl font-SourceSansPro text-blue-dark'>
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
