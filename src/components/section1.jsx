import { RightOutlined } from '@ant-design/icons'
import React from 'react'

const Section1 = () => {
  return (
    <>
    <div className='hidden md:block'>
      <section>
        <div className='flex flex-col items-start gap-[20px]'>
          <div className='flex items-center justify-between w-[200px]'>
            <p>Woman’s Fashion</p>
            <RightOutlined />
          </div>
          <div className='flex items-center justify-between w-[200px]'>
            <p>Men’s Fashion</p>
            <RightOutlined />
          </div>
          <div className='flex items-center justify-between w-[200px]'>
            <p>Electronics</p>
            <RightOutlined />
          </div>
          <div className='flex items-center justify-between w-[200px]'>
            <p>Home & Lifestyle</p>
            <RightOutlined />
          </div>
          <div className='flex items-center justify-between w-[200px]'>
            <p>Medicine</p>
            <RightOutlined />
          </div>
          <div className='flex items-center justify-between w-[200px]'>
            <p>Sports & Outdoor</p>
            <RightOutlined />
          </div>
          <div className='flex items-center justify-between w-[200px]'>
            <p>Baby’s & Toys</p>
            <RightOutlined />
          </div>
          <div className='flex items-center justify-between w-[200px]'>
            <p>Groceries & Pets</p>
            <RightOutlined />
          </div>
          <div className='flex items-center justify-between w-[200px]'>
            <p>Health & Beauty</p>
            <RightOutlined />
          </div>
        </div>
      </section>
    </div>


    <div className='block md:hidden'>
      <section>
        <div className='flex flex-wrap  gap-[20px]'>
          <div className='flex items-center justify-between gap-[20px] bg-[#e0dfdfe1] p-3 rounded-[5px] '>
            <p>Woman’s Fashion</p>
            <RightOutlined />
          </div>
          <div className='flex items-center justify-between gap-[20px] bg-[#e0dfdfe1] p-3 rounded-[5px] '>
            <p>Men’s Fashion</p>
            <RightOutlined />
          </div>
          <div className='flex items-center justify-between gap-[20px] bg-[#e0dfdfe1] p-3 rounded-[5px] '>
            <p>Electronics</p>
            <RightOutlined />
          </div>
          <div className='flex items-center justify-between gap-[20px] bg-[#e0dfdfe1] p-3 rounded-[5px] '>
            <p>Home & Lifestyle</p>
            <RightOutlined />
          </div>
          <div className='flex items-center justify-between gap-[20px] bg-[#e0dfdfe1] p-3 rounded-[5px] '>
            <p>Medicine</p>
            <RightOutlined />
          </div>
          <div className='flex items-center justify-between gap-[20px] bg-[#e0dfdfe1] p-3 rounded-[5px] '>
            <p>Sports & Outdoor</p>
            <RightOutlined />
          </div>
          <div className='flex items-center justify-between gap-[20px] bg-[#e0dfdfe1] p-3 rounded-[5px] '>
            <p>Baby’s & Toys</p>
            <RightOutlined />
          </div>
          <div className='flex items-center justify-between gap-[20px] bg-[#e0dfdfe1] p-3 rounded-[5px] '>
            <p>Groceries & Pets</p>
            <RightOutlined />
          </div>
          <div className='flex items-center justify-between gap-[20px] bg-[#e0dfdfe1] p-3 rounded-[5px] '>
            <p>Health & Beauty</p>
            <RightOutlined />
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Section1