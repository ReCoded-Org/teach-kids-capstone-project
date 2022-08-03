import React from "react";
import Phone from "../../assets/Phone.png";
import Message from "../../assets/Message.png";
import Location from "../../assets/Location.png";
import "./ContactUs.css";
function ContactUs() {
    return (
     <div className='ContactUs flex items-center justify-between'>
      <div className="container mx-auto pt-16">
      <div className="lg:flex">
          <div className="xl:w-4/5 lg:w-4/5 py-20">
          <div className="col-md-6 col-sm-12">
            <div className="contactInfo col">
            <h1 className="text-4xl mb-10" style={{color:"#1D3557",fontWeight: 'bold', fontSize:60}}>Contact Us</h1>
              <p className="text-1xl mb-10 md:max-w-lg" style={{color:"#1D3557"}}>Get the understanding you need to channel the books of spells you have always been smitten with, and boost sales which cartoon rabbits love to steal! 
              Get the understanding you need to</p>
                <div className="flex">
                  <div className="flex-none w-14 grow h-5">
                    <img className="ContactUsImg" src={Location} alt="Location icon" />
                    <p style={{color:"#1D3557"}}>9094 Bay Meadows Street Conyers, GA 30012</p>
                    </div>
                    <div className="flex-initial w-14 grow h-5">
                      <img className="ContactUsImg" src={Phone} alt="Phone icon" />
                      <p style={{color:"#1D3557"}}>+229-955-5388-336</p>
                      <p style={{color:"#1D3557"}}>+229-955-5373-360</p>
                      </div>
                      <div className="flex-initial w-14 grow h-5">
                        <img className="ContactUsImg" src={Message} alt="Contact icon" />
                        <p style={{color:"#1D3557"}}>support@mail.com</p>
                        <p style={{color:"#1D3557"}}>office@mail.com</p>
                        </div>
                      </div>
                      </div>
                      </div>
          </div>
          <div className="FormContactUs xl:w-3/5 lg:w-3/5 pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr">
              <form id="contact" className="bg-white dark:bg-gray-800 py-4 px-8 rounded-tr">
                  <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                      <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                          <div className="flex flex-col">
                              <label className="text-sm font-semibold mb-2" style={{color:"#1D3557"}}>Full Name</label>
                              <input required id="full_name" name="full_name" type="text" className="FormTextContactUs focus:border focus:border-indigo-700 h-10 rounded border" style={{backgroundColor:"#DDDDDD",borderWidth: 0,width:"580px"}} placeholder="Full Name"/>
                          </div>
                      </div>
                      
                  </div>
                  <div className="flex w-full flex-wrap">
                      <div className="w-2/4 max-w-xs">
                          <div className="flex flex-col">
                          <label className="text-sm font-semibold mb-2" style={{color:"#1D3557"}}>Email</label>
                              <input required id="email" name="email" type="email" className="FormTextContactUs focus:border focus:border-indigo-700 h-10 rounded border"style={{backgroundColor:"#DDDDDD",borderWidth: 0 ,width:"580px"}} placeholder="example@email.com"/>
                          </div>
                      </div>
                  </div>
                  <div className="w-full mt-6">
                      <div className="flex flex-col">
                      <label className="text-sm font-semibold mb-2" style={{color:"#1D3557"}}>Message</label>
                          <textarea placeholder="Type Here" name="message" className="FormTextContactUs border-gray-300 border mb-4 rounded" rows="9" id="message" style={{backgroundColor:"#DDDDDD",borderWidth: 0,width:"580px"}} />
                      </div>
                      <button type="submit" className="rounded text-white px-8 py-3 focus:border-4 w-64" style={{backgroundColor:"#1D3557",borderWidth: 0}} >Send</button>
                  </div>
              </form>
          </div>
      </div>
      </div>
  </div>
    )
}

export default ContactUs;
