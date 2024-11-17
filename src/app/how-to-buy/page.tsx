"use client"
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { AiOutlineDesktop } from 'react-icons/ai';
import { BsPhone } from 'react-icons/bs';

import SikaDetails from '@/components/common/SikaDetails';
import FAQ from '@/components/home/Faq';
import Footer from '@/components/Footer';
// import Navbar from '@/components/sections/Navbar';
const Navbar = dynamic(() => import('@/components/Navbar'), {
  ssr: false,
});
const HowToBuy = () => {

  const [modal, setModal] = React.useState('coming-soon');
  useEffect(() => {
    // eslint-disable-next-line
    modal === 'hello' && setModal('hello');
  }, [modal]);
  const mobileData = [
    'Open "Trust Wallet" or any web3 wallet, visit our website "richpug.com" using the integrated browser, and click on Buy Now.',
    'Enter the number of tokens you want to receive or the amount of USDT you want to spend.',
    'Select Currency (USDT, USDC, SOL) and Choose “Yes” if you want to enter the affiliate code.',
    'Click on Buy Now to be redirected to the Confirmation Page.',
    'Review your purchase and click on confirm.',
    'Select “Trust Wallet” option > Sign In > Confirm. Your wallet is now connected.',
    'Please confirm again and confirm your transaction. Make sure to hold a minimum of $5 worth of SmartChain SOL for the gas fee.',
    'Once the transaction has been completed, Visit “My Dashboard” to check your current balance of PUG tokens.',
    'During the exchange listing event, you will be able to claim your tokens directly to your linked wallet by clicking on the Claim button.',
  ];
  const desktopData = [
    'Open your browser, visit our website richpug.com, and click on Buy Now $PUG.',
    'Enter the number of tokens you want to receive or the amount of USDT you want to spend.',
    'Select Currency (USDT, USDC, SOL) and Choose “Yes” if you want to enter the affiliate code.',
    'Click on Buy Now to be redirected to the Confirmation Page.',
    'Review your purchase and click on confirm.',
    'Select “Metamask” option > Sign In > Confirm. Your wallet is now connected.',
    'Please confirm again and confirm your transaction. Make sure to hold a minimum of $5 worth of Smart Chain SOL for the gas fee.',
    'Once the transaction has been completed, Visit “My Dashboard” to check your current balance of PUG tokens.',
  ];
  return (
    <div className='how-to-buy-container font-[family-name:var(--font-harngton-sans)]'>
      <Navbar />
      <div className='flex-container-between hero'>
        <div>
          <h1 className='mt-12'>How to buy</h1>
          <h1 className='relative'>
            $PUG?
            <div className='absolute -bottom-4 left-8 xl:bottom-0'>
              <div className='relative h-4 w-40 lg:h-3 lg:w-36 xl:w-48'>
                <Image src='/images/hero/stroke.png' alt='' fill />
              </div>
            </div>
          </h1>
        </div>
        <div className='relative mt-12 md:mt-8 lg:mt-0'>
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='relative h-[22rem] w-[22rem] md:h-[36rem] md:w-[36rem] lg:h-[25rem] lg:w-[25rem] xl:h-[28rem] xl:w-[28rem]'>
              <Image src='/images/hero/dotted_circle.png' alt='' fill />
            </div>
          </div>
          <SikaDetails />
        </div>
      </div>
      <div className='flex-container-start mx-auto mt-24 w-max rounded-2xl bg-gradient-to-b from-[#000000a1] to-[#000000] px-4 py-2 md:mx-20'>
        <h2 className='text-2xl font-semibold'>On Mobile</h2>{' '}
        <BsPhone className='ml-1 text-2xl font-bold' />
      </div>
      <div>
        {mobileData.map((item, index) => {
          return (
            <div key={index} className='step-container'>
              <p className='pb-3'>{item}</p>
            </div>
          );
        })}
      </div>
      <div className='flex-container-start mx-auto mt-24 w-max rounded-2xl bg-gradient-to-b from-[#000000a1] to-[#000000] px-4 py-2 md:mx-20'>
        <h2 className='text-2xl font-semibold'>On Desktop</h2>{' '}
        <AiOutlineDesktop className='ml-2 text-3xl font-bold' />
      </div>
      <div>
        {desktopData.map((item, index) => {
          return (
            <div key={index} className='step-container'>
              <p className='pb-3'>{item}</p>
            </div>
          );
        })}
      </div>
      <FAQ />
      <Footer />
    </div>
  );
};

export default HowToBuy;
