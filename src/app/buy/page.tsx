'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';


import Buy from '@/components/buyComponents/Buy';
import Confirmation from '@/components/buyComponents/Confirmation';
import Success from '@/components/buyComponents/Success';
import SikaDetails from '@/components/common/SikaDetails';

// import Failed from '@/components/buyComponents/Failed';
import { BuyFormValues } from '@/types';

export default function BuyPage() {
  const [state, setState] = useState(0);
  const [referralCode] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const [formData, setFormData] = useState<BuyFormValues>({
    numberOfToken: '',
    amount: '',
    currency: {
      img: '/images/hero/tokens/usdt1.webp',
      name: 'USDT',
      price: 1,
      address: "abc",
    },
    isBonus: false,
    isReferral: 'No',
    referralLink:
      referralCode !== undefined && referralCode !== null
        ? referralCode.toString()
        : '',
  });

  const nextState = () => {
    setState(state + 1);
  };
  const prevState = () => {
    setState(state - 1);
  };

  useEffect(() => {
    const loadingRequire = window.location.search === '?loading=false';
    if (loadingRequire) {
      setLoading(false);
      return;
    }
    setTimeout(() => setLoading(false), 5000);
  }, []);


  return (
     (
      <>
        {state === 2 ? (
          <Success />
        ) : (
          <div className='buy-container'>
            {state === 0 ? (
              <Buy
                nextState={nextState}
                data={{USDT:"1000"}}
                formData={formData}
                changeFormData={(value: BuyFormValues) => setFormData(value)}
              />
            ) : (
              <Confirmation
                prevState={prevState}
                nextState={nextState}
                data={formData}
              />
            )}
            <div
              className={`relative ${
                state === 1 ? 'mb-16 block md:mt-16 lg:mt-0' : 'hidden'
              } flex-[0.8] lg:block xl:ml-16`}
            >
              {state === 0 && (
                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                  <div className='relative h-[22rem] w-[22rem] md:h-[36rem] md:w-[36rem] lg:h-[25rem] lg:w-[25rem] xl:h-[28rem] xl:w-[28rem]'>
                    <Image src='/images/hero/dotted_circle.png' alt='' fill />
                  </div>
                </div>
              )}

              {state === 0 && <SikaDetails />}
              {state === 1 && (
                <div className='hero-form min-w-[300px] max-w-[320px] font-[family-name:var(--font-harngton-sans)]'>
                  <div className='relative h-6 w-8 md:h-6 md:w-6'>
                    <Image src='/images/buy/info.webp' alt='info' fill />
                  </div>
                  <p className='my-4 px-2 text-center'>
                    Your purchased tokens are allocated to vesting smart
                    contract and are not available to claim just yet. You will
                    be able to claim your available tokens during exchange
                    listing event.
                  </p>
                  <div className='my-4 h-[2px] w-full bg-[#A43BE1] px-4'></div>
                  <h4 className='mb-2 mt-2 font-normal'>
                    First Claim : 50% @T.G.E
                  </h4>
                  <h4 className='mb-2 font-normal'>Vesting : 5% Every Week</h4>
                </div>
              )}
            </div>
          </div>
        )}
      </>
    )
  );
}
