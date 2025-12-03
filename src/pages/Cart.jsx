import React, { useEffect } from 'react'
import { Button, Input } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import BtnRed from '../components/btnRed'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart, getCart, deleteAll, increase, reduce } from '../reducers/cart/cart'

const Cart = () => {
  const dispatch = useDispatch()
  const cartState = useSelector((state) => state.cart)

  useEffect(() => {
    dispatch(getCart())
  }, [dispatch])

  const TotalPrice = useSelector((state)=>state.cart.TotalPrice)

  const data = cartState?.data|| []
  console.log(data,"cart");
  

  return (
    <>
    <div className='hidden md:block'>
      <main>
        <div className='mt-10 flex items-center gap-[10px]'>
          <p className='text-[grey]'>Home</p>
          <p className='text-[grey]'>/</p>
          <p>Cart</p>
        </div>

        { (
          <>
            <section className='mt-10'>
              <div className='border rounded-[5px] overflow-hidden'>
                <div className='grid grid-cols-5 bg-gray-100 p-4 font-bold'>
                  <div className='text-center'>Product</div>
                  <div className='text-center'>Price</div>
                  <div className='text-center'>Quantity</div>
                  <div className='text-center'>Subtotal</div>
                  <div className='text-center'>Action</div>
                </div>

                {data.length > 0 && data?.[0].productsInCart?.map((item) => (
                  <div key={item?.id} className='grid grid-cols-5 p-4 border-t items-center'>
                    <div className='flex items-center gap-4'>
                      <div className='w-20 h-20 bg-gray-100 rounded flex items-center justify-center'>
                          <img  className="w-full h-full object-contain p-2" src={`http://37.27.29.18:8002/images/${item.product.image}`} alt="" />
                      </div>
                      <span className='font-medium'>{item.product?.productName}</span>
                    </div>

                    <div className='text-center'>${item?.product?.price}</div>

                    <div className='flex items-center gap-[10px] ml-25'>
                      <button className="border-2 rounded-[2px] text-[#DB4444] w-5 h-5 flex items-center justify-center" onClick={()=>dispatch(reduce(item.id))}>-</button>
                      <span>{item?.quantity}</span>
                      <button className="border-1 rounded-[2px] bg-[#DB4444] text-[white] p-2 w-5 h-5 flex items-center justify-center" onClick={()=>dispatch(increase(item.id))}>+</button>
                    </div>

                    <div className='text-center'>${item?.product?.price * item?.quantity}</div>

                    <div className='text-center'>
                      <Button
                        type="text"
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => {dispatch(deleteCart({productId:item?.id,dispatch}))}}
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
                <button className='p-3 pr-12 pl-12 border border-[#DB4444] text-[#DB4444] rounded-[5px] text-[16px]' onClick={() => dispatch(deleteAll())}>Remove all</button>
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
                  <p className='font-medium text-[18px]'>${TotalPrice}</p>
                </div>
                <div className='flex justify-between items-center'>
                  <p className='text-[18px]'>Shipping:</p>
                  <p className='font-medium text-green-600 text-[18px]'>Free</p>
                </div>
                <div className='border w-full border-[#cac8c8]'></div>
                <div className='flex justify-between items-center'>
                  <p className='font-bold text-[20px]'>Total:</p>
                  <p className='font-bold text-[20px]'>${TotalPrice}</p>
                </div>
                <div className='mt-5 flex justify-center'>
                  <Link to='/check'>
                    <BtnRed text="Proceed to checkout"/>
                  </Link>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </div>

   <div className='block md:hidden'>
  <main className='p-4'>
    <div className='mt-6 flex items-center gap-[8px] text-sm'>
      <p className='text-[grey]'>Home</p>
      <p className='text-[grey]'>/</p>
      <p>Cart</p>
    </div>

    {data.length > 0 ? (
      <>
        <section className='mt-6'>
          <h1 className='text-xl font-bold mb-4'>Your Cart ({data?.[0]?.productsInCart?.length || 0} items)</h1>
          
          {data?.[0]?.productsInCart?.map((item) => (
            <div key={item?.id} className='border rounded-lg p-4 mb-4 bg-white shadow-sm'>
              <div className='flex gap-3'>
                <div className='w-20 h-20 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center'>
                  <img 
                    className="w-full h-full object-contain p-2" 
                    src={`http://37.27.29.18:8002/images/${item.product.image}`} 
                    alt={item.product?.productName} 
                  />
                </div>
                
                <div className='flex-1'>
                  <div className='flex justify-between items-start'>
                    <div>
                      <h3 className='font-medium text-base line-clamp-2'>{item.product?.productName}</h3>
                      <p className='text-[#DB4444] font-semibold text-lg mt-1'>${item?.product?.price}</p>
                    </div>
                    <Button
                      type="text"
                      danger
                      size="small"
                      icon={<DeleteOutlined />}
                      onClick={() => {dispatch(deleteCart({productId:item?.id,dispatch}))}}
                    />
                  </div>
                  
                  <div className='flex items-center justify-between mt-3'>
                    <div className='flex items-center gap-3'>
                      <button 
                        className="border-2 rounded-md text-[#DB4444] w-8 h-8 flex items-center justify-center"
                        onClick={()=>dispatch(reduce(item.id))}
                      >
                        -
                      </button>
                      <span className='font-medium text-lg'>{item?.quantity}</span>
                      <button 
                        className="border-1 rounded-md bg-[#DB4444] text-white w-8 h-8 flex items-center justify-center"
                        onClick={()=>dispatch(increase(item.id))}
                      >
                        +
                      </button>
                    </div>
                    <div className='text-right'>
                      <p className='text-gray-600 text-sm'>Subtotal</p>
                      <p className='font-bold text-lg'>${item?.product?.price * item?.quantity}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className='mt-6'>
          <div className='flex gap-3 mb-4'>
            <button 
              className='flex-1 p-3 border rounded-lg text-center text-[16px]'
              onClick={() => dispatch(deleteAll())}
            >
              Remove All
            </button>
            <Link to="/" className='flex-1'>
              <button className='w-full p-3 border rounded-lg text-center text-[16px]'>
                Continue Shopping
              </button>
            </Link>
          </div>
        </section>

        <section className='mt-6 bg-white rounded-lg border p-4 shadow-sm'>
          <h2 className='text-lg font-bold mb-4'>Coupon Code</h2>
          <div className='flex gap-2'>
            <Input 
              placeholder='Enter coupon code' 
              style={{height:"45px", fontSize: "16px", flex: 1}}
            />
            <button className='p-3 px-4 border border-[#DB4444] text-[#DB4444] rounded-lg text-[16px] whitespace-nowrap'>
              Apply
            </button>
          </div>
        </section>

        <section className='mt-6 bg-white rounded-lg border p-4 shadow-sm mb-20'>
          <h1 className='text-xl font-bold mb-4'>Cart Total</h1>
          
          <div className='space-y-3'>
            <div className='flex justify-between items-center'>
              <p className='text-gray-600'>Subtotal:</p>
              <p className='font-semibold'>${TotalPrice}</p>
            </div>
            
            <div className='flex justify-between items-center'>
              <p className='text-gray-600'>Shipping:</p>
              <p className='font-semibold text-green-600'>Free</p>
            </div>
            
            <div className='border-t border-gray-300 my-3'></div>
            
            <div className='flex justify-between items-center'>
              <p className='font-bold text-lg'>Total:</p>
              <p className='font-bold text-lg text-[#DB4444]'>${TotalPrice}</p>
            </div>
          </div>
          
          <div className='mt-6'>
            <Link to='/check' className='block'>
              <button className='w-full bg-[#DB4444] text-white py-3 rounded-lg font-semibold text-lg'>
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </section>
      </>
    ) : (
      <div className='mt-10 text-center'>
        <div className='text-gray-400 text-6xl mb-4'>🛒</div>
        <h2 className='text-xl font-semibold mb-2'>Your cart is empty</h2>
        <p className='text-gray-600 mb-6'>Add some products to get started</p>
        <Link to="/">
          <button className='bg-[#DB4444] text-white py-3 px-6 rounded-lg font-semibold'>
            Start Shopping
          </button>
        </Link>
      </div>
    )}
  </main>
   </div>
    </>
  )
}

export default Cart