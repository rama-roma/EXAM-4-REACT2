import { MessageOutlined, PhoneOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'
import BtnRed from '../components/btnRed'

const Contact = () => {
  return (
    <>
      <div className='hidden md:block'>
            <main>
      <div className='mt-20 flex items-center gap-[10px]'>
        <p className='text-[grey]'>Home</p>
        <p className='text-[grey]'>/</p>
        <p>Contact</p>
      </div>

      <section className='mt-20 mb-50 flex items-center gap-[30px]   justify-between'>
        <div className='bg-[white] shadow-2xl border-[2px] border-[white] p-10 rounded-2xl flex flex-col gap-[20px]'>
          <div className='flex items-center gap-[20px]'>
            <div className='bg-[#DB4444] w-15 h-15 rounded-[100%] flex justify-center items-center'>
              <PhoneOutlined style={{color:"white", fontSize:"25px"}} />
            </div>
            <p className='text-[20px]'>Call To Us</p>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
          <br />
          <div className='border w-full border-[#0000004D]'></div><br />
          <div className='flex items-center gap-[20px]'>
            <div className='bg-[#DB4444] w-15 h-15 rounded-[100%] flex justify-center items-center'>
              <MessageOutlined  style={{color:"white", fontSize:"25px"}} />
            </div>
            <p className='text-[20px]'>Write To US</p>
          </div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>

        <div className='bg-[white] shadow-2xl border-[2px] border-[white] p-10 rounded-2xl flex flex-col gap-[20px] '>
          <div className='flex  justify-center gap-[30px]'>
            <Input placeholder='Name' style={{height:"50px", width:"230px" }} />
            <Input placeholder='Email' style={{height:"50px", width:"230px" }} />
            <Input placeholder='Phone' style={{height:"50px", width:"230px" }} />
          </div>
          <TextArea placeholder='Your Massage...' style={{height:"330px"}} />
          <div className='flex justify-end'>
            <BtnRed text="Send Massage"/>
          </div>
        </div>
      </section>
    </main>
      </div>


      <div className='block md:hidden'>
    <main>
      <div className='mt-10 flex items-center gap-[10px]'>
        <p className='text-[grey]'>Home</p>
        <p className='text-[grey]'>/</p>
        <p>Contact</p>
      </div>

          <section className='mt-20 mb-50 flex flex-col items-center gap-[30px]'>
            <div className='bg-[white] shadow-2xl border-[2px] border-[white] p-6 rounded-2xl flex flex-col gap-[20px] w-full'>
              <div className='flex items-center gap-[20px]'>
                <div className='bg-[#DB4444] w-12 h-12 rounded-[100%] flex justify-center items-center'>
                  <PhoneOutlined style={{color:"white", fontSize:"20px"}} />
                </div>
                <p className='text-[18px] font-semibold'>Call To Us</p>
              </div>
              <p className='text-[#666] text-sm'>We are available 24/7, 7 days a week.</p>
              <p className='font-medium text-sm'>Phone: +8801611112222</p>
              <br />
              <div className='border w-full border-[#0000004D]'></div><br />
              <div className='flex items-center gap-[20px]'>
                <div className='bg-[#DB4444] w-12 h-12 rounded-[100%] flex justify-center items-center'>
                  <MessageOutlined style={{color:"white", fontSize:"20px"}} />
                </div>
                <p className='text-[18px] font-semibold'>Write To US</p>
              </div>
              <p className='text-[#666] text-sm'>Fill out our form and we will contact you within 24 hours.</p>
              <p className='font-medium text-sm'>Emails: customer@exclusive.com</p>
              <p className='font-medium text-sm'>Emails: support@exclusive.com</p>
            </div>

            <div className='bg-[white] shadow-2xl border-[2px] border-[white] p-6 rounded-2xl flex flex-col gap-[20px] w-full'>
              <div className='flex flex-col gap-[20px]'>
                <Input 
                  placeholder='Your Name' 
                  style={{
                    height: "50px", 
                    width: "100%",
                    fontSize: "16px",
                    padding: "12px"
                  }} 
                />
                <Input 
                  placeholder='Your Email' 
                  style={{
                    height: "50px", 
                    width: "100%",
                    fontSize: "16px",
                    padding: "12px"
                  }} 
                />
                <Input 
                  placeholder='Your Phone' 
                  style={{
                    height: "50px", 
                    width: "100%",
                    fontSize: "16px",
                    padding: "12px"
                  }} 
                />
              </div>
              <TextArea 
                placeholder='Your Message...' 
                style={{
                  height: "150px", 
                  fontSize: "16px",
                  padding: "12px",
                  resize: "none"
                }} 
              />
              <div className='flex justify-end'>
                <BtnRed text="Send Message"/>
              </div>
            </div>
          </section>
    </main>
      </div>
    </>
  )
}

export default Contact