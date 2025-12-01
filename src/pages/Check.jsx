import { Checkbox, Input, Radio } from 'antd'
import React from 'react'
import '../index.css'
import img1 from '../images/mini (1).svg'
import img2 from '../images/mini (2).svg'
import img3 from '../images/cart.svg'
import BtnRed from '../components/btnRed'

const Check = () => {
  return (
    <>
     <div className='hidden md:block'>
    <main>
      <div className='mt-10 flex items-center gap-[10px]'>
        <p className='text-[grey]'>Product</p>
        <p className='text-[grey]'>/</p>
        <p className='text-[grey]'>View Cart</p>
        <p className='text-[grey]'>/</p>
        <p>CheckOut</p>
      </div>

      <section className='mt-20 flex items-center justify-center gap-[390px] mb-20'>
        <div className='flex flex-col items-start gap-[10px]'>
          <h1 className='text-[30px]'>Billing Details</h1>
          <div className='bg-[white] border border-[#dbdada] shadow-2xl rounded-[10px] p-4 pt-10 pb-10 pl-5 pr-5 flex flex-col items-center gap-[10px]'>
            <Input placeholder='First name' style={{width:"450px", height:"50px"}}/>
            <Input placeholder='Last name' style={{width:"450px", height:"50px"}}/>
            <Input placeholder='Street address' style={{width:"450px", height:"50px"}}/>
            <Input placeholder='Apartment, floor, etc. (optional)' style={{width:"450px", height:"50px"}}/>
            <Input placeholder='Town/City' style={{width:"450px", height:"50px"}}/>
            <Input placeholder='Phone number' style={{width:"450px", height:"50px"}}/>
            <Input placeholder='Email address' style={{width:"450px", height:"50px"}}/>
            <div className='flex justify-start ml-[-110px] items-center gap-[10px]'>
              <Checkbox  className="custom-checkbox" />
              <p className='text-[12px]'>Save this information for faster check-out next time</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-[10px] w-100'>
          <div className='flex items-center justify-between'>
            <div className='flex gap-[5px] items-center'>
              <img src={img1} alt="" />
              <p>LCD Monitor</p>
            </div>
            <p>$650</p>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex gap-[5px] items-center'>
              <img src={img2} alt="" />
              <p>H1 Gamepad</p>
            </div>
            <p>$1100</p>
          </div><br />
          <div className='flex items-center justify-between'>
            <p>Subtotal:</p>
            <p>$1750</p>
          </div>
          <div className='flex items-center justify-between'>
            <p>Shipping:</p>
            <p>Free</p>
          </div><br />
          <div className='border w-full border-[#c9c8c8]'></div><br />
          <div className='flex items-center justify-between'>
            <p className='font-bold'>Total:</p>
            <p className='font-bold'>$1750</p>
          </div><br />
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-[5px]'>
              <Radio/>
              <p>Bank</p>
            </div>
            <img src={img3} alt="" />
          </div>
          <div className='flex items-center gap-[5px]'>
            <Radio/>
            <p>Cash on delivery</p>
          </div><br />
        <div className='flex items-center gap-[20px]'>
          <Input placeholder='Coupon Code' style={{height:"45px", width:"300px"}}/>
          <button className='p-2 pr-10 pl-10 border border-[#DB4444] text-[#DB4444] rounded-[5px]'>Apply</button>
        </div><br />
        <div>
          <BtnRed text="Place Order"/>
        </div>
        </div>
      </section>
    </main>
     </div>


     <div className='block md:hidden'>
    <main>
      <div className='mt-6 flex items-center gap-[10px] flex-wrap'>
        <p className='text-[grey] text-sm'>Product</p>
        <p className='text-[grey] text-sm'>/</p>
        <p className='text-[grey] text-sm'>View Cart</p>
        <p className='text-[grey] text-sm'>/</p>
        <p className='text-sm'>CheckOut</p>
      </div>

      <section className='mt-6 flex flex-col gap-[30px] mb-10'>
        <div className='flex flex-col items-start gap-[15px] w-full'>
          <h1 className='text-[24px] font-semibold'>Billing Details</h1>
          <div className='bg-[white] border border-[#dbdada] shadow-lg rounded-[10px] p-5 flex flex-col items-center gap-[15px] w-full'>
            <Input placeholder='First name' style={{width: "100%", height: "50px"}}/>
            <Input placeholder='Last name' style={{width: "100%", height: "50px"}}/>
            <Input placeholder='Street address' style={{width: "100%", height: "50px"}}/>
            <Input placeholder='Apartment, floor, etc. (optional)' style={{width: "100%", height: "50px"}}/>
            <Input placeholder='Town/City' style={{width: "100%", height: "50px"}}/>
            <Input placeholder='Phone number' style={{width: "100%", height: "50px"}}/>
            <Input placeholder='Email address' style={{width: "100%", height: "50px"}}/>
            <div className='flex justify-start items-center gap-[10px] w-full'>
              <Checkbox className="custom-checkbox" />
              <p className='text-[12px] text-[#666]'>Save this information for faster check-out next time</p>
            </div>
          </div>
        </div>


        <div className='flex flex-col gap-[15px] w-full'>
          <h2 className='text-[20px] font-semibold'>Order Summary</h2>
          <div className='bg-[white] border border-[#dbdada] shadow-lg rounded-[10px] p-5'>
            <div className='flex items-center justify-between pb-3 border-b border-[#f0f0f0]'>
              <div className='flex gap-[10px] items-center'>
                <img src={img1} alt="LCD Monitor" className='w-12 h-12 object-cover rounded' />
                <p className='text-[14px] font-medium'>LCD Monitor</p>
              </div>
              <p className='font-semibold'>$650</p>
            </div>
            
            <div className='flex items-center justify-between pt-3 pb-3 border-b border-[#f0f0f0]'>
              <div className='flex gap-[10px] items-center'>
                <img src={img2} alt="H1 Gamepad" className='w-12 h-12 object-cover rounded' />
                <p className='text-[14px] font-medium'>H1 Gamepad</p>
              </div>
              <p className='font-semibold'>$1100</p>
            </div>

            <div className='pt-3 space-y-2'>
              <div className='flex items-center justify-between'>
                <p className='text-[#666]'>Subtotal:</p>
                <p className='font-medium'>$1750</p>
              </div>
              <div className='flex items-center justify-between'>
                <p className='text-[#666]'>Shipping:</p>
                <p className='font-medium text-[#00FF66]'>Free</p>
              </div>
              <div className='border-t border-[#e5e5e5] my-3'></div>
              <div className='flex items-center justify-between'>
                <p className='font-bold text-[16px]'>Total:</p>
                <p className='font-bold text-[16px]'>$1750</p>
              </div>
            </div>

            <div className='mt-4 space-y-3'>
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-[10px]'>
                  <Radio/>
                  <p className='text-[14px]'>Bank</p>
                </div>
                <img src={img3} alt="Bank" className='w-40' />
              </div>
              <div className='flex items-center gap-[10px]'>
                <Radio/>
                <p className='text-[14px]'>Cash on delivery</p>
              </div>
            </div>

            {/* Coupon */}
            <div className='mt-4 flex flex-col gap-[10px]'>
              <div className='flex gap-[10px]'>
                <Input 
                  placeholder='Coupon Code' 
                  style={{
                    height: "45px", 
                    width: "100%",
                    fontSize: "14px"
                  }}
                />
                <button className='p-3 border border-[#DB4444] text-[#DB4444] rounded-[5px] whitespace-nowrap px-4 text-[14px] font-medium'>
                  Apply
                </button>
              </div>
            </div>

            {/* Place Order Button */}
            <div className='mt-6'>
              <BtnRed text="Place Order" className='w-full justify-center'/>
            </div>
          </div>
        </div>
      </section>
    </main>
     </div>
    </>
  )
}

export default Check