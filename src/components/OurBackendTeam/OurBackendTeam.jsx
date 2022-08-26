import kinanImg from "../../assets/kinanImg.png";
import hibaImg from "../../assets/hibaImg.jpg";
import ayaImg from "../../assets/ayaImg.jpg";
import ramaImg from "../../assets/ramaImg.jpg";
import mustafaImg from "../../assets/mustafaImg.jpg";
import mohammadImg from "../../assets/mohammadImg.jpg";
import "./OurBackendTeam.css";

function OurBackendTeam() {
    return (
        <>
            <section className='diagonal-box dark:bg-gray-900 bg-gray'>
                <div className='content container mx-auto px-6 py-10'>
                    <h1 className='text-blue-dark text-center text-5xl font-quicksand capitalize dark:text-white lg:text-5xl'>
                        Our Backend Team
                    </h1>

                    <p className='text-blue-dark dark:text-gray-300 mx-auto my-6 max-w-2xl text-center font-SourceSansPro'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illo incidunt ex placeat modi magni quia error alias,
                        adipisci rem similique, at omnis eligendi optio eos
                        harum.
                    </p>

                    <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-16 xl:grid-cols-3'>
                        <div className='group flex transform cursor-pointer flex-col items-center rounded-xl p-8 transition-colors duration-200 hover:bg-blue-light'>
                            <img
                                className='h-40 w-40 rounded-full object-cover ring-4 ring-blue-light'
                                src={hibaImg}
                                alt='Hiba Machfej Profile'
                            />

                            <h1 className='text-gray-700 mt-4 text-2xl font-quicksand capitalize group-hover:text-white dark:text-white'>
                                Hiba Machfej
                            </h1>

                            <p className='text-gray-500 dark:text-gray-300 group-hover:text-gray-300 mt-2 capitalize font-SourceSansPro'>
                                Lead Engineer
                            </p>

                            <div className='-mx-2 mt-3 flex'>
                                <a
                                    href='https://www.linkedin.com/in/hiba-machfej-09400189/'
                                    className='text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 mx-2 group-hover:text-white'
                                    aria-label='Linkedin'
                                >
                                    <svg
                                        className='h-6 w-6 fill-current'
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 512 512'
                                    >
                                        <path d='M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z' />
                                    </svg>
                                </a>

                                <a
                                    href='https://github.com/hiba-machfej'
                                    className='text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 mx-2 group-hover:text-white'
                                    aria-label='Github'
                                >
                                    <svg
                                        className='h-6 w-6 fill-current'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path d='M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z'></path>
                                    </svg>
                                </a>

                                <a
                                    href='mailto:hiba.mashfij@gmail.com'
                                    className='text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 mx-2 group-hover:text-white'
                                    aria-label='Email'
                                >
                                    <svg
                                        className='h-6 w-6 fill-current'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z'
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className='group flex transform cursor-pointer flex-col items-center rounded-xl p-8 transition-colors duration-200 hover:bg-blue-light'>
                            <img
                                className='h-40 w-40 rounded-full object-cover ring-4 ring-blue-light'
                                src={ayaImg}
                                alt='Aya Midani Profile'
                            />

                            <h1 className='text-gray-700 mt-4 text-2xl font-quicksand capitalize group-hover:text-white dark:text-white'>
                                Aya Midani
                            </h1>

                            <p className='text-gray-500 dark:text-gray-300 group-hover:text-gray-300 mt-2 capitalize font-SourceSansPro'>
                                Junior Engineer
                            </p>

                            <div className='-mx-2 mt-3 flex'>
                                <a
                                    href='www.linkedin.com/in/aya-mydani'
                                    className='text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 mx-2 group-hover:text-white'
                                    aria-label='Linkedin'
                                >
                                    <svg
                                        className='h-6 w-6 fill-current'
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 512 512'
                                    >
                                        <path d='M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z' />
                                    </svg>
                                </a>

                                <a
                                    href='https://github.com/AyaMidani'
                                    className='text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 mx-2 group-hover:text-white'
                                    aria-label='Github'
                                >
                                    <svg
                                        className='h-6 w-6 fill-current'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path d='M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z'></path>
                                    </svg>
                                </a>

                                <a
                                    href='mailto:ayamidani98@gmail.com'
                                    className='text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 mx-2 group-hover:text-white'
                                    aria-label='Email'
                                >
                                    <svg
                                        className='h-6 w-6 fill-current'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z'
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className='group flex transform cursor-pointer flex-col items-center rounded-xl p-8 transition-colors duration-200 hover:bg-blue-light'>
                            <img
                                className='h-40 w-40 rounded-full object-cover ring-4 ring-blue-light'
                                me
                                src={ramaImg}
                                alt='Rama Al Dakkak Profile'
                            />

                            <h1 className='text-gray-700 mt-4 text-2xl font-quicksand capitalize group-hover:text-white dark:text-white'>
                                Rama Al Dakkak
                            </h1>

                            <p className='text-gray-500 dark:text-gray-300 group-hover:text-gray-300 mt-2 capitalize font-SourceSansPro'>
                                Junior Engineer
                            </p>

                            <div className='-mx-2 mt-3 flex'>
                                <a
                                    href='https://www.linkedin.com/in/ramaaldakkak/'
                                    className='text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 mx-2 group-hover:text-white'
                                    aria-label='Linkedin'
                                >
                                    <svg
                                        className='h-6 w-6 fill-current'
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 512 512'
                                    >
                                        <path d='M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z' />
                                    </svg>
                                </a>

                                <a
                                    href='https://github.com/Ramaaldakkak'
                                    className='text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 mx-2 group-hover:text-white'
                                    aria-label='Github'
                                >
                                    <svg
                                        className='h-6 w-6 fill-current'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path d='M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z'></path>
                                    </svg>
                                </a>

                                <a
                                    href='mailto:rama.aldakkak@gmail.com'
                                    className='text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 mx-2 group-hover:text-white'
                                    aria-label='Email'
                                >
                                    <svg
                                        className='h-6 w-6 fill-current'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z'
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className='group flex transform cursor-pointer flex-col items-center rounded-xl p-8 transition-colors duration-200 hover:bg-blue-light'>
                            <img
                                className='h-40 w-40 rounded-full object-cover ring-4 ring-blue-light'
                                me
                                src={kinanImg}
                                alt='Kinan Hatahet Profile'
                            />

                            <h1 className='text-gray-700 mt-4 text-2xl font-quicksand capitalize group-hover:text-white dark:text-white'>
                                Kinan Hatahet
                            </h1>

                            <p className='text-gray-500 dark:text-gray-300 group-hover:text-gray-300 mt-2 capitalize font-SourceSansPro'>
                                Junior Engineer
                            </p>

                            <div className='-mx-2 mt-3 flex'>
                                <a
                                    href='https://www.linkedin.com/in/kinan-hatahet/'
                                    className='text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 mx-2 group-hover:text-white'
                                    aria-label='Linkedin'
                                >
                                    <svg
                                        className='h-6 w-6 fill-current'
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 512 512'
                                    >
                                        <path d='M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z' />
                                    </svg>
                                </a>

                                <a
                                    href='https://github.com/Keen91'
                                    className='text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 mx-2 group-hover:text-white'
                                    aria-label='Github'
                                >
                                    <svg
                                        className='h-6 w-6 fill-current'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path d='M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z'></path>
                                    </svg>
                                </a>

                                <a
                                    href='mailto:kinan.hatahet@gmail.com'
                                    className='text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 mx-2 group-hover:text-white'
                                    aria-label='Email'
                                >
                                    <svg
                                        className='h-6 w-6 fill-current'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z'
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className='group flex transform cursor-pointer flex-col items-center rounded-xl p-8 transition-colors duration-200 hover:bg-blue-light'>
                            <img
                                className='h-40 w-40 rounded-full object-cover ring-4 ring-blue-light'
                                me
                                src={mustafaImg}
                                alt='Mustafa Arslan Profile'
                            />

                            <h1 className='text-gray-700 mt-4 text-2xl font-quicksand capitalize group-hover:text-white dark:text-white'>
                                Mustafa Arslan
                            </h1>

                            <p className='text-gray-500 dark:text-gray-300 group-hover:text-gray-300 mt-2 capitalize font-SourceSansPro'>
                                Junior Engineer
                            </p>

                            <div className='-mx-2 mt-3 flex'>
                                <a
                                    href='https://www.linkedin.com/in/mustafa-arslan-240223221/'
                                    className='text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 mx-2 group-hover:text-white'
                                    aria-label='Linkedin'
                                >
                                    <svg
                                        className='h-6 w-6 fill-current'
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 512 512'
                                    >
                                        <path d='M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z' />
                                    </svg>
                                </a>

                                <a
                                    href='https://github.com/RastMustafa'
                                    className='text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 mx-2 group-hover:text-white'
                                    aria-label='Github'
                                >
                                    <svg
                                        className='h-6 w-6 fill-current'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path d='M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z'></path>
                                    </svg>
                                </a>

                                <a
                                    href='mailto:mustafarastanaw@gmail.com'
                                    className='text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 mx-2 group-hover:text-white'
                                    aria-label='Email'
                                >
                                    <svg
                                        className='h-6 w-6 fill-current'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z'
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className='group flex transform cursor-pointer flex-col items-center rounded-xl p-8 transition-colors duration-200 hover:bg-blue-light'>
                            <img
                                className='h-40 w-40 rounded-full object-cover ring-4 ring-blue-light'
                                me
                                src={mohammadImg}
                                alt='Mohammad Al Saleh Profile'
                            />

                            <h1 className='text-gray-700 mt-4 text-2xl font-quicksand capitalize group-hover:text-white dark:text-white'>
                                Mohammad Al Saleh
                            </h1>

                            <p className='text-gray-500 dark:text-gray-300 group-hover:text-gray-300 mt-2 capitalize font-SourceSansPro'>
                                Junior Engineer
                            </p>

                            <div className='-mx-2 mt-3 flex'>
                                <a
                                    href='www.linkedin.com/in/mohammad-al-saleh-frontend-dev'
                                    className='text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 mx-2 group-hover:text-white'
                                    aria-label='Linkedin'
                                >
                                    <svg
                                        className='h-6 w-6 fill-current'
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 512 512'
                                    >
                                        <path d='M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z' />
                                    </svg>
                                </a>

                                <a
                                    href='https://github.com/moalsaleh95'
                                    className='text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 mx-2 group-hover:text-white'
                                    aria-label='Github'
                                >
                                    <svg
                                        className='h-6 w-6 fill-current'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path d='M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z'></path>
                                    </svg>
                                </a>

                                <a
                                    href='mailto:mo.alsaleh95@gmail.com'
                                    className='text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 mx-2 group-hover:text-white'
                                    aria-label='Email'
                                >
                                    <svg
                                        className='h-6 w-6 fill-current'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z'
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default OurBackendTeam;
