import React, { useState } from "react";
import SigninPic from "../assets/SigninPic.jpg";
import message from "../assets/messageForm.png"
import padlock from "../assets/padlock.png"
import google from 'src/assets/google.png';
import facebook from 'src/assets/facebook.png';
import apple from 'src/assets/apple.png';


function SignIn() {
  const [formData, setFormData] = useState({
    Email: "John@gmail.com",
    Password: "124",
    checkedBox:0,
  });  
    function handleChange(event) {
      const name = event.target.name;
      let value = event.target.value;

      if (event.target.type === "checkbox") {
        value = event.target.checked;
      }
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      console.log(formData);
    }
  return(
    <div className="w-full p-24 bg-blue-dark flex justify-evenly">
      <img
          src={SigninPic}
          alt={'a drawing of a little boy in a classroom raising his hand'}
          className="w-0 md:w-5/12 lg:5/12"
          />

      <div className="w-full md:w-4/12">
        <h1 className=" text-gray pb-6 font-bold font-heading text-4xl" >
          Sign In
        </h1>
        <form className="flex flex-col gap-3 font-body text-lg text-gray" onSubmit={handleSubmit}>

          <p className="font-body">If you already have an account register, you can  
          </p>
          <div className="flex float-right gap-4">
          <img src={message} alt={"email icon"} className="w-5"/>
          <label className="font-heading font-bold">Email</label>
          </div>
          <input type="text" name="Email" onChange={handleChange} value={formData.Email} placeholder="Enter your email address" className=" focus:outline-none bg-blue-dark border-0 border-b border-gray" />
          <div className="flex float-right gap-4">
          <img src={padlock} alt={"padlock icon"} className="w-5"/>
          <label className="font-heading font-bold">Passcode</label>
          </div>
          <input type="password" name="password" onChange={handleChange} value={formData.Password} placeholder="Enter your passcode" className="focus:outline-none bg-blue-dark border-0 border-b border-gray" />
          <div>
          <input type="checkbox" name="remember" onChange={handleChange} checked={formData.checkedBox}  className="focus:outline-none bg-gray border-0 border-b border-gray" />
          <label className="font-heading font-bold"> Remember Me</label>
          <p>Forgot passcode?</p>
          </div>
          <button className="w-full h-12 mt-4 rounded bg-red text-gray text-2xl font-bold font-heading">
          Sign Up
          </button>
            <h4 className="flex justify-center">or continue with</h4>
          <div className="flex flex-row gap-3 w-full justify-center">
            <img src={google} alt={"google"}/>
            <img src={facebook} alt={"facebook"}/>
            <img src={apple} alt={"apple"}/>
          </div>
        </form>
      </div>
    </div>
  )
}
export default SignIn;