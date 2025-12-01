import React from 'react'
import { Table, Button, InputNumber, Input } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import img1 from '../images/mini (1).svg'
import img2 from '../images/mini (2).svg'
import BtnRed from '../components/btnRed'
import { Link } from 'react-router'

const Cart = () => {
  const columns = [
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
      render: (text, record) => (
        <div className='flex items-center gap-4'>
          <div className='w-16 h-16 bg-gray-200 rounded'>
            <img src={record.image} alt={text} className="w-full h-full object-cover" />
          </div>
          <span>{text}</span>
        </div>
      )
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `$${price}`
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (quantity) => (
        <InputNumber 
          min={1} 
          max={99} 
          defaultValue={quantity} 
          style={{ width: 80 }}
        />
      )
    },
    {
      title: 'Subtotal',
      dataIndex: 'subtotal',
      key: 'subtotal',
      render: (subtotal) => `$${subtotal}`
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Button 
          type="text" 
          danger 
          icon={<DeleteOutlined />}
        />
      )
    }
  ]

  const data = [
    {
      key: '1',
      product: 'LCD Monitor',
      price: 650,
      quantity: 1,
      subtotal: 650,
      image: img1
    },
    {
      key: '2',
      product: 'Hi Gamepad',
      price: 550,
      quantity: 2,
      subtotal: 1100,
      image: img2
    }
  ]

  return (
    <>
    <div className='hidden md:block'>
    <main>
      <div className='mt-10 flex items-center gap-[10px]'>
        <p className='text-[grey]'>Home</p>
        <p className='text-[grey]'>/</p>
        <p>Cart</p>
      </div>

      <section className='mt-20 flex flex-col justify-between items-center gap-[10px]'>
        <Table 
          columns={columns} 
          dataSource={data} 
          pagination={false}
          style={{ width: '100%' }}
        />
      </section>

      <section className='flex items-center mt-10 justify-between'>
        <button className='p-2 pr-10 pl-10 border rounded-[5px]'>Return To Shop</button>
        <div className='flex items-center gap-[20px]'>
          <button className='p-2 pr-10 pl-10 border rounded-[5px]'>Update Cart</button>
          <button className='p-2 pr-10 pl-10 border border-[#DB4444] text-[#DB4444] rounded-[5px]'>Remove all</button>
        </div>
      </section>

      <section className='flex mb-30 items-start mt-10 justify-between'>
        <div className='flex items-center gap-[20px]'>
          <Input placeholder='Coupon Code' style={{height:"45px", width:"300px"}}/>
          <button className='p-2 pr-10 pl-10 border border-[#DB4444] text-[#DB4444] rounded-[5px]'>Apply</button>
        </div>
        <div className='rounded-[5px] border p-4 flex flex-col w-100 gap-[10px]'>
          <h1 className='text-[20px]'>Cart Total</h1>
          <div className='flex justify-between items-center'>
            <p>Subtotal:</p>
            <p>$1750</p>
          </div>
          <div className='flex justify-between items-center'>
            <p>Shipping:</p>
            <p>Free</p>
          </div><br />
          <div className='border w-full border-[#cac8c8]'></div><br />
          <div className='flex justify-between items-center'>
            <p className='font-bold'>Total:</p>
            <p className='font-bold'>$1750</p>
          </div>
          <div className='mt-5 flex justify-center'>
            <Link to='/check'>
              <BtnRed text="Procees to checkout"/>
            </Link>
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
        <p>Cart</p>
      </div>

      <section className='mt-6 border rounded-[5px] p-4'>
        <div className='flex items-center gap-[15px]'>
          <img src={img1} alt="LCD Monitor" className='w-20 h-20 object-cover rounded' />
          <div className='flex-1'>
            <h3 className='font-semibold text-[16px]'>LCD Monitor</h3>
            <div className='flex items-center gap-[10px] mt-2'>
              <p className='text-[#DB4444] font-bold'>$650</p>
              <div className='flex items-center gap-[5px]'>
                <button className='w-6 h-6 flex items-center justify-center border rounded text-[12px]'>-</button>
                <span className='text-[14px]'>1</span>
                <button className='w-6 h-6 flex items-center justify-center border rounded text-[12px]'>+</button>
              </div>
            </div>
          </div>
          <p className='font-bold text-[16px]'>$650</p>
        </div>
      </section>

      <section className='mt-4 border rounded-[5px] p-4'>
        <div className='flex items-center gap-[15px]'>
          <img src={img2} alt="Hi Gamepad" className='w-20 h-20 object-cover rounded' />
          <div className='flex-1'>
            <h3 className='font-semibold text-[16px]'>Hi Gamepad</h3>
            <div className='flex items-center gap-[10px] mt-2'>
              <p className='text-[#DB4444] font-bold'>$550</p>
              <div className='flex items-center gap-[5px]'>
                <button className='w-6 h-6 flex items-center justify-center border rounded text-[12px]'>-</button>
                <span className='text-[14px]'>2</span>
                <button className='w-6 h-6 flex items-center justify-center border rounded text-[12px]'>+</button>
              </div>
            </div>
          </div>
          <p className='font-bold text-[16px]'>$1100</p>
        </div>
      </section>

      <section className='flex flex-col mt-6 gap-[15px]'>
        <button className='p-3 border border-[#DB4444] text-[#DB4444] rounded-[5px] text-center w-full font-medium'>
          Return To Shop
        </button>
        <div className='flex gap-[10px]'>
          <button className='p-3 border rounded-[5px] text-center flex-1 font-medium'>
            Update Cart
          </button>
          <button className='p-3 border border-[#DB4444] text-[#DB4444] rounded-[5px] text-center flex-1 font-medium'>
            Remove all
          </button>
        </div>
      </section>

      <section className='flex flex-col mb-20 mt-6 gap-[20px]'>
        <div className='flex flex-col gap-[15px]'>
          <h2 className='text-[18px] font-semibold'>Coupon Code</h2>
          <div className='flex gap-[10px]'>
            <Input 
              placeholder='Enter coupon code' 
              style={{
                height: "45px", 
                width: "100%",
                fontSize: "14px"
              }}
            />
            <button className='p-3 border border-[#DB4444] text-[#DB4444] rounded-[5px] whitespace-nowrap px-6 font-medium'>
              Apply
            </button>
          </div>
        </div>

        <div className='rounded-[5px] border p-6 flex flex-col gap-[15px] w-full'>
          <h1 className='text-[20px] font-semibold'>Cart Total</h1>
          <div className='flex justify-between items-center'>
            <p className='text-[#666]'>Subtotal:</p>
            <p className='font-medium'>$1750</p>
          </div>
          <div className='flex justify-between items-center'>
            <p className='text-[#666]'>Shipping:</p>
            <p className='font-medium text-[#00FF66]'>Free</p>
          </div>
          <div className='border w-full border-[#e5e5e5] my-2'></div>
          <div className='flex justify-between items-center'>
            <p className='font-bold text-[18px]'>Total:</p>
            <p className='font-bold text-[18px]'>$1750</p>
          </div>
          <div className='mt-4 flex justify-center'>
            <Link to='/check' className='w-full'>
              <BtnRed text="Proceed to checkout" className='w-full justify-center'/>
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