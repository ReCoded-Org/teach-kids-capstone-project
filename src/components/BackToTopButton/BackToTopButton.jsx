import React , {useState, useEffect} from 'react';
import arrow_up from '../../assets/arrow_up.png'

export default function BackToTopButton() {

  const [button, setButton]= useState(false)

  useEffect(()=> {
    window.addEventListener("scroll", ()=> {
      if (window.scrollY > 100 ) {
        setButton(true)
      } else setButton(false)
    })
  }, [])

  function scrollUp(){
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div>
      {button && (
        <button
        className='p-2 z-100 border-2 border-[#F05454] rounded-full bg-[#F05454]'
        style={{
          position: "fixed",
          bottom: "120px",
          right: "27px",
          height: "40px",
          width: "40px"
        }}
        onClick={scrollUp}
        >
          <img src={arrow_up} alt='' />
        </button>
      )}
    </div>
  )
}