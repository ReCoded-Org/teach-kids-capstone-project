import "../../App.css";
import NGOImage from "../../assets/NGOImage.png";

function SingleEventPageHeroSection() {
    return (
        <>
            <section
                className={
                    "flex  flex-col justify-around gap-6  bg-gray p-6 pb-12 md:px-20 lg:flex-row-reverse lg:gap-12 lg:px-10 xl:px-40 "
                }
            >
                <main className='md:mr-6 lg:w-2/3 xl:w-2/4 '>
                    <div className='row1 grid md:flex md:flex-row-reverse  '>
                        <img
                            src={NGOImage}
                            className=' h-40 w-40 justify-self-center rounded-full border-8 border-white '
                            alt=''
                        />
                        <ul className='mt-4 grid w-full gap-1.5 justify-self-auto text-left font-SourceSansPro text-sm font-semibold text-light-gray'>
                            <h1 className=' my-2 mb-4 justify-self-center  font-quicksand text-4xl font-semibold text-blue-dark md:justify-self-start'>
                                Starnation
                            </h1>
                            <li>Location: Istanbul</li>
                            <li>Date: 28-03-2023</li>
                            <li>Email: helloworld@gmail.com</li>
                            <li>Website: www.helloworld.com</li>
                            <li>Phone: +90 535 898 54 45</li>
                        </ul>
                    </div>
                    <div className='row2 my-4 grid text-justify'>
                        <p className='text-md my-2 font-semibold  text-blue-dark'>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using Content
                            here, content here, making it look like readable
                            English. Many desktop publishing packages and web
                            page editors now use Lorem Ipsum as their default
                            model text, and a search for will uncover many web
                            sites still in their infancy. Various versions have
                            evolved over the years, sometimes by accident,
                            sometimes on purpose (injected humour and the
                            like)......
                        </p>
                        <a
                            href='#'
                            className='font-blue-light mx-4 mt-2 mb-4 justify-self-end font-semibold'
                        >
                            Read more ...
                        </a>
                    </div>
                    <div className='my-6  flex justify-start gap-6 md:justify-start '>
                        <button
                            href=''
                            className='mw-40 hover:bg-transparent w-36 border border-blue-btn  bg-blue-btn p-1.5 font-semibold  text-white duration-300 ease-linear  hover:rounded hover:border-blue-btn hover:bg-red hover:text-white  hover:shadow md:w-44'
                        >
                            Apply
                        </button>
                    </div>
                </main>
                <div className='image grid place-items-center  md:p-4'>
                    <img
                        src={NGOImage}
                        className='md:w-4/4  items-center justify-self-center rounded-lg object-contain  lg:justify-self-start	  '
                        alt=''
                    />
                </div>
            </section>
        </>
    );
}

export default SingleEventPageHeroSection;