import React from 'react';
import 'flowbite';

export default function EditInfoForm(props) {
  const [showModal, setShowModal] = React.useState(false);


  return (
    <>
    <div className='my-6  flex justify-end gap-6 md:justify-end '>
        <button
            onClick={() => setShowModal(true)}
            type="button"
            href=''
            className='rounded mw-40 w-36 border border-[#457B9D] bg-[#457B9D]  p-1.5 font-semibold text-white  duration-300 ease-linear hover:rounded  hover:border-blue-btn hover:bg-transparent hover:text-[#457B9D] hover:shadow md:w-44'
        >
            Edit
        </button>
    </div>

    {showModal ? (
        <>
        
        <div className=" justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">

            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Edit Pofile
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative overflow-y-auto h-[27rem] w-[19rem] sm:h-[33rem] sm:w-[35rem] p-6 flex-auto">
                  {/* START OF FORM */}



                  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                  <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Select the Event Photo
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="file" placeholder="" />
                    </div>
                  <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Website Address :</label>
                       <input onChange={props.handleChange} name="website" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="www.reach.com" />
                    </div>  
                  <div className="mb-4">
                      <label className="block text-gray-700 text-sm mt-3 font-bold mb-2">
                        Name
                      </label>
                      <input onChange={props.handleChange} name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="John Doe" />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Location
                      </label>
                      <input onChange={props.handleChange} name="location" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Istanbul" />
                    </div>

                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Date:
                      </label>
                    <div className="mb-4 relative">
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                      </div>
                      <input onChange={props.handleChange} name="date" datepicker datepicker-autohide type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="DD-MM-YYYY" />
                    </div>


                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                      </label>
                      <input onChange={props.handleChange} name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="john.doe@gamil.com" />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Phone Number
                      </label>
                      <input onChange={props.handleChange} name="phone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="tel" placeholder="+90 (545) 121 3333" />
                    </div>

                    <div className="">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Your Message
                      </label>
                      <div className="form-group">
                        <input
                        name="message"
                        onChange={props.handleChange}
                        className="
                            form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                        id="exampleFormControlTextarea13"
                        rows="3"
                        placeholder="Message"
                        ></input>
                        </div>
                    </div>
                  </form>
                  {/* END OF FORM */}


                </div>
                {/*footer of the form*/}
                <div className="flex items-center justify-end py-2 px-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-[#457B9D] text-white active:bg-white active:text-[#457B9D] active:border-2 active:border-[#457B9D] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false)
                      props.dataSender()
                    }}            
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) 
      : null}
    </>
  );
}