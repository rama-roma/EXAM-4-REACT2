import React from 'react'

const Title = ({text, text2}) => {
  return (
    <>
      <div className='flex items-center gap-[20px]'>
        <div className='bg-[#DB4444] w-7 h-15 rounded-[10px]'></div>
        <p className='text-[#DB4444] font-bold'>{text}</p>
      </div>
      <div>
        <p className='text-[35px] font-bold'>{text2}</p>
      </div>
    </>
  ) 
}

export default Title