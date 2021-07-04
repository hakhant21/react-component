import React from "react";

const Feature = () => {
  return (
    <>
      <section className='max-w-6xl my-8 font-sans container  m-auto flex flex-col lg:flex-row text-center lg:text-left sm:items-center'>
        <div className='w-full lg:w-1/2'>
          <img
            src='https://stitches.hyperyolo.com/images/demo-phone.png'
            alt=''
          />
        </div>
        <div className='w-full lg:w-1/2 flex flex-col justify-center md:items-start p-8 items-center lg:items-start'>
          <label
            for='tagline'
            className='uppercase tracking-wide text-gray-700 font-bold'>
            best app ever
          </label>
          <h1 className='my-4 font-normal'>Our Work Flow</h1>
          <p className='leading-normal mb-4 text-gray-700'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
    </>
  );
};

export default Feature;
