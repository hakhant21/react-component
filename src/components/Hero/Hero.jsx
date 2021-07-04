import React from "react";

const Content = () => {
  return (
    <section className='bg-gray-300 font-sans'>
      <div className='container m-auto flex flex-col md:flex-row max-w-xl'>
        <div className='flex flex-col w-full lg:w-1/2 justify-center items-start py-8'>
          <label for='tagline' className='uppercase tracking-loose'>
            best app ever
          </label>
          <h1 className='my-4 font-normal'>Our Work Flow</h1>
          <p className='leading-normal mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, ex ea commodo consequat. Sed ut perspiciatis unde
            omnis iste natus error sit voluptatem accusantium natus error sit.
          </p>
          <button className='bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent'>
            Learn More
          </button>
        </div>
        <div className='w-full lg:w-1/2 lg:py-6'>
          <img
            src='https://stitches.hyperyolo.com/images/demo-devices.png'
            alt='image'
            className='w-full'
          />
        </div>
      </div>
    </section>
  );
};

export default Content;
