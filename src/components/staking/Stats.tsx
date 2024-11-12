import { FunctionComponent } from 'react';
import styles from "./stats.module.scss"


const Stats: FunctionComponent = () => {

  return (
    <>
      <section className='w-100 staking-stats-section my-[50px] flex justify-center font-[family-name:var(--font-harngton-sans)]'>
        <div className='staking-stats-container container flex justify-center'>
          <div className={`wrapper flex flex-wrap justify-center rounded-lg`}>
            <div className={`flex h-[100px] w-[280px] flex-col items-center justify-center border lg:rounded-tl-lg lg:rounded-bl-lg text-center ${styles.statsContainer}`}>
              <p className='text-[16px]'>Users</p>
              <p className='mt-2 text-[20px] text-white'>
                { 0}
              </p>
            </div>
            <div className={`flex h-[100px] w-[280px] flex-col items-center justify-center border text-center ${styles.statsContainer}`}>
              <p className='text-[16px]'>Total Staked</p>
              <p className='mt-2 text-[20px] text-white'>
                { 0}{' '}
                <span className='text-[#A43BE1]'>PUG</span>
              </p>
            </div>
            <div className={`flex h-[100px] w-[280px] flex-col items-center justify-center border lg:rounded-tr-lg lg:rounded-br-lg text-center ${styles.statsContainer}`}>
              <p className='text-[16px]'>Total Rewards</p>
              <p className='mt-2 text-[20px] text-white'>
                { 0}{' '}
                <span className='text-[#A43BE1]'>PUG</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Stats;
