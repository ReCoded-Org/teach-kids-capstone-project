import Slider from "react-slick";
import "./Values.css";

const values = [
    {
        id: 1,
        title: "Trust",
        description:
            "Trust is the backbone of our business. We are a company that believes in the power of trust.",
        image: "Trust.jpg",
        alt: "Trustttttt",
    },

    {
        id: 2,
        title: "Volunteer",
        description:
            "We are a company that believes in the power of volunteerism.",
        image: "Volunteer.jpg",
        alt: "Volunteerrrr",
    },

    {
        id: 3,
        title: "Teach",
        description: "We are a company that believes in the power of teaching.",
        image: "Teach.jpg",
        alt: "Teachttttt",
    },
];

function SimpleSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: true,
        pauseOnHover: true,
    };

    return (
        <div className='pl-20 pr-20'>
            <h2 className='pt-4 text-start font-heading text-4xl font-bold text-blue-dark'>
                Our Values
            </h2>
            <Slider {...settings}>
                {values.map(function (item) {
                    return (
                        <div key={item}>
                            {/* Slider wrapper */}
                            <div
                                className='p-16 font-heading font-bold text-blue-dark md:items-center'
                                id='slider-wrapper'
                            >
                                <div className='relative mt-8 flex md:w-2/4 md:justify-center'>
                                    <img
                                        className='ml-7 w-3/5 rounded-full border-8 border-gray md:mr-20 md:w-7/12 md:border-8'
                                        src={item.image}
                                        alt={item.alt}
                                    />
                                    <div className='absolute right-6 -z-10 h-full w-3/5 rounded-full bg-blue-dark p-1 md:w-7/12'></div>
                                </div>

                                {/* Text Wrapper */}
                                <div className='w-1/4 p-4 text-justify md:break-normal'>
                                    <h1 className='pb-4 font-heading text-4xl font-bold text-blue-dark'>
                                        {item.title}
                                    </h1>
                                    <p className='text-2lg font-body font-bold text-blue-dark'>
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

export default SimpleSlider;
