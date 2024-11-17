import Image from 'next/image';
import React from 'react';

import Question from '@/components/bulletQuestions';
import Link from 'next/link';
import title from "../../../public/home/whitepaper/title.png"


const Failed = () => {
  return (
    <div className='mx-[2rem] mt-3 mb-8 max-w-[1400px] flex-1 text-center text-white  md:mx-[5rem] 2xl:mx-auto'>
      <Link href='/'>
        <div className='relative'>
          <Image src={title} alt='logo' className="h-16 lg:h-24 w-auto" />
        </div>
      </Link>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex-container'>
          <div className='relative h-[10rem] w-[8rem] lg:h-[16rem] lg:w-[13rem]'>
            <Image src='/images/buy/failed.webp' alt='success' fill />
          </div>
        </div>
        <h1 className='mt-6 text-2xl font-normal lg:text-4xl'>
          Oops! Something went wrong.
        </h1>
        <h2 className='mt-4 text-lg lg:mt-6 lg:text-xl'>Why this happened?</h2>
        <div className='mt-2  hidden flex-col items-start justify-center gap-1 lg:flex'>
          <Question
            size='sm'
            text='You may not have enough gas fee (Solana) in your wallet.'
          />
          <Question size='sm' text='The Blockchain Network is Busy.' />
        </div>
        <div className='mt-2  flex flex-col items-start justify-center gap-1 lg:hidden'>
          <Question size='sm' text='You may not have enough gas fee (BNB).' />
          <Question size='sm' text='The Blockchain Network is Busy.' />
        </div>
        <h3 className='mx-auto mt-4 w-full lg:mt-8 lg:w-[80%] '>
          Check your wallet, if funds are debited, then contact customer support
        </h3>
      </div>
    </div>
  );
};

export default Failed;
