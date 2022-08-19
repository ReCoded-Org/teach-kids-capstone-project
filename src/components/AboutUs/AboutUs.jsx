import aboutus from 'src/assets/AboutUs.jpg';
import { useTranslation } from "react-i18next";

function AboutUs() {
    const [t] = useTranslation();

    return (
        <div className='relative h-screen items-center overflow-hidden p-6 pt-5 md:flex md:h-fit md:items-center md:justify-between md:p-24'>
            <div className='absolute left-0 bottom-16 -z-50 h-full w-full skew-y-3 bg-blue-light'></div>

            {/* Text div */}
            <div className=' text-center text-lg text-white md:w-2/4 md:max-w-md md:text-left'>
                <h1 className='transform pb-3 font-heading text-3xl font-bold transition-all md:text-4xl'>
                {t("home.aboutUs.title")}
                </h1>
                <p className='font-bold-400 break-normal font-body text-sm md:text-xl'>
                {t(`home.aboutUs.texts.${[0]}.description`)}
                </p>
            </div>

            {/* Image div */}
            <div className='relative mt-8 flex md:w-2/4 md:flex-row-reverse'>
                <img
                    className='ml-7 w-3/5 rounded-full border-4 border-gray md:mr-20 md:w-7/12 md:border-8 xl:mr-44'
                    src={aboutus}
                    alt={"a drawing of a studying kid"}
                />
                <div className='absolute right-6 -z-10 h-full w-3/5 rounded-full bg-blue-dark p-1 md:w-7/12'></div>
            </div>
        </div>
    );
}

export default AboutUs;
