import { RightOutlined } from '@ant-design/icons'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBrand } from '../reducers/brands/brand';


const Section1 = () => {

  const { data } = useSelector((state) => state.brand);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrand());
  },[dispatch]);

  return (
    <>
    <div className='hidden md:block'>
    <section className='flex flex-col items-start gap-[20px]'>
    {
      data.map((e) => {
        return(
          <div key={e.id} className='flex items-center justify-between w-[200px]'>
             <h1>{e.brandName}</h1>
              <RightOutlined />
          </div>
        )
      })
    }
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