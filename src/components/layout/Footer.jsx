// import react from "react";
import logo from '../../images/Logo.png'
import twitter from '../../images/twitter.png'
import linkedin from '../../images/linkedin.png'
import instagram from '../../images/instagram.png'
import facebook from '../../images/facebook.png'
import youtube from '../../images/youtube.png'

export default function Footer(){
  return (
    <div> 
      <div data-testid='footer' className='py-10 flex flex-wrap items-center justify-around bg-primary text-white'>
        <div>
          <img className='pb-2' src={logo} alt='Logo' />
          <h6 className='flex justify-start pt-1'>Events</h6>
          <h6 className='flex justify-start pt-1'>About Us</h6>
          <h6 className='flex justify-start pt-1'>Contact Us</h6>
          <div className='flex pt-8'>
            <img className='pr-8' src={twitter} alt='twitter' />
            <img className='pr-8' src={linkedin} alt='linkedin' />
            <img className='pr-8' src={instagram} alt='instagram' />
            <img className='pr-8' src={facebook} alt='facebook' />
            <img className='pr-8' src={youtube} alt='youtube' />
          </div>

        </div>
        
        <div className='t-10 flex flex-col'>
            <h3 className="flex justify-start text-lg mb-5 pt-10">Subscribe to our newsletter</h3>
            <form >
              <h4 className="flex justify-start ">E-mail</h4>
              <input className='rounded-md text-black' type='text' />
              <button className='bg-redButton p-2 rounded-md'>Submit &#8594;</button>
            </form>
        </div>

      </div>

      <div className='py-1 sm:flex flex-wrap justify-around bg-secondary text-white'>
        <div className='grid grid-cols-1'>
          <p className='my-1 pl-5 justify-self-start text-xs'>All right reserved</p>
        </div>

        <div className='grid grid-cols-1 sm:justify-items-stretch sm:flex sm:justify-between'>
          <div className='my-1 pl-5 text-xs justify-self-start'>Terms and Conditions</div>
          <div className='my-1 pl-5 text-xs justify-self-start'>Privacy and Cookies</div>
          <div className='my-1 pl-5 pr-2 text-xs justify-self-start'>Accessability</div>
        </div>
      </div>
    </div>
  )
}