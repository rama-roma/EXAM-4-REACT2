import { InstagramOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons'
import React from 'react'

const Card2 = ({img, text1, text2}) => {
  return (
    <div className='flex flex-col items-start gap-[10px]'>
        <img src={img} alt="" />
        <p className='text-[30px]'>{text1}</p>
        <p>{text2}</p>
        <div className='flex items-center gap-[20px]'>
           <TwitterOutlined style={{fontSize:"25px"}} />
           <InstagramOutlined style={{fontSize:"25px"}} />
           <LinkedinOutlined style={{fontSize:"25px"}} />
        </div>
    </div>
  )
}

export default Card2