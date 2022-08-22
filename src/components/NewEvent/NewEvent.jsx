import React, { useState } from "react";
import AddNewEventForm from "./AddNewEventForm";
function NewEvent() {
  const [isHidden, setIsHidden] = useState(false);
    return (
      <>
      {isHidden ? (<AddNewEventForm setIsHidden={setIsHidden} isHidden={isHidden} />) : ("")}
        <div className='bg-gray'>
            <div className='diagonal-box flex flex-col bg-blue-light h-80'>
            <div className='content'>
            <div className='text-center text-lg text-white md:max-w-md md:text-left'>
                <h1 className='mt-20 text-center text-4xl font-bold text-white'>
                Planning for a New Event? 
                </h1>
                <button
                    className='mt-9 h-12 w-full rounded bg-red font-quicksand text-2xl font-bold text-gray hover:scale-105'
                    data-ripple-light='true'
                    onClick={() => setIsHidden(true)}
                    href='' 
                > <p className='ml-5 text-white'>
                        Click here!</p>
                        </button>{" "}
            </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default NewEvent;



