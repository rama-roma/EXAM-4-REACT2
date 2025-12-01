import React from 'react'

const Card3 = ({icon, text}) => {
  return (
    <div className='flex-shrink-0 flex flex-col items-center justify-center gap-[20px] border-2 rounded-[2px] border-[#0000004D] text-[#000000] p-4 w-50 h-40 hover:bg-[#DB4444] hover:text-[white] hover:border-[#DB4444] transition-colors duration-300'>
      <div>
        {icon}
      </div>
      <p className='whitespace-nowrap'>{text}</p>
    </div>
  )
}

export default Card3