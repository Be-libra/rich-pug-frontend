import Image from 'next/image';
import React, {  useState } from 'react';
// import { ImSpinner2 } from 'react-icons/im';

import Question from '@/components/bulletQuestions';
import title from "../../../public/home/whitepaper/title.png"

// import BuyConfirmationModal from '@/components/modals/BuyConfirmationModal';



import { BuyFormValues, User } from '@/types';
import Link from 'next/link';

const Confirmation = ({
  prevState,
  nextState,
  data: formData,
}: {
  prevState: () => void;
  nextState: () => void;
  data: BuyFormValues;
}) => {

  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);


  return (
    <>
      {/* <SignMessageModal
        show={showLoginModal}
        onToggle={handleToggleShowLoginModal}
        loginWithSign={loginWithSignMessage}
        loader={loader}
      /> */}
      {/* {txloader && <BuyConfirmationModal />} */}
      <div className='mt-3 mb-8 flex-1 font-[family-name:var(--font-harngton-sans)]'>
      <Link href='/'>
        <div className='relative'>
          <Image src={title} alt='logo' className="h-16 lg:h-24 w-auto" />
        </div>
      </Link>
        <h1 className='heading'>Confirmation</h1>
        <div className='flex-container-start progress-bar mb-8'>
          <div className='flex-container h-6 w-6 rounded-full bg-white'>
            <div className='h-3 w-3 rounded-full'></div>
          </div>
          <div className='h-[0.1rem] w-32 bg-white'></div>
          <div className='flex-container active h-6 w-6 rounded-full bg-white'>
            <div className='h-3 w-3 rounded-full '></div>
          </div>
          <div className='h-[0.1rem] w-32 bg-white'></div>
          <div className='flex-container h-6 w-6 rounded-full bg-white'>
            <div className='h-3 w-3 rounded-full'></div>
          </div>
        </div>
        <div className='flex-container-between mt-8 gap-8'>
          <div className='flex-1'>
            <Question text='TOTAL TOKENS' size='sm' />
            <input
              type='number'
              className='input-field px-3 bg-white mt-3'
              placeholder=''
              value={formData.numberOfToken}
              disabled
            />
          </div>
          <div className='flex-1'>
            <Question text='Bonus' size='sm' />
            <input
              type='text'
              className='input-field px-3 bg-white mt-3'
              placeholder=''
              value={formData.isBonus ? 'Yes' : 'No'}
              disabled
            />
          </div>
        </div>
        <div className='flex-container-between mt-12 gap-8'>
          <div className='flex-1'>
            <Question text='AMOUNT TO PAY' size='sm' />
            <input
              type='number'
              className='input-field px-3 bg-white mt-3'
              placeholder=''
              value={formData.amount}
              disabled
            />
          </div>
          <div className='flex-1'>
            <Question text='CURRENCY' size='sm' />
            <input
              type='text'
              className='input-field px-3 mt-3 bg-white'
              placeholder=''
              value={formData.currency.name}
            />
          </div>
        </div>
        <div className='flex-container-between btn-container mt-16 w-full gap-16'>
          <button onClick={prevState}>Back</button>
          <button
            // onClick={onConfirm}
            // disabled={txloader}
            className='row-auto justify-center align-middle'
          >
            {/* {txloader && (
              <ImSpinner2 className='mx-2 h-5 w-5 animate-spin text-red-800' />
            )}{' '} */}
            Confirm
          </button>
        </div>
        <div className='flex-container-start  mb-8 mt-16 text-white'>
          <div className='relative h-6 w-8 md:h-6 md:w-6'>
            <Image src='/images/buy/info.webp' alt='info' fill />
          </div>
          <p className='ml-2'>
            Kindly ensure to have enough BNB in your wallet to cover the gas
            fee.
          </p>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
