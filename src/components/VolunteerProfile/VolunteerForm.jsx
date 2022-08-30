import React, {useState} from "react";
import Axios from 'axios';

export default function VolunteerForm({showModal, setShowModal, handleChange, dataSender}) {
  const [file, setFile] = useState(null) // for uploadig the photo

  // Upload Functions START:

  function onInputChange(e) {
    // console.log(e.target.value);
    // console.log(e.target.files);
    setFile(e.target.files[0])
}

function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData()

    data.append('file', file)

    Axios.post('//localhost:5000/upload', data)
        .then((response)=> {
            alert('Success') // he adds the toast here and below 

        })
        .catch((e) => {
            alert('Error', e)
        })

}

// END


  return (
    <>
      
      <div className=' flex flex-wrap justify-end py-2 mr-2 sm:mr-6 md:mr-16 lg:mr-28'>
        <div className="basis-8/10"></div>
        <button 
          className="flex justify-end bg-[#457B9D] text-white active:bh-[#457B9D] font-bold uppercase text-sm px-6 py-3  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
      >
        Edit Profile
      </button>        
      </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative  w-auto my-6 mx-auto max-w-3xl">
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
                <div className="relative p-6 flex-auto h-auto">
                  {/* START OF FORM */}



                  <form
                  id='my-form'
                  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                  <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Select a Profile Photo
                      </label>
                      <input
                        onChange={(e)=> onInputChange(e)}
                        accept="image/jpeg"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="file" placeholder="" />
                    </div>

                  <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Name
                      </label>
                      <input onChange={handleChange} name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Name" />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Description
                      </label>
                      <input onChange={handleChange} name="description" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Description" />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                      </label>
                      <input onChange={handleChange} name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Email" />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Phone Number
                      </label>
                      <input onChange={handleChange} name="phone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="tel" placeholder="Phone Number" />
                    </div>
                    
                  </form>
                  {/* END OF FORM */}




                </div>
                {/*footer of the form*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    form='my-form' 
                    type="submit"
                    className="bg-[#457B9D] text-white active:bg-[#457B9D] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick={(e) => {
                      setShowModal(false)
                      dataSender()
                      handleSubmit(e)
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
      ) : null}
    </>
  );
}