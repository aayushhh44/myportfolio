import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen mt-10">
      <div className="flex flex-col p-4 justify-center max-w-screen mx-auto h-full">
        <div className="pb-8 md:ml-48">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/ac28ed1d-a3e0-48f4-9921-f5b0645f96b7" method="POST" className=" flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-gray"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 my-4 bg-transparent border-2 rounded-md focus:outline-gray"
            />

            <textarea
              name="message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-gray"
              placeholder="Enter your message"
            ></textarea>

            <button className='bg-gradient-to-b from-gray-500 to-gray-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-500'>Let's talk</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
