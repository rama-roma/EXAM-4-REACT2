import React, { useEffect } from 'react'
import { Button, InputNumber, Input } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import BtnRed from '../components/btnRed'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart, getCart } from '../reducers/cart/cart'

const Cart = () => {
  const dispatch = useDispatch()
  const cartState = useSelector((state) => state.cart)

  useEffect(() => {
    dispatch(getCart())
  }, [dispatch])

  const data = cartState?.data || [];

  return (
    <>
      <div>
        <main>
          <div className='mt-10 flex items-center gap-[10px]'>
            <p className='text-[grey]'>Home</p>
            <p className='text-[grey]'>/</p>
            <p>Cart</p>
          </div>

          <section className='mt-10'>
            <div className='border rounded-[5px] overflow-hidden'>
  
              <div className='grid grid-cols-5 bg-gray-100 p-4 font-bold'>
                <div className='text-center'>Product</div>
                <div className='text-center'>Price</div>
                <div className='text-center'>Quantity</div>
                <div className='text-center'>Subtotal</div>
                <div className='text-center'>Action</div>
              </div>


              {data?.map((item) => (
                <div key={item?.id} className='grid grid-cols-5 p-4 border-t items-center'>
                  <div className='flex items-center gap-4'>
                    <div className='w-20 h-20 bg-gray-100 rounded flex items-center justify-center'>
                      <img 
                        src={`http://37.27.29.18:8002/images/${item?.image}`} 
                        alt={item?.productName} 
                        className="w-full h-full object-contain p-2" 
                      />
                    </div>
                    <span className='font-medium'>{item?.productName}</span>
                  </div>
                  
                  <div className='text-center'>${item?.price}</div>
                  
                  <div className='text-center'>
                    <InputNumber 
                      min={1} 
                      max={99} 
                      defaultValue={item?.quantity} 
                      style={{ width: 80 }}
                    />
                  </div>
                  
                  <div className='text-center'>${item?.price * item?.quantity}</div>
                  
                  <div className='text-center'>
                    <Button 
                      type="text" 
                      danger 
                      icon={<DeleteOutlined  />}
                      onClick={() => dispatch(deleteCart(item.id))}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className='flex items-center mt-10 justify-between'>
            <Link to="/">
              <button className='p-3 pr-12 pl-12 border rounded-[5px] text-[16px]'>Return To Shop</button>
            </Link>
            <div className='flex items-center gap-[20px]'>
              <button className='p-3 pr-12 pl-12 border rounded-[5px] text-[16px]'>Update Cart</button>
              <button className='p-3 pr-12 pl-12 border border-[#DB4444] text-[#DB4444] rounded-[5px] text-[16px]'>Remove all</button>
            </div>
          </section>

          <section className='flex mb-30 items-start mt-10 justify-between'>
            <div className='flex items-center gap-[20px]'>
              <Input placeholder='Coupon Code' style={{height:"50px", width:"350px", fontSize: "16px"}}/>
              <button className='p-3 pr-12 pl-12 border border-[#DB4444] text-[#DB4444] rounded-[5px] text-[16px]'>Apply</button>
            </div>
            <div className='rounded-[5px] border p-6 flex flex-col w-120 gap-6'>
              <h1 className='text-[24px] font-bold'>Cart Total</h1>
              <div className='flex justify-between items-center'>
                <p className='text-[18px]'>Subtotal:</p>
                <p className='font-medium text-[18px]'>$1750</p>
              </div>
              <div className='flex justify-between items-center'>
                <p className='text-[18px]'>Shipping:</p>
                <p className='font-medium text-green-600 text-[18px]'>Free</p>
              </div>
              <div className='border w-full border-[#cac8c8]'></div>
              <div className='flex justify-between items-center'>
                <p className='font-bold text-[20px]'>Total:</p>
                <p className='font-bold text-[20px]'>$1750</p>
              </div>
              <div className='mt-5 flex justify-center'>
                <Link to='/check'>
                  <BtnRed text="Proceed to checkout"/>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default Cart