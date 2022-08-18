import React, { useState } from "react";
import VolunteerForm from "./VolunteerForm";
import Axios from "axios";
import SubmitConfirm from "./SubmitConfirm";
import Carousel from "../../components/GlobalCarousel/Events/Events";

import { getEvents } from "../../services/events.js";

import { useQuery } from "@tanstack/react-query";

function VolunteerProfile() {
    const [info, setInfo] = useState([]); //changed {} to []
    const [updated, setUpdated] = useState(false);

    function handleChange(e) {
        setInfo({ ...info, [e.target.name]: e.target.value });
    }

    function dataSender(e) {
        Axios.put("http://localhost:8000/volunteer/1", info).then(
            (response) => {
                // console.log(response.data)
                setInfo(() => response.data);
                // console.log('info after dataSender',info)
                setUpdated(true);
                setTimeout(() => setUpdated(false), 2000);
            }
        );
    }

    React.useEffect(() => {
        Axios.get("http://localhost:8000/volunteer/1")
            .then((res) => {
                setInfo(res.data);
                // console.log('info after useEffect', info)
            })
            .catch((err) => {
                console.log("err", err);
            });
    }, []);

    const { isLoading, error, data } = useQuery(["events"], () => getEvents());

    if (isLoading) return "Loading...";
    if (error) return "An error has occurred: " + error.message;

    return (
        <div className='bg-gray font-quicksand'>
            <VolunteerForm
                handleChange={handleChange}
                dataSender={dataSender}
            />

            {updated ? <SubmitConfirm /> : null}

            <div className='flex flex-wrap  justify-center space-x-4 sm:justify-start'>
                <div className='sm:basis-1/6 '></div>
                <img
                    className='my-3 h-1/3 w-1/3 rounded-full border-2 border-white sm:h-1/5 sm:w-1/5 sm:basis-1/6'
                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8wMDAbGxvCwsIeHh4tLS0iIiKxsbGZmZknJycqKiolJSX6+vrp6ekhISFERETx8fHd3d1WVlbU1NRoaGgzMzOkpKT29vbj4+N1dXWBgYHIyMioqKhJSUliYmLq6uoTExOLi4tZWVl8fHw9PT2QkJAAAAAPDw9ubm7Nzc24uLhHR0fWtxrEAAAEMUlEQVR4nO3c23aiMBgF4HIIShA5gyCIoLbqvP/7DfQ47XhILCbEtb+b3mav5E/SJPj0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC3mnWyLOv/yG7KPWRutMsrb/3y4lX75uD6shs0sIXRVKZlE6JpGiG2Y3rFMZDdqAH5Rjx3+nBfiGO2R1d2w4ayLBJb+x+lufEQBTkrK5ucCNixt9MHKEe/0c7k68eqlis/Ut3WOh+w70ZP8QnHr5xL+fpqTJTuxVk+vxKw68VQ5VpMrwfUNKfIZLfzZsftxRp8R7RSdkNvVe8pQ8CuFFtVZ5syYenCPuJUdlNvE6zYurAbp9VBdmNvUl5bKL6YjYqTjZuf2oyeGaZKVmLkMVZhz17Kbu4Njixr4Yf5VL1h6m/YB2k/TGvZDebmhqwzaY8kC9kN5uYy7Wc+rdVLuGBfK3q6eitisOZKaE5kN5iboXMlnKeyG8xtYnIltNTbmiIhEo4fEiLh+CEhEo4fEiLh+CEhEo4fEiLh+D1+wiXnSZR6CaOHP01c8CXUj7IbzI3zzHut3pn349/M+A1PJ9JYvdu1GddyYe3UuyF9iniu16iKt9w1xyUwXalXhp0J+1TjTJV8LLyIWTuRKvpiiP3VF1Fvy/bGZ+xEGqr4XujVgenREEnU25N+Ks+90v+X08hu5m8U18epFSs5j37Iimtvv6y9kkvhF7e4PFCtXPGA3YQ6vfRFid0o/S3Cu0ly7r8Mm6YKbrhPqDene5GoXoK9WebXdWSEpyIS73ioa99Xdyr1g2iZFvHWWptn+nCum9tVnhpRoOD/v8FyUoSOPrfp5TWfUHuuW1VeGoFCJekfyt1qa7LsZz5y2mayakpDjYnVaPaV5lzpulOd6ZAqbkb/VWlWrjzK0Xk/U9Jtm455gg2KLeHuvJ8hSbIf6aGNfwx153fx3kPaay8dX0X6xlbnOQK+EtIkk3EtINlhc/lz3xsyxsaIvi2Ndh7P5yNs7KQZy/mUn7a/nF5OI3a4G0U5HtpkuAL8jmrhCC7dyrvle8u4k5zP38zvMUC/ECuWugNY7K275utZq0hewGDPd9F7G6eVtseJ4vv3YM8ODTkBF62IHnyN+EfOQI1FBewiVjL2N4W4gF0tSjgYT8l9l4kfqPDLjai650L/P+IJnm38jdiAXSnuxe5RJ6zXu8MhqchSZL+iH47Ym2KOZxbDsQV2osv8uyxDIpW4SlzyvawcilmK6sQZw931PdBQ1MF/LX4ifaOLmms4f0xgOMIeg3P8eNCwaCUoId+vlgxJF5RQzkzaW4spRM7vDIYk6JuFku9rmCE5hZCEUzGnM6fYuZCEO5H/3H9HYyEJJe1oXhO2QhJKWw77fZuQhJNnXZZnMTPNU2TIshz7Sw0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf4C+ppIAaVeUbkAAAAASUVORK5CYII='
                    alt='ProfilePic'
                />
                <div className='flex flex-col justify-start sm:basis-2/6'>
                    <h2 className='ml-5 font-quicksand text-4xl font-semibold'>
                        {info.name}
                    </h2>
                    <p className='mx-5 mt-5 pt-5 font-SourceSansPro text-xs'>
                        {info.description}
                    </p>
                </div>
                <div className='sm:basis-2/6'></div>
            </div>
            {/* copy from here */}
            <div className='mx-5 pb-5'>
                <div className='grid-rows-10 grid-cols-6 gap-y-3 pl-4 sm:grid '>
                    <h1 className='text-customGreen col-start-2 row-start-3 pt-7 font-quicksand text-4xl font-semibold sm:justify-self-start'>
                        Profile
                    </h1>
                    <p className='font-SourceSansPro text-sm sm:col-start-2 sm:col-end-4 sm:row-start-4 sm:justify-self-start '>
                        Email: {info.email}
                    </p>
                    <p className='pb-3 font-SourceSansPro text-sm sm:col-start-2 sm:col-end-4 sm:row-start-5 sm:justify-self-start'>
                        Phone: {info.phone}
                    </p>

                    <form className='sm:col-start-2 sm:col-end-6 sm:row-start-6 sm:justify-self-start '>
                        <label
                            className='text-gray-900 dark:text-gray-300 mb-2 block text-sm font-medium sm:relative sm:col-start-2 sm:col-end-3 sm:row-start-6 sm:justify-self-start'
                            htmlFor='default_size'
                        >
                            Upload Your CV
                        </label>
                        <input
                            className='text-gray-900 border-gray-300 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 mb-5 w-full cursor-pointer border bg-[#F5F6F6] text-sm focus:outline-none sm:col-start-2 sm:col-end-3 sm:justify-self-start'
                            id='default_size'
                            type='file'
                        />
                        <button
                            type='submit'
                            value='Submit'
                            className='border-customGreen bg-customGreen mr-1 mb-1 flex-none rounded-none border-2 py-1 px-1 text-xs text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none sm:absolute sm:col-start-4 sm:col-end-5 sm:row-start-5 sm:justify-self-start'
                        >
                            Upload CV
                        </button>
                    </form>

                    <div></div>
                </div>
            </div>
            {/* down to here */}

            <Carousel carouselHeader='Related Events' events={data} />
            {/* add the diagonal line at the bottom of the component */}
        </div>
    );
}

export default VolunteerProfile;
