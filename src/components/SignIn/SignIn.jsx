import React, { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import SigninPic from "../../assets/SigninPic.png";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import apple from "../../assets/apple.svg";
import message from "../../assets/message.svg";
import padlock from "../../assets/padlock.svg";
import Logo from "../../assets/Logo.png";
import close from "../../assets/close-menu.svg";
import {useMutation } from 'react-query';

function SignIn() {
  const navigate = useNavigate();
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
    const SendtoSignIn=useMutation((SignInData)=>{
      return fetch("http://localhost:3004/SignIn",{
          method: "POST",
          headers:{
              Accept:"application/json",
              "content-Type":"application/json"
          },
          body:JSON.stringify(SignInData),
      })
  });
  return(
    <div className=' bg-blue-dark'>
    <div className='flex justify-between pl-2 pr-2 md:pl-40 md:pr-40 md:pt-2'>
                <Link to='/'>
                    <img src={Logo} alt='Reach' />
                </Link>
                <img
                    src={close}
                    alt='close'
                    className='hover:scale-125 hover:cursor-pointer'
                    onClick={() => navigate(-1)}
                />
                </div>
    <div className="w-full p-24 bg-blue-dark flex justify-evenly">
      <img
          src={SigninPic}
          alt={'a drawing of a little boy in a classroom raising his hand'}
          className="w-0 md:w-5/12 lg:5/12"
          />

      <div className="w-full md:w-4/12 pt-16">
        <h1 className=" text-gray pb-6 font-bold font-heading text-5xl" >
          Sign In
        </h1>
        <form className="flex flex-col gap-3 font-body text-lg text-gray" onSubmit={handleSubmit}>

        <p className='font-SourceSansPro flex flex-row'>
                    If you don`t have an account register, you can <Link to="/sign-up"><p className='ml-1 text-red'> register here!</p></Link> 
                    </p>

          <div className="flex float-right gap-4">
          <img src={message} alt={"email icon"} className="w-5"/>
          <label className="font-heading font-bold">Email</label>
          </div>
          <input type="text" name="Email" onChange={handleChange} value={formData.Email} placeholder="Enter your email address" className=" focus:outline-none bg-blue-dark border-0 border-b border-gray" />
          <div className="flex float-right gap-4">
          <img src={padlock} alt={"padlock icon"} className="w-5"/>
          <label className="font-heading font-bold">Password</label>
          </div>
          <input type="password" name="password" onChange={handleChange} value={formData.Password} placeholder="Enter your password" className="focus:outline-none bg-blue-dark border-0 border-b border-gray" />
          <div>
          <div className="flex justify-between">
          <div>
          <input type="checkbox" name="remember" onChange={handleChange}  className="focus:outline-none bg-gray border-0 border-b border-gray" />
          <label className="font-heading font-bold"> Remember Me</label></div>
          <p>Forgot password?</p>
          </div>
          </div>
          <button className="w-full h-12 mt-4 rounded bg-red text-gray text-2xl font-bold font-heading"onClick={() => {
                    SendtoSignIn.mutate({
                        Email:formData.Email,
                        Password:formData.Password,
                        checkedBox:formData.checkedBox,
                    });
                }}>
          Login
          </button>
            <h4 className="flex justify-center">or continue with</h4>
            <div className='flex w-full flex-row justify-center gap-3'>
                            <img
                                src={google}
                                alt={"google icon"}
                                className='hover:scale-125'
                            />
                            <img
                                src={facebook}
                                alt={"facebook icon"}
                                className='hover:scale-125'
                            />
                            <img
                                src={apple}
                                alt={"apple icon"}
                                className='hover:scale-125'
                            />
                        </div>

        </form>
      </div>
    </div>
    </div>
  )
}
export default SignIn;