import React from "react";

const Pricing = () => {
  return (
    <section className='max-w-6xl font-sans container m-auto flex flex-col flex-wrap sm:flex-row justify-center'>
      <div className='w-full sm:w-1/2 lg:w-1/4 text-center py-8'>
        <label for='' className='uppercase tracking-loose font-bold text-sm'>
          Basic Plan
        </label>
        <h1 for='' className='uppercase tracking-loose font-bold text-5xl my-2'>
          $29<span className='text-gray-700 font-light text-xs'>/mo</span>
        </h1>
        <p className='my-2 text-gray-700'>
          <strong className='text-black pr-2'>5</strong>Projects
        </p>
        <p className='my-2 text-gray-700'>
          <strong className='text-black pr-2'>20</strong>Images
        </p>
        <p className='mt-2 mb-6 text-gray-700'>
          <strong className='text-black pr-2'>9/5</strong>Support
        </p>
        <button className='bg-transparent hover:bg-black text-black-dark font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent'>
          Buy Now
        </button>
      </div>
      <div className='w-full sm:w-1/2 lg:w-1/4 text-center py-8'>
        <label for='' className='uppercase tracking-loose font-bold text-sm'>
          Team Plan
        </label>
        <h1 for='' className='uppercase tracking-loose font-bold text-5xl my-2'>
          $59<span className='text-gray-700 font-light text-xs'>/mo</span>
        </h1>
        <p className='my-2 text-gray-700'>
          <strong className='text-black pr-2'>10</strong>Projects
        </p>
        <p className='my-2 text-gray-700'>
          <strong className='text-black pr-2'>40</strong>Images
        </p>
        <p className='mt-2 mb-6 text-gray-700'>
          <strong className='text-black pr-2'>12/7</strong>Support
        </p>
        <button className='bg-transparent hover:bg-black text-black-dark font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent'>
          Buy Now
        </button>
      </div>
      <div className='w-full sm:w-1/2 lg:w-1/4 text-center py-8'>
        <label for='' className='uppercase tracking-loose font-bold text-sm'>
          Corporate Plan
        </label>
        <h1 for='' className='uppercase tracking-loose font-bold text-5xl my-2'>
          $79<span className='text-gray-700 font-light text-xs'>/mo</span>
        </h1>
        <p className='my-2 text-gray-700'>
          <strong className='text-black pr-2'>Unlimited</strong>Projects
        </p>
        <p className='my-2 text-gray-700'>
          <strong className='text-black pr-2'>Unlimited</strong>Images
        </p>
        <p className='mt-2 mb-6 text-gray-700'>
          <strong className='text-black pr-2'>24/7</strong>Support
        </p>
        <button className='bg-transparent hover:bg-black text-black-dark font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent'>
          Buy Now
        </button>
      </div>
      <div className='w-full sm:w-1/2 lg:w-1/4 text-center py-8'>
        <label for='' className='uppercase tracking-loose font-bold text-sm'>
          Enterprise Plan
        </label>
        <h1 for='' className='uppercase tracking-loose font-bold text-5xl my-2'>
          $199<span className='text-gray-700 font-light text-xs'>/mo</span>
        </h1>
        <p className='my-2 text-gray-700'>
          <strong className='text-black pr-2'>Unlimited</strong>Projects
        </p>
        <p className='my-2 text-gray-700'>
          <strong className='text-black pr-2'>Unlimited</strong>Images
        </p>
        <p className='mt-2 mb-6 text-gray-700'>
          <strong className='text-black pr-2'>24/7</strong>Support
        </p>
        <button className='bg-transparent hover:bg-black text-black-dark font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent'>
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default Pricing;
