import aboutus from "src/assets/AboutUs.jpg";
import { useTranslation } from "react-i18next";

function AboutUs() {
    const [t] = useTranslation();

    return (
        <div className='about-us relative h-screen items-center overflow-hidden px-8 sm:h-screen sm:px-12 lg:flex lg:h-fit lg:justify-between lg:px-36 lg:pt-10 lg:pb-32'>
            <div className='absolute left-0 bottom-16 -z-50 h-full w-full skew-y-3 bg-blue-light'></div>

            {/* Text div */}
            <div className='flex flex-col text-white sm:text-center lg:w-2/4 lg:max-w-md '>
                <h1 className='transform self-center py-10 font-quicksand text-5xl font-bold lg:self-start lg:py-0'>
                    {t("home.aboutUs.title")}
                </h1>
                <p className='break-normal pb-10 text-justify font-SourceSansPro text-lg md:pb-0 md:pt-6 md:text-xl'>
                    {t(`home.aboutUs.texts.${[0]}.description`)}
                </p>
            </div>

            {/* Image div */}
            <div className='relative mt-8 ml-12 flex w-10/12 sm:mt-8 md:mt-20 md:ml-16 md:w-3/4 lg:w-2/4 lg:flex-row-reverse'>
                <img
                    className='sm:2/4 ml-7 w-3/5 rounded-full border-4 border-gray md:mr-20 md:w-7/12 md:border-8 xl:mr-44'
                    src={aboutus}
                    alt={"a drawing of a studying kid"}
                />
                <div className='absolute right-6 -z-10 h-full w-3/5 rounded-full bg-blue-dark p-1 md:w-7/12'></div>
            </div>
        </div>
    );
}

export default AboutUs;
