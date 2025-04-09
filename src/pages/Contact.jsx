// import { useForm, handlesubmit } from "react-hook-form";
// import { useState } from "react";

function Contact() {
  return (
    <>
      <div className="bg-teal-50 shadow-xl/20 inset-shadow-sm shadow-purple-800 mt-30 py-5 px-5 w-80 m-auto ">
        <form>
          <h1 className=" uppercase text-red-800 text-2xl font-bold text-center my-5 ">
            contact form
          </h1>
          <div className="input_box flex justify-center  flex-col">
            <label className="text-red-700" htmlFor="">
              Name:
            </label>
            <input
              className="my-2 border border-zinc-400 py-1 px-2"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="input_box flex justify-center  flex-col">
            <label className="text-red-700" htmlFor="">
              Email:
            </label>
            <input
              className="my-2 border border-zinc-400 py-1 px-1"
              type="email"
              placeholder="demo@gmail.com"
            />
          </div>
          <div className="input_box flex justify-center  flex-col">
            <label className="text-red-700" htmlFor="">
              Age:
            </label>
            <input
              className="my-2 border border-zinc-400 py-1 px-1"
              type="text"
              placeholder="enter your name "
            />
          </div>
          <div className="input_box flex justify-center  flex-col">
            <label htmlFor="" className="text-red-700">
              Password:
            </label>
            <input
              className="my-2 border  border-zinc-400 py-1 px-1 "
              type="password"
              placeholder="enter your password"
            />
          </div>
          <div className="input_box flex justify-center  flex-col">
            <label htmlFor="" className="text-red-700">
              Confirm Password :
            </label>
            <input
              className="my-2 border border-zinc-400 py-1 px-1 "
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="button">
            <button className="bg-green-100 text-black border border-red-600 px-4 py-2 text-2xl font-bold mt-5 self-center ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
