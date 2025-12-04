import { Checkbox, Input, Radio } from 'antd'
import React, { useEffect } from 'react'
import '../index.css'
import img1 from '../images/mini (1).svg'
import img2 from '../images/mini (2).svg'
import img3 from '../images/cart.svg'
import BtnRed from '../components/btnRed'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../reducers/cart/cart'



const Check = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);

  
  useEffect(() => {
    dispatch(getCart())
  },[dispatch])

  const TotalPrice = useSelector((state) => state.cart.TotalPrice);

  const data = cartState?.data|| []
  console.log(data,"cart");


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
        <div className='flex flex-col items-start gap-[20px]'>
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

        <div className='flex flex-col gap-[7px] w-140'>
          {
            data.length > 0 && data?.[0].productsInCart?.map((item) => (
              <div key={item?.id}>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-[10px]'>
                    <img className='w-25 h-20' src={`http://37.27.29.18:8002/images/${item.product.image}`} alt="" />
                    <span>{item?.product?.productName}</span>
                  </div>
                  <p>${item?.product?.price * item.quantity}</p>
                </div>
              </div>
            ))
          }
          <br />
          <div className='flex items-center justify-between'>
            <p>Subtotal:</p>
            <span>${TotalPrice}</span>
          </div>
          <div className='flex items-center justify-between'>
            <p>Shipping:</p>
            <span className='text-[green]'>Free</span>
          </div>
          <div className='border w-full border-[#adadad]'></div>
          <div className='flex items-center justify-between'>
            <p className='text-[20px] font-bold'>Total:</p>
            <span className='text-[20px] font-bold'>${TotalPrice}</span>
          </div><br />
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-[5px]'>
              <Radio/>
              <p>Bank</p>
            </div>
            <img src={img3} alt="" />
          </div>
          <div>
            <Radio/>
            <span>Cash on delivery</span>
          </div><br />
          <div className='bg-[white] rounded-[5px] shadow-2xl p-4 flex  justify-between'>
            <Input placeholder='Coupon Code' style={{width:"250px"}} />
            <button className='p-2 border-2 w-40 rounded-[10px] text-[#DB4444] border-[#DB4444]'>Apply</button>
          </div>
          <div>
            <BtnRed text="Place Order" />
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

        <div className='flex flex-col gap-[7px] w-full'>
          {
            data.length > 0 && data?.[0].productsInCart?.map((item) => (
              <div key={item?.id}>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-[10px]'>
                    <img className='w-20 h-15' src={`http://37.27.29.18:8002/images/${item.product.image}`} alt="" />
                    <span>{item?.product?.productName}</span>
                  </div>
                  <p>${item?.product?.price * item.quantity}</p>
                </div>
              </div>
            ))
          }
          <br />
          <div className='flex items-center justify-between'>
            <p>Subtotal:</p>
            <span>${TotalPrice}</span>
          </div>
          <div className='flex items-center justify-between'>
            <p>Shipping:</p>
            <span className='text-[green]'>Free</span>
          </div>
          <div className='border w-full border-[#adadad]'></div>
          <div className='flex items-center justify-between'>
            <p className='text-[20px] font-bold'>Total:</p>
            <span className='text-[20px] font-bold'>${TotalPrice}</span>
          </div><br />
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-[5px]'>
              <Radio/>
              <p>Bank</p>
            </div>
            <img src={img3} alt="" />
          </div>
          <div>
            <Radio/>
            <span>Cash on delivery</span>
          </div><br />
          <div className='bg-[white] rounded-[5px] shadow-2xl p-4 flex gap-[10px] justify-between'>
            <Input placeholder='Coupon Code' style={{width:"250px"}} />
            <button className='p-2 border-2 w-30 rounded-[10px] text-[#DB4444] border-[#DB4444]'>Apply</button>
          </div>
          <div>
            <BtnRed text="Place Order" />
          </div>
        </div>
      </section>
    </main>
     </div>
    </>
  )
}

export default Check