import React from 'react';

const Question = ({ text, size }: { text: string; size: string }) => {
  return (
    <div className='flex-container-start'>
      <div
        className={
          size == 'lg'
            ? 'mr-1 h-2 w-2 rounded-full bg-[#DD1B50]'
            : 'mr-1 h-1 w-1 rounded-full bg-[#DD1B50]'
        }
      ></div>
      <p>{text}</p>
    </div>
  );
};

export default Question;
