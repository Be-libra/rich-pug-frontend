import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import title from "../../../public/home/whitepaper/title.png"


const Success = () => {
  return (
    <div className='mx-[2rem] mt-3 mb-8 max-w-[1400px] flex-1 text-center text-white  md:mx-[5rem] 2xl:mx-auto'>
      <Link href='/'>
        <div className='relative'>
          <Image src={title} alt='logo' className="h-16 lg:h-24 w-auto" />
        </div>
      </Link>
      <div className='flex-container flex-col'>
        <div className='flex-container mt-8 lg:mt-0'>
          <div className='relative h-[10rem] w-[8rem] lg:h-[16rem] lg:w-[13rem] '>
            <Image src='/images/buy/success.webp' alt='success' fill />
          </div>
        </div>
        <h1 className='mt-8 text-3xl font-normal lg:text-5xl'>
          Transaction Successful!
        </h1>
        <p className='mt-4 text-xl'>
          Thank You! Your payment has been received!
        </p>
        <button className='mt-8 rounded-md bg-[#A43BE1] px-4 py-2'>
          <Link href='/dashboard'>My Dashboard</Link>
        </button>
      </div>
    </div>
  );
};

export default Success;
