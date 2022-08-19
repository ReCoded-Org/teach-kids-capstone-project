import aboutus from 'src/assets/AboutUs.jpg';
 
function AboutUs() {
   
    return (
        <div className='about-us relative h-screen items-center overflow-hidden px-8 sm:px-12 sm:h-screen lg:flex lg:h-fit lg:justify-between lg:px-36 lg:pt-10 lg:pb-32'>
            <div className='absolute left-0 bottom-16 -z-50 h-full w-full skew-y-3 bg-blue-light'></div>
 
            {/* Text div */}
            <div className='text-center text-white sm:text-center lg:w-2/4 lg:max-w-md lg:text-left'>
                <h1 className='transform py-10 font-quicksand text-5xl font-bold lg:py-0'>
                    About Us
                </h1>
                <p className='pb-10 break-normal font-SourceSansPro text-lg md:text-xl md:pb-0 md:pt-6 text-justify'>
                    Get the understanding you need to channel the books of
                    spells you`ve always been smitten with, and boost sales
                    which cartoon rabbits love to steal! Get the understanding
                    you need to channel the books of spells you`ve always been
                    smitten with, and boost sales which cartoon rabbits love to
                    steal! Get the understanding you need to channel the books
                    of spells you`ve always been smitten with, and boost sales
                    which cartoon rabbits love to steal!
                </p>
            </div>
 
            {/* Image div */}
            <div className='relative mt-8 flex w-10/12 ml-12 sm:mt-8 md:mt-20 md:w-3/4 md:ml-16 lg:w-2/4 lg:flex-row-reverse'>
                <img
                    className='ml-7 w-3/5 rounded-full sm:2/4 border-4 border-gray md:mr-20 md:w-7/12 md:border-8 xl:mr-44'
                    src={aboutus}
                    alt={"a drawing of a studying kid"}
                />
                <div className='absolute right-6 -z-10 h-full w-3/5 rounded-full bg-blue-dark p-1 md:w-7/12'></div>
            </div>
        </div>
    );
}
 
export default AboutUs;

