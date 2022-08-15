import React from 'react';

export default function SubmitConfirm () {
  return (
    <div>
    {/* Main modal */}
    <div id="defaultModal" tabIndex={-1} className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog">
      <div className="relative p-4 w-100 max-w-2xl h-full md:h-auto">
        {/* Modal content */}
        <div className="relative bg-customGreen rounded-lg shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex justify-between items-start p-4 ">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Saved
            </h3> 
          </div>
          {/* Modal body */}
                
        </div>
      </div>
    </div>
  </div>
    )



}