import React from 'react'

const Card1 = ({img, text1, text2}) => {
  return (
    <div className='w-70 h-70 border-[2px] rounded-[5px] border-[#0000004D] flex flex-col items-center justify-center gap-[20px] hover:border-[white] hover:bg-[#DB4444] hover:border-[black] hover:text-white transition-colors duration-300'>
       <img src={img} alt="" />
       <p className='text-[40px] font-bold'>{text1}</p>
       <p>{text2}</p>
    </div>
  )
}

export default Card1