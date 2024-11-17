import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';


interface SikaDetailsTypes {
  handleClick?: () => void;
  setModalType?: (val: string) => void;
}
const SikaDetails: React.FC<SikaDetailsTypes> = ({
  handleClick,
  setModalType,
}) => {
  useEffect(() => {
    setModalType ? '' : '';
    handleClick ? '' : '';
  });
  return (
    <>
      <div className='hero-form -mt-5 font-[family-name:var(--font-harngton-sans)]'>
        {/* <Timer showLabel={true} /> */}
        <div className='flex items-center justify-center align-middle'>
          <h3 className='mx-2 font-bold' style={{ fontSize: '20px' }}>
            Presale
          </h3>
          <svg
            width='13'
            height='13'
            viewBox='0 0 13 13'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='dot-loader'
          >
            <circle cx='6.5' cy='6.5' r='6.5' fill='#2FA108' />
          </svg>
        </div>

        <div className='relative mt-4 h-4 w-full rounded-full bg-[#1c1a1a] text-white lg:h-3'>
          <div className='sika-phase-progress-bar h-4 w-[25%] rounded-full bg-[#A43BE1] lg:h-3'></div>
        </div>
        <h3 className='mt-2 text-[#A43BE1] font-semibold' style={{ fontSize: '18px' }}>
          Current Price
        </h3>
        <div className='flex-container-between mt-2 w-full'>
          <div className='h-[2px] w-12 bg-[#A43BE1] md:w-32 lg:w-16'></div>
          <p className='min-w-max lg:mx-4 lg:text-md'>1 $PUG = $0.015 USDT</p>
          <div className='h-[2px] w-12 bg-[#A43BE1] md:w-32 lg:w-16'></div>
        </div>
        <h3 className='mt-2 text-[#A43BE1] font-semibold' style={{ fontSize: '18px' }}>
          Listing Price
        </h3>
        <div className='flex-container-between mt-2 w-full'>
          <div className='h-[2px] w-12 bg-[#A43BE1] md:w-32 lg:w-16'></div>
          <p className='min-w-max lg:mx-4 lg:text-md'>1 $PUG = $0.030 USDT</p>
          <div className='h-[2px] w-12 bg-[#A43BE1] md:w-32 lg:w-16'></div>
        </div>
        <p className='mt-4 lg:text-md'>Total USDT raised</p>
        <a
          className='mb-3 mt-3 rounded-md bg-[#A43BE1] px-3 py-1 text-center'
          style={{ width: '150px' }}
        >
          $60,000 USDT
        </a>
        <div className='flex-container token-container mt-4 mb-4 mx-auto w-[80%] gap-2 md:gap-8 lg:gap-3'>
          <div className='flex-container token w-full bg-[#ffffff21]'>
            <div className='relative h-5 w-3'>
              <Image src='/images/hero/tokens/usdt1.webp' alt='card' fill />
            </div>
            <p className='ml-2'>USDT</p>
          </div>
          <div className='flex-container token w-full bg-[#ffffff21]'>
            <div className='relative h-5 w-3'>
              <Image src='/images/hero/tokens/sol.png' alt='eth' fill />
            </div>
            <p className='ml-2'>SOLANA</p>
          </div>
        </div>
        <div className='flex-container token-container mt-0 mb-4 mx-auto w-[40%] gap-2 md:gap-8 lg:gap-3'>
          <div className='flex-container token w-full bg-[#ffffff21]'>
            <div className='relative h-5 w-3'>
              <Image src='/images/hero/tokens/usdc.png' alt='card' fill />
            </div>
            <p className='ml-2'>USDC</p>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default SikaDetails;
