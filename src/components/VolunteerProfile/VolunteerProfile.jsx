import React, { useState } from "react";
import VolunteerForm from "./VolunteerFormnpm ";
import Axios from 'axios';
import SubmitConfirm from "./SubmitConfirm";
import Navbar from "../layout/Navbar/Navbar";
import Events from "../EventCarousel/Events/Events";
import Footer from '../layout/Footer'

function VolunteerProfile () {

  const [info, setInfo]= useState([]); //changed {} to []
  const [updated, setUpdated] = useState(false)

  function handleChange(e) {
    setInfo({...info, [e.target.name]: e.target.value})
  }

  function dataSender(e){
    Axios.put("http://localhost:8000/volunteer/1", info)
    .then((response)=> {
      // console.log(response.data)
      setInfo(() => response.data)
      // console.log('info after dataSender',info)
      setUpdated(true)
      setTimeout(()=> setUpdated(false), 2000)
    });
  }

    React.useEffect(()=> {
      Axios.get('http://localhost:8000/volunteer/1')
      .then(res => {
        setInfo(res.data)
        // console.log('info after useEffect', info)
      })
      .catch(err=> {
        console.log('err', err)
      })
    }, [])


  return (
    
    <div className='bg-gray font-quicksand'>
      <Navbar />
      <VolunteerForm handleChange={handleChange} dataSender={dataSender}/>

      {updated ? 
        <SubmitConfirm />
        :
        null
      }


      <div className="flex flex-wrap  space-x-4 sm:justify-start justify-center">
        <div className="sm:basis-1/6 "></div>
        <img className='sm:basis-1/6 rounded-full my-3 border-2 border-white w-1/6 h-1/6' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8wMDAbGxvCwsIeHh4tLS0iIiKxsbGZmZknJycqKiolJSX6+vrp6ekhISFERETx8fHd3d1WVlbU1NRoaGgzMzOkpKT29vbj4+N1dXWBgYHIyMioqKhJSUliYmLq6uoTExOLi4tZWVl8fHw9PT2QkJAAAAAPDw9ubm7Nzc24uLhHR0fWtxrEAAAEMUlEQVR4nO3c23aiMBgF4HIIShA5gyCIoLbqvP/7DfQ47XhILCbEtb+b3mav5E/SJPj0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC3mnWyLOv/yG7KPWRutMsrb/3y4lX75uD6shs0sIXRVKZlE6JpGiG2Y3rFMZDdqAH5Rjx3+nBfiGO2R1d2w4ayLBJb+x+lufEQBTkrK5ucCNixt9MHKEe/0c7k68eqlis/Ut3WOh+w70ZP8QnHr5xL+fpqTJTuxVk+vxKw68VQ5VpMrwfUNKfIZLfzZsftxRp8R7RSdkNvVe8pQ8CuFFtVZ5syYenCPuJUdlNvE6zYurAbp9VBdmNvUl5bKL6YjYqTjZuf2oyeGaZKVmLkMVZhz17Kbu4Njixr4Yf5VL1h6m/YB2k/TGvZDebmhqwzaY8kC9kN5uYy7Wc+rdVLuGBfK3q6eitisOZKaE5kN5iboXMlnKeyG8xtYnIltNTbmiIhEo4fEiLh+CEhEo4fEiLh+CEhEo4fEiLh+D1+wiXnSZR6CaOHP01c8CXUj7IbzI3zzHut3pn349/M+A1PJ9JYvdu1GddyYe3UuyF9iniu16iKt9w1xyUwXalXhp0J+1TjTJV8LLyIWTuRKvpiiP3VF1Fvy/bGZ+xEGqr4XujVgenREEnU25N+Ks+90v+X08hu5m8U18epFSs5j37Iimtvv6y9kkvhF7e4PFCtXPGA3YQ6vfRFid0o/S3Cu0ly7r8Mm6YKbrhPqDene5GoXoK9WebXdWSEpyIS73ioa99Xdyr1g2iZFvHWWptn+nCum9tVnhpRoOD/v8FyUoSOPrfp5TWfUHuuW1VeGoFCJekfyt1qa7LsZz5y2mayakpDjYnVaPaV5lzpulOd6ZAqbkb/VWlWrjzK0Xk/U9Jtm455gg2KLeHuvJ8hSbIf6aGNfwx153fx3kPaay8dX0X6xlbnOQK+EtIkk3EtINlhc/lz3xsyxsaIvi2Ndh7P5yNs7KQZy/mUn7a/nF5OI3a4G0U5HtpkuAL8jmrhCC7dyrvle8u4k5zP38zvMUC/ECuWugNY7K275utZq0hewGDPd9F7G6eVtseJ4vv3YM8ODTkBF62IHnyN+EfOQI1FBewiVjL2N4W4gF0tSjgYT8l9l4kfqPDLjai650L/P+IJnm38jdiAXSnuxe5RJ6zXu8MhqchSZL+iH47Ym2KOZxbDsQV2osv8uyxDIpW4SlzyvawcilmK6sQZw931PdBQ1MF/LX4ifaOLmms4f0xgOMIeg3P8eNCwaCUoId+vlgxJF5RQzkzaW4spRM7vDIYk6JuFku9rmCE5hZCEUzGnM6fYuZCEO5H/3H9HYyEJJe1oXhO2QhJKWw77fZuQhJNnXZZnMTPNU2TIshz7Sw0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf4C+ppIAaVeUbkAAAAASUVORK5CYII=' alt='ProfilePic' />
        <div className='sm:basis-2/6 flex flex-col justify-start'>
          <h2 className='font-quicksand ml-5 text-4xl font-normal'><div className="font-bold">Name of Volunteer: </div>{info.name}</h2>
          <p className="text-sm pt-5 ml-7 mt-5 font-SourceSansPro"><span className="font-bold">Description: </span>{info.description}</p>
        </div>
        <div className="sm:basis-2/6"></div>
      </div>

      <div className="sm:grid  grid-cols-4 grid-rows-8 gap-y-3 ">
          <h1 className="pt-7 col-start-2 row-start-3 sm:justify-self-start font-quicksand text-4xl font-semibold text-customGreen">Profile</h1>
          <p className="text-sm font-SourceSansPro sm:col-start-2 sm:col-end-4 sm:row-start-4 sm:justify-self-start "><span className="font-bold">Email: </span>{info.email}</p>
          <p className="text-sm font-SourceSansPro sm:col-start-2 sm:col-end-4 sm:row-start-5 sm:justify-self-start pb-3"><span className="font-bold">Phone Number: </span>{info.phone}</p>
      </div>

      <div className="flex justify-center pb-10">
      <form  className="  ">
        <input className="flex-none text-sm  bg-gray" type="file" name="upload" accept="application/pdf,application/vnd.ms-excel" />
        <input className='flex-none text-xs py-1 mx-2 my-3 px-10 border-2 border-customGreen bg-customGreen text-white rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150' type="submit" />
      </form>
      </div>
      
      {/* add the diagonal line at the bottom of the component */}
      <Events />
      <Footer />
    </div>
  );
}

export default VolunteerProfile; 