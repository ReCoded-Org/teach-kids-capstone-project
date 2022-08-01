import React, { useState } from "react";
import VolunteerForm from "./VolunteerForm";


function VolunteerProfile () {
  // const [modalOn, setModalOn] = useState(false);
  // const [choice, setChoice] = useState(false);

  // const handleEdit = () => {
  //   setModalOn(true)
  //   console.log('clicked', modalOn, choice)
  // }

  
  return (
    
    <div className='bg-lightGrey font-quicksand'>
      <VolunteerForm />
      {/* <div className=' flex flex-wrap justify-end py-2 mr-5'>
        <div className="basis-8/10"></div>
        <button onClick={handleEdit} className='basis-1/10 text-xs  py-1  my-3 mx-1 px-10 border-2 border-grey bg-grey text-white rounded-md'>Edit</button>
        <button className='basis-1/10 text-xs  py-1 my-3 mr-8 px-10 border-2 border-grey text-grey rounded-md'>Save</button>
      </div> */}

      <div className="flex flex-wrap  space-x-4 sm:justify-start justify-center">
        <div className="sm:basis-1/6 "></div>
        <img className='sm:basis-1/6 rounded-full my-3 border-2 border-white w-24 h-28' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8wMDAbGxvCwsIeHh4tLS0iIiKxsbGZmZknJycqKiolJSX6+vrp6ekhISFERETx8fHd3d1WVlbU1NRoaGgzMzOkpKT29vbj4+N1dXWBgYHIyMioqKhJSUliYmLq6uoTExOLi4tZWVl8fHw9PT2QkJAAAAAPDw9ubm7Nzc24uLhHR0fWtxrEAAAEMUlEQVR4nO3c23aiMBgF4HIIShA5gyCIoLbqvP/7DfQ47XhILCbEtb+b3mav5E/SJPj0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC3mnWyLOv/yG7KPWRutMsrb/3y4lX75uD6shs0sIXRVKZlE6JpGiG2Y3rFMZDdqAH5Rjx3+nBfiGO2R1d2w4ayLBJb+x+lufEQBTkrK5ucCNixt9MHKEe/0c7k68eqlis/Ut3WOh+w70ZP8QnHr5xL+fpqTJTuxVk+vxKw68VQ5VpMrwfUNKfIZLfzZsftxRp8R7RSdkNvVe8pQ8CuFFtVZ5syYenCPuJUdlNvE6zYurAbp9VBdmNvUl5bKL6YjYqTjZuf2oyeGaZKVmLkMVZhz17Kbu4Njixr4Yf5VL1h6m/YB2k/TGvZDebmhqwzaY8kC9kN5uYy7Wc+rdVLuGBfK3q6eitisOZKaE5kN5iboXMlnKeyG8xtYnIltNTbmiIhEo4fEiLh+CEhEo4fEiLh+CEhEo4fEiLh+D1+wiXnSZR6CaOHP01c8CXUj7IbzI3zzHut3pn349/M+A1PJ9JYvdu1GddyYe3UuyF9iniu16iKt9w1xyUwXalXhp0J+1TjTJV8LLyIWTuRKvpiiP3VF1Fvy/bGZ+xEGqr4XujVgenREEnU25N+Ks+90v+X08hu5m8U18epFSs5j37Iimtvv6y9kkvhF7e4PFCtXPGA3YQ6vfRFid0o/S3Cu0ly7r8Mm6YKbrhPqDene5GoXoK9WebXdWSEpyIS73ioa99Xdyr1g2iZFvHWWptn+nCum9tVnhpRoOD/v8FyUoSOPrfp5TWfUHuuW1VeGoFCJekfyt1qa7LsZz5y2mayakpDjYnVaPaV5lzpulOd6ZAqbkb/VWlWrjzK0Xk/U9Jtm455gg2KLeHuvJ8hSbIf6aGNfwx153fx3kPaay8dX0X6xlbnOQK+EtIkk3EtINlhc/lz3xsyxsaIvi2Ndh7P5yNs7KQZy/mUn7a/nF5OI3a4G0U5HtpkuAL8jmrhCC7dyrvle8u4k5zP38zvMUC/ECuWugNY7K275utZq0hewGDPd9F7G6eVtseJ4vv3YM8ODTkBF62IHnyN+EfOQI1FBewiVjL2N4W4gF0tSjgYT8l9l4kfqPDLjai650L/P+IJnm38jdiAXSnuxe5RJ6zXu8MhqchSZL+iH47Ym2KOZxbDsQV2osv8uyxDIpW4SlzyvawcilmK6sQZw931PdBQ1MF/LX4ifaOLmms4f0xgOMIeg3P8eNCwaCUoId+vlgxJF5RQzkzaW4spRM7vDIYk6JuFku9rmCE5hZCEUzGnM6fYuZCEO5H/3H9HYyEJJe1oXhO2QhJKWw77fZuQhJNnXZZnMTPNU2TIshz7Sw0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf4C+ppIAaVeUbkAAAAASUVORK5CYII=' alt='ProfilePic' />
        <div className='sm:basis-2/6 flex flex-col justify-start'>
          <h2 className='font-quicksand text-4xl font-semibold'>@userName</h2>
          <p className="text-xs pt-5  font-SourceSansPro">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ips.</p>
        </div>
        <div className="sm:basis-2/6"></div>
      </div>

      <div className="sm:grid  grid-cols-4 grid-rows-8 gap-y-3 ">
          <h1 className="pt-7 col-start-2 row-start-3 sm:justify-self-start font-quicksand text-4xl font-semibold text-grey">Profile</h1>
          <p className="text-sm font-SourceSansPro sm:col-start-2 sm:col-end-4 sm:row-start-4 sm:justify-self-start ">Email: alexa@gmail.com </p>
          <p className="text-sm font-SourceSansPro sm:col-start-2 sm:col-end-4 sm:row-start-5 sm:justify-self-start pb-3">Phone: 456 456 56</p>
      </div>

      <div className="flex justify-center pb-10">
      <form  className="  ">
        <input className="flex-none text-sm  bg-veryLightGrey" type="file" name="upload" accept="application/pdf,application/vnd.ms-excel" />
        <input className='flex-none text-xs py-1 mx-2 my-3 px-10 border-2 border-grey bg-grey text-white rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150' type="submit" />
      </form>
      </div>
      
      {/* {modalOn && <VolunteerForm setModalOn={setModalOn} setChoice={setChoice} />} */}
      {/* add the diagonal line at the bottom of the component */}
    </div>
  );
}

export default VolunteerProfile; 