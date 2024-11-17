import { Field, FieldProps, Form, Formik, useFormikContext } from 'formik';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { BiDownArrow } from 'react-icons/bi';
import title from "../../../public/home/whitepaper/title.png"



import Question from '@/components/bulletQuestions';

import { BuyFormValues, Currency } from '@/types';
import Link from 'next/link';

const minToken = process.env.NEXT_PUBLIC_MINIMUM_TOKENS || "10000" as string;
const minBonus = process.env.NEXT_PUBLIC_MINIMUM_BONUS || "10000" as string;

interface CustomSelectWithImageProps {
  field: FieldProps['field'];
  options: {
    img: string;
    name: string;
    price: number;
  }[];
}

interface CustomSelectProps {
  field: FieldProps['field'];
  options: string[];
}

const CustomSelect: React.FC<CustomSelectProps> = ({ field, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative w-full cursor-pointer rounded-md border-gray-300'>
      <div
        className='input-field border-1 mt-6 flex w-full cursor-pointer flex-row border-solid border-gray-300'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='flex w-full flex-row items-center justify-between text-white'>
          <p className='ml-2'>{field.value}</p>
          <BiDownArrow className='mr-2' />
        </div>
      </div>
      {isOpen && (
        <div className='absolute z-10 mt-1 w-full rounded-md border-solid border-gray-300 bg-white shadow-lg'>
          {options.map((option, index) => (
            <div
              key={index}
              className='flex cursor-pointer items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              onClick={() => {
                field.onChange({
                  target: { name: field.name, value: option },
                });
                setIsOpen(false);
              }}
            >
              <div className='flex flex-col items-start justify-center text-black'>
                <p className='ml-2'>{option}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const CustomSelecWithImage: React.FC<CustomSelectWithImageProps> = ({
  field,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { values, setFieldValue } = useFormikContext<BuyFormValues>();

  return (
    <div className='relative w-full cursor-pointer rounded-md border-gray-300 max-w-[280px]'>
      <div
        className='input-field border-1 mt-3 flex w-full cursor-pointer flex-row items-center justify-between border-solid border-gray-300 text-white'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='flex flex-row items-start justify-center text-white'>
          <div className='relative ml-2 h-6 w-6'>
            <Image src={field.value.img} alt={field.value.name} fill />
          </div>
          <div>
            <p className='ml-2'>{field.value.name}</p>
          </div>
        </div>
        <BiDownArrow className='mr-2 text-white' />
      </div>
      {isOpen && (
        <div className='absolute z-10 mt-1 w-full rounded-md border-solid border-gray-300 bg-white shadow-lg'>
          {options.map((option, index) => (
            <div
              key={index}
              className='flex cursor-pointer items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              onClick={() => {
                setFieldValue(
                  'amount',
                  ((+values.numberOfToken * 0.015) / option.price).toFixed(6)
                );

                field.onChange({
                  target: { name: field.name, value: option },
                });
                setIsOpen(false);
              }}
            >
              <div className='relative h-6 w-6'>
                <Image
                  src={option.img}
                  alt={option.name}
                  width={100}
                  height={1100}
                />
              </div>
              <div className='flex flex-col items-start justify-center text-black'>
                <p className='ml-2'>{option.name}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const NumberOfTokenField = () => {
  const { values, setFieldValue } = useFormikContext<BuyFormValues>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      return;
    }
    const newNumberOfTokens = parseInt(e.target.value ?? 0);
    const newAmount = (newNumberOfTokens * 0.015) / values.currency.price ?? 0;
    if (newNumberOfTokens < +minToken) {
      setFieldValue('isBonus', false);
    }
    if (+minBonus <= newNumberOfTokens * 0.015) {
      setFieldValue('isBonus', true);
    } else {
      setFieldValue('isBonus', false);
    }
    setFieldValue('numberOfToken', newNumberOfTokens);
    setFieldValue('amount', newAmount);
  };

  return (
    <>
      <Field
        name='numberOfTokens'
        type='number'
        placeholder={`Min ${minToken} tokens`}
        className='input-field px-3'
        value={values.numberOfToken}
        onChange={handleChange}
      />
      {/* <p className='text-sm text-white'>
        Minimum {minToken} tokens required to buy.
      </p> */}
    </>
  );
};

const AmountField = () => {
  const { values, setFieldValue } = useFormikContext<BuyFormValues>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      return;
    }
    const newAmount = parseFloat(e.target.value ?? 0);
    const newNumberOfTokens = newAmount * values.currency.price * 66.6667 ?? 0;
    if (newNumberOfTokens < +minToken) {
      setFieldValue('isBonus', false);
    }
    if (+minBonus <= newNumberOfTokens * 0.015) {
      setFieldValue('isBonus', true);
    } else {
      setFieldValue('isBonus', false);
    }
    setFieldValue('amount', newAmount);
    setFieldValue('numberOfToken', newNumberOfTokens.toFixed(2));
  };

  return (
    <>
      <Field
        name='amount'
        type='number'
        placeholder={`Min ${+minToken * 0.015} USDT`}
        className='input-field px-3'
        value={values.amount}
        onChange={handleChange}
      />
      {/* <p className='text-sm text-white'>
        Minimum {+minToken * 0.015} USDT required to buy.
      </p> */}
    </>
  );
};

const Buy = ({
  nextState,
  data,
  formData,
  changeFormData,
}: {
  nextState: () => void;
  data: {
    [key: string]: string;
  };
  formData: BuyFormValues;
  changeFormData: (value: BuyFormValues) => void;
}) => {
  const currency: Currency[] = [
    {
      img: '/images/hero/tokens/usdt1.webp',
      name: 'USDT',
      price: 1,
      address: "abc",
    },
    {
      img: '/images/hero/tokens/sol.png',
      name: 'Solana',
      price: 1,
      address: "abc",
    },
    {
      img: '/images/hero/tokens/usdc.png',
      name: 'USDC',
      price: 1,
      address: "abc",
    },
  ];

  const isReferral = ['Yes', 'No'];


  return (
    <div className='buy-wrapper mt-3 mb-8 lg:flex-[1] font-[family-name:var(--font-harngton-sans)]'>
      <Link href='/'>
        <div className='relative'>
          <Image src={title} alt='logo' className="h-16 lg:h-24 w-auto" />
        </div>
      </Link>
      <h1 className='heading'>Welcome to RICHPUG</h1>
      <div className='flex-container-start progress-bar mb-8'>
        <div className='flex-container active h-6 w-6 rounded-full bg-white'>
          <div className='h-3 w-3 rounded-full'></div>
        </div>
        <div className='h-[0.1rem] w-32 bg-white'></div>
        <div className='flex-container h-6 w-6 rounded-full bg-white'>
          <div className='h-3 w-3 rounded-full '></div>
        </div>
        <div className='h-[0.1rem] w-32 bg-white'></div>
        <div className='flex-container h-6 w-6 rounded-full bg-white'>
          <div className='h-3 w-3 rounded-full'></div>
        </div>
      </div>
      <Formik
        initialValues={formData}
        onSubmit={(values, { setFieldError }) => {
          if (+values.numberOfToken < +minToken) {
            setFieldError('numberOfToken', `Min ${minToken} tokens`);
            return;
          }
          changeFormData(values);
          nextState();
        }}
      >
        {({
          errors,
          touched,
          values,
          resetForm,
          handleChange,
          setFieldError,
        }) => (
          <Form>
            <Question
              text='How many $PUG tokens you would like to buy?'
              size='lg'
            />
            <div className='mb-8 mt-4 flex items-center justify-between gap-8'>
              <div className='flex-1'>
                {/* <label className='mb-2 ml-2' htmlFor='noOfError'>
                    NO. OF TOKENS
                  </label> */}
                <p className='mb-2 ml-2 hidden lg:block'>NUMBER OF TOKENS</p>
                <p className='mb-2 ml-2 lg:hidden'>TOKENS</p>
                <NumberOfTokenField />
                {errors.numberOfToken && touched.numberOfToken && (
                  <p className='text-sm text-red-500'>{errors.numberOfToken}</p>
                )}
              </div>
              <div className='flex-1'>
                <p className='mb-2 ml-2 hidden lg:block'>PLEASE ENTER AMOUNT</p>
                <p className='mb-2 ml-2 lg:hidden'>AMOUNT</p>
                <AmountField />
                {errors.amount && touched.amount && (
                  <p className='text-sm text-red-500'>{errors.amount}</p>
                )}
              </div>
            </div>

            <div className='flex flex-col '>
              <div className='flex-container-start mb-4 mt-4 text-white'>
                <div className='relative h-5 w-8 md:h-6 md:w-6'>
                  <Image src='/images/buy/gift.webp' alt='info' fill />
                </div>
                <p className='ml-2'>
                  Buy minimum ${+minBonus} worth of $PUG tokens to include
                  bonus
                </p>
              </div>
              <label className='ml-5 mt-2 cursor-pointer'>
                <Field
                  name='isBonus'
                  type='checkbox'
                  className='mr-5 rounded-sm border border-solid border-white '
                  disabled={+values.numberOfToken * 0.015 < +minBonus}
                />
                250% Sign-up Gaming Bonus
              </label>
              <label className='mb-4 ml-5 mt-1 cursor-pointer'>
                <Field
                  name='isBonus'
                  type='checkbox'
                  className='mr-5 rounded-sm border border-solid border-white'
                  disabled={+values.numberOfToken * 0.015 < +minBonus}
                />
                Enter $250k Giveaway
              </label>
            </div>

            <div className='mt-8 flex items-center justify-between gap-3'>
              <div className='flex-1'>
                <Question text='CURRENCY' size='lg' />
                <Field
                  name='currency'
                  type='text'
                  component={CustomSelecWithImage}
                  options={currency}
                />
              </div>
            </div>

            <div className='flex-container-between btn-container mt-10 w-full gap-16'>
              <button onClick={() => resetForm()} type='reset' className='bg-[#A43BE1]'>
                Reset
              </button>
              <button
                type='submit'
                className='bg-[#A43BE1]'
                onClick={() => {
                  if (+values.numberOfToken < +minToken) {
                    setFieldError('numberOfToken', `Min ${minToken} tokens`);
                    return;
                  }
                  changeFormData(values);
                  nextState();
                }}
              >
                Buy Now
              </button>
            </div>
            <div className='flex-container-start mb-8 mt-8 text-white'>
              <div className='relative h-5 w-8 md:h-6 md:w-6'>
                <Image src='/images/buy/info.webp' alt='info' fill />
              </div>
              <p className='ml-2'>
                Final Summary of your purchase and other details will be shown
                on next page.
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Buy;
