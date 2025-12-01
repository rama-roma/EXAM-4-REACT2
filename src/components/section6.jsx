import { EyeOutlined, HeartOutlined } from '@ant-design/icons'
import { Checkbox, Radio, Rate } from 'antd'
import React from 'react'
import BtnRed from './btnRed'
import '../index.css'
import img1 from '../images/copa (1).svg'
import img2 from '../images/copa (2).svg'
import img3 from '../images/copa (3).svg'
import img4 from '../images/copa (4).svg'
import { Link } from 'react-router-dom'

const Section6 = () => {
  return (
    <>
    <div className='hidden md:block'>
      <section className='mt-20 mb-10 flex items-center justify-center gap-[30px]'>
        <article className='group relative flex flex-col items-start justify-start gap-[20px] w-80 h-100'>
          <div className='bg-[#F5F5F5] w-full h-70 flex flex-col gap-[20px] p-4'>
            <div className='flex justify-between items-center'>
              <div className='bg-[#00FF66] text-[white] p-2 pl-5 pr-5 rounded-[7px]'>NEW</div>
              <HeartOutlined style={{ fontSize: "25px" }} />
            </div>
            <div className='flex justify-end'>
              <EyeOutlined style={{ fontSize: "25px" }} />
            </div>
            <div className='flex justify-center mt-[-30px]'>
              <img className='w-50' src={img1} alt="" />
            </div>
          </div>

          <div className='flex flex-col items-start gap-[10px]'>
            <p className='font-bold'>HAVIT HV-G92 Gamepad</p>
            <div className='flex items-center gap-[10px]'>
              <p className='text-[#DB4444] font-bold'>$120</p>
              <Rate />
              <p className='text-[grey] font-bold'>(88)</p>
            </div>
            <Radio.Group defaultValue="red">
              <div className="flex items-center ">
                <Radio value="red" className="radio-red" />
                <Radio value="blue" className='radio-blue' />
              </div>
            </Radio.Group>
          </div>

  
          <button className='absolute bottom-30 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            Add to Cart
          </button>
        </article>

        <article className='group relative flex flex-col items-start justify-start gap-[20px] w-80 h-100'>
          <div className='bg-[#F5F5F5] w-full h-70 flex flex-col gap-[20px] p-4'>
            <div className='flex justify-end flex-col items-end gap-[30px] pt-2'>
              <HeartOutlined style={{ fontSize: "25px" }} />
              <EyeOutlined style={{ fontSize: "25px" }} />    
            </div>
            <div className='flex justify-center mt-[-40px]'>
              <img className='w-40' src={img4} alt="" />
            </div>
          </div>

          <div className='flex flex-col items-start gap-[10px]'>
            <p className='font-bold'>Jr. Zoom Soccer Cleats</p>
            <div className='flex items-center gap-[10px]'>
              <p className='text-[#DB4444] font-bold'>$120</p>
              <Rate />
              <p className='text-[grey] font-bold'>(88)</p>
            </div>
            <Radio.Group defaultValue="red">
              <div className="flex items-center ">
                <Radio value="red" className="radio-red" />
                <Radio value="blue" className='radio-blue' />
              </div>
            </Radio.Group>
          </div>

  
          <button className='absolute bottom-30 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            Add to Cart
          </button>
        </article>

        <article className='group relative flex flex-col items-start justify-start gap-[20px] w-80 h-100'>
          <div className='bg-[#F5F5F5] w-full h-70 flex flex-col gap-[20px] p-4'>
            <div className='flex justify-between items-center'>
              <div className='bg-[#00FF66] text-[white] p-2 pl-5 pr-5 rounded-[7px]'>NEW</div>
              <HeartOutlined style={{ fontSize: "25px" }} />
            </div>
            <div className='flex justify-end'>
              <EyeOutlined style={{ fontSize: "25px" }} />
            </div>
            <div className='flex justify-center mt-[-30px]'>
              <img className='w-40' src={img3} alt="" />
            </div>
          </div>

          <div className='flex flex-col items-start gap-[10px]'>
            <p className='font-bold'>GP11 Shooter USB Gamepad</p>
            <div className='flex items-center gap-[10px]'>
              <p className='text-[#DB4444] font-bold'>$120</p>
              <Rate />
              <p className='text-[grey] font-bold'>(88)</p>
            </div>
            <Radio.Group defaultValue="red">
              <div className="flex items-center ">
                <Radio value="red" className="radio-red" />
                <Radio value="blue" className='radio-blue' />
              </div>
            </Radio.Group>
          </div>

  
          <button className='absolute bottom-30 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            Add to Cart
          </button>
        </article>


        <article className='group relative flex flex-col items-start justify-start gap-[20px] w-80 h-100'>
          <div className='bg-[#F5F5F5] w-full h-70 flex flex-col gap-[20px] p-4'>
            <div className='flex justify-end flex-col items-end gap-[30px] pt-2'>
              <HeartOutlined style={{ fontSize: "25px" }} />
              <EyeOutlined style={{ fontSize: "25px" }} />    
            </div>
            <div className='flex justify-center mt-[-50px]'>
              <img className='w-40' src={img2} alt="" />
            </div>
          </div>

          <div className='flex flex-col items-start gap-[10px]'>
            <p className='font-bold'>Quilted Satin Jacket</p>
            <div className='flex items-center gap-[10px]'>
              <p className='text-[#DB4444] font-bold'>$120</p>
              <Rate />
              <p className='text-[grey] font-bold'>(88)</p>
            </div>
            <Radio.Group defaultValue="red">
              <div className="flex items-center ">
                <Radio value="red" className="radio-red" />
                <Radio value="blue" className='radio-blue' />
              </div>
            </Radio.Group>
          </div>

  
          <button className='absolute bottom-30 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            Add to Cart
          </button>
        </article>
      </section>
      <div className='flex justify-center'>
        <Link to="/products">
          <BtnRed text="View All Products"/>
        </Link>
      </div>
    </div>


<div className='block md:hidden'>
  <section className='mt-20 mb-10 overflow-x-auto'>
    <div className='inline-flex gap-[30px] min-w-max py-2'>
      <article className='group relative flex flex-col items-start justify-start gap-[20px] w-80 h-100 flex-shrink-0'>
        <div className='bg-[#F5F5F5] w-full h-70 flex flex-col gap-[20px] p-4'>
          <div className='flex justify-between items-center'>
            <div className='bg-[#00FF66] text-[white] p-2 pl-5 pr-5 rounded-[7px]'>NEW</div>
            <HeartOutlined style={{ fontSize: "25px" }} />
          </div>
          <div className='flex justify-end'>
            <EyeOutlined style={{ fontSize: "25px" }} />
          </div>
          <div className='flex justify-center mt-[-30px]'>
            <img className='w-50' src={img1} alt="" />
          </div>
        </div>

        <div className='flex flex-col items-start gap-[10px]'>
          <p className='font-bold'>HAVIT HV-G92 Gamepad</p>
          <div className='flex items-center gap-[10px]'>
            <p className='text-[#DB4444] font-bold'>$120</p>
            <Rate />
            <p className='text-[grey] font-bold'>(88)</p>
          </div>
          <Radio.Group defaultValue="red">
            <div className="flex items-center ">
              <Radio value="red" className="radio-red" />
              <Radio value="blue" className='radio-blue' />
            </div>
          </Radio.Group>
        </div>

        <button className='absolute bottom-30 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          Add to Cart
        </button>
      </article>

      <article className='group relative flex flex-col items-start justify-start gap-[20px] w-80 h-100 flex-shrink-0'>
        <div className='bg-[#F5F5F5] w-full h-70 flex flex-col gap-[20px] p-4'>
          <div className='flex justify-end flex-col items-end gap-[30px] pt-2'>
            <HeartOutlined style={{ fontSize: "25px" }} />
            <EyeOutlined style={{ fontSize: "25px" }} />    
          </div>
          <div className='flex justify-center mt-[-40px]'>
            <img className='w-40' src={img4} alt="" />
          </div>
        </div>

        <div className='flex flex-col items-start gap-[10px]'>
          <p className='font-bold'>Jr. Zoom Soccer Cleats</p>
          <div className='flex items-center gap-[10px]'>
            <p className='text-[#DB4444] font-bold'>$120</p>
            <Rate />
            <p className='text-[grey] font-bold'>(88)</p>
          </div>
          <Radio.Group defaultValue="red">
            <div className="flex items-center ">
              <Radio value="red" className="radio-red" />
              <Radio value="blue" className='radio-blue' />
            </div>
          </Radio.Group>
        </div>

        <button className='absolute bottom-30 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          Add to Cart
        </button>
      </article>

      <article className='group relative flex flex-col items-start justify-start gap-[20px] w-80 h-100 flex-shrink-0'>
        <div className='bg-[#F5F5F5] w-full h-70 flex flex-col gap-[20px] p-4'>
          <div className='flex justify-between items-center'>
            <div className='bg-[#00FF66] text-[white] p-2 pl-5 pr-5 rounded-[7px]'>NEW</div>
            <HeartOutlined style={{ fontSize: "25px" }} />
          </div>
          <div className='flex justify-end'>
            <EyeOutlined style={{ fontSize: "25px" }} />
          </div>
          <div className='flex justify-center mt-[-30px]'>
            <img className='w-40' src={img3} alt="" />
          </div>
        </div>

        <div className='flex flex-col items-start gap-[10px]'>
          <p className='font-bold'>GP11 Shooter USB Gamepad</p>
          <div className='flex items-center gap-[10px]'>
            <p className='text-[#DB4444] font-bold'>$120</p>
            <Rate />
            <p className='text-[grey] font-bold'>(88)</p>
          </div>
          <Radio.Group defaultValue="red">
            <div className="flex items-center ">
              <Radio value="red" className="radio-red" />
              <Radio value="blue" className='radio-blue' />
            </div>
          </Radio.Group>
        </div>

        <button className='absolute bottom-30 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          Add to Cart
        </button>
      </article>

      <article className='group relative flex flex-col items-start justify-start gap-[20px] w-80 h-100 flex-shrink-0'>
        <div className='bg-[#F5F5F5] w-full h-70 flex flex-col gap-[20px] p-4'>
          <div className='flex justify-end flex-col items-end gap-[30px] pt-2'>
            <HeartOutlined style={{ fontSize: "25px" }} />
            <EyeOutlined style={{ fontSize: "25px" }} />    
          </div>
          <div className='flex justify-center mt-[-50px]'>
            <img className='w-40' src={img2} alt="" />
          </div>
        </div>

        <div className='flex flex-col items-start gap-[10px]'>
          <p className='font-bold'>Quilted Satin Jacket</p>
          <div className='flex items-center gap-[10px]'>
            <p className='text-[#DB4444] font-bold'>$120</p>
            <Rate />
            <p className='text-[grey] font-bold'>(88)</p>
          </div>
          <Radio.Group defaultValue="red">
            <div className="flex items-center ">
              <Radio value="red" className="radio-red" />
              <Radio value="blue" className='radio-blue' />
            </div>
          </Radio.Group>
        </div>

        <button className='absolute bottom-30 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          Add to Cart
        </button>
      </article>
    </div>
  </section>
  
  <div className='flex justify-center'>
    <Link to="/products">
      <BtnRed text="View All Products"/>
    </Link>
  </div>
</div>
    </>
  )
}

export default Section6