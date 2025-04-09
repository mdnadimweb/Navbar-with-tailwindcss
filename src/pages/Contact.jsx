function Contact() {
  return (
    <>
      <div className="bg-teal-50 shadow-xl/20 inset-shadow-sm shadow-purple-800 mt-30 py-5 px-5 w-80 m-auto ">
        <form>
          <h1 className=" uppercase text-red-800 text-2xl font-bold text-center my-5 ">
            contact form
          </h1>
          <div className="input_box flex justify-center  flex-col">
            <label htmlFor="">Name:</label>
            <input
              className="my-2 border border-zinc-400 py-1 px-2"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="input_box flex justify-center  flex-col">
            <label htmlFor="">Email:</label>
            <input
              className="my-2 border border-zinc-400 py-1 px-1"
              type="email"
              placeholder="demo@gmail.com"
            />
          </div>
          <div className="input_box flex justify-center  flex-col">
            <label htmlFor="">Age:</label>
            <input
              className="my-2 border border-zinc-400 py-1 px-1"
              type="text"
              placeholder="enter your name "
            />
          </div>
          <div className="input_box flex justify-center  flex-col">
            <label htmlFor="">Password:</label>
            <input
              className="my-2 border  border-zinc-400 py-1 px-1 "
              type="password"
              placeholder="enter your password"
            />
          </div>
          <div className="input_box flex justify-center  flex-col">
            <label htmlFor="">Confirm Password :</label>
            <input
              className="my-2 border border-zinc-400 py-1 px-1 "
              type="password"
              placeholder="Confirm Password"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
