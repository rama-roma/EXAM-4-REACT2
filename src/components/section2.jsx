import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './style.css'
import img1 from '../images/Frame 563.svg'
import img2 from '../images/hero_endframe__cvklg0xk3w6e_large 2.svg'

import { Pagination } from 'swiper/modules';
import { RightOutlined } from '@ant-design/icons';

export function Section2() {
  return (
    <>

      <div className='hidden md:block'>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className='bg-[black] text-[white] flex justify-center items-center gap-[90px]'>
            <div className='flex flex-col items-start gap-[20px]'>
              <img className='w-70' src={img1} alt="" />
              <div className='flex flex-col items-start'>
                <h1 className='text-[60px] font-bold'>Up to 10% </h1>
                <h1 className='text-[60px] font-bold'>off Voucher</h1>
              </div>
              <div className='flex items-center gap-[30px]'>
                <p className="border-b-2 border-white">Shop Now</p>
                <RightOutlined />
              </div>
            </div>
            <div>
              <img className='w-130' src={img2} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className='bg-[black] text-[white] flex justify-center items-center gap-[90px]'>
            <div className='flex flex-col items-start gap-[20px]'>
              <img className='w-70' src={img1} alt="" />
              <div className='flex flex-col items-start'>
                <h1 className='text-[60px] font-bold'>Up to 10% </h1>
                <h1 className='text-[60px] font-bold'>off Voucher</h1>
              </div>
              <div className='flex items-center gap-[30px]'>
                <p className="border-b-2 border-white">Shop Now</p>
                <RightOutlined />
              </div>
            </div>
            <div>
              <img className='w-130' src={img2} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className='bg-[black] text-[white] flex justify-center items-center gap-[90px]'>
            <div className='flex flex-col items-start gap-[20px]'>
              <img className='w-70' src={img1} alt="" />
              <div className='flex flex-col items-start'>
                <h1 className='text-[60px] font-bold'>Up to 10% </h1>
                <h1 className='text-[60px] font-bold'>off Voucher</h1>
              </div>
              <div className='flex items-center gap-[30px]'>
                <p className="border-b-2 border-white">Shop Now</p>
                <RightOutlined />
              </div>
            </div>
            <div>
              <img className='w-130' src={img2} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className='bg-[black] text-[white] flex justify-center items-center gap-[90px]'>
            <div className='flex flex-col items-start gap-[20px]'>
              <img className='w-70' src={img1} alt="" />
              <div className='flex flex-col items-start'>
                <h1 className='text-[60px] font-bold'>Up to 10% </h1>
                <h1 className='text-[60px] font-bold'>off Voucher</h1>
              </div>
              <div className='flex items-center gap-[30px]'>
                <p className="border-b-2 border-white">Shop Now</p>
                <RightOutlined />
              </div>
            </div>
            <div>
              <img className='w-130' src={img2} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>




      <div className='block md:hidden'>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="swiperMob" 
        >
          <SwiperSlide className='bg-[black] text-[white] flex flex-col justify-center items-center gap-[100px] p-4'>
            <div className='flex flex-col items-start gap-[15px]'>
              <img className='w-50' src={img1} alt="" />
              <div className='flex flex-col items-start'>
                <h1 className='text-[50px] font-bold'>Up to 10% </h1>
                <h1 className='text-[50px] font-bold'>off Voucher</h1>
              </div>
              <div className='flex items-center gap-[15px]'>
                <p className="border-b-2 border-white">Shop Now</p>
                <RightOutlined />
              </div>
            </div>
            <div>
              <img className='w-220' src={img2} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className='bg-[black] text-[white] flex flex-col justify-center items-center gap-[100px] p-4'>
            <div className='flex flex-col items-start gap-[15px]'>
              <img className='w-50' src={img1} alt="" />
              <div className='flex flex-col items-start'>
                <h1 className='text-[50px] font-bold'>Up to 10% </h1>
                <h1 className='text-[50px] font-bold'>off Voucher</h1>
              </div>
              <div className='flex items-center gap-[15px]'>
                <p className="border-b-2 border-white">Shop Now</p>
                <RightOutlined />
              </div>
            </div>
            <div>
              <img className='w-220' src={img2} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className='bg-[black] text-[white] flex flex-col justify-center items-center gap-[100px] p-4'>
            <div className='flex flex-col items-start gap-[15px]'>
              <img className='w-50' src={img1} alt="" />
              <div className='flex flex-col items-start'>
                <h1 className='text-[50px] font-bold'>Up to 10% </h1>
                <h1 className='text-[50px] font-bold'>off Voucher</h1>
              </div>
              <div className='flex items-center gap-[15px]'>
                <p className="border-b-2 border-white">Shop Now</p>
                <RightOutlined />
              </div>
            </div>
            <div>
              <img className='w-220' src={img2} alt="" />
            </div>
          </SwiperSlide>


          <SwiperSlide className='bg-[black] text-[white] flex flex-col justify-center items-center gap-[100px] p-4'>
            <div className='flex flex-col items-start gap-[15px]'>
              <img className='w-50' src={img1} alt="" />
              <div className='flex flex-col items-start'>
                <h1 className='text-[50px] font-bold'>Up to 10% </h1>
                <h1 className='text-[50px] font-bold'>off Voucher</h1>
              </div>
              <div className='flex items-center gap-[15px]'>
                <p className="border-b-2 border-white">Shop Now</p>
                <RightOutlined />
              </div>
            </div>
            <div>
              <img className='w-220' src={img2} alt="" />
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </>
  );
}