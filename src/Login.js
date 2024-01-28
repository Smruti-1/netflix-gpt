import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInform = () => {
setIsSignInForm(!isSignInForm);
    }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-2"> {isSignInForm ? "Sign In" : "Sign Up" }  </h1>
        { !isSignInForm && <input
         type="text" 
         placeholder="Email Address" 
         className=" p-2 my-4 w-full bg-gray-700 rounded-lg"
         />}
        <input
         type="text" 
         placeholder="Email Address" 
         className=" p-2 my-4 w-full bg-gray-700 rounded-lg"
         />
        <input 
        type="password" 
        placeholder="Password" 
        className=" p-2 my-4 w-full  bg-gray-700 rounded-lg"
        />
        <button
         className=" p-4 my-6 bg-red-700 w-full rounded-lg">
           {isSignInForm ? "Sign In" : "Sign Up" }  
             </button>
             <p className=" cursor-pointer" onClick={toggleSignInform}>New to Netflix? Sign Up Now</p>
      </form>
    </div>
  );
};

export default Login;


