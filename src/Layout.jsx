import { Link, Outlet } from 'react-router-dom'
import img from './images/Group 1116606595.svg'
import { FacebookOutlined, HeartOutlined, InstagramOutlined, LinkedinOutlined, SearchOutlined, SendOutlined, ShoppingCartOutlined, TwitterOutlined, UserOutlined } from '@ant-design/icons'
import { Input, Popover } from 'antd'
import './index.css'
import { LogOut, Menu } from 'lucide-react'
import { removeToken } from './utils/api'

const Layout = () => {
  const content = (
    <div className='flex flex-col gap-[20px] w-30 '>
      <Link to="/account" className='flex items-center gap-[20px]'>
        <UserOutlined style={{fontSize:"20px"}} />
        Account
      </Link>
      <Link to="/wishlist" className='flex items-center gap-[20px]'>
        <HeartOutlined style={{fontSize:"20px"}} />
        Wishlist
      </Link>
      <Link className='flex items-center gap-[20px]'>
        <LogOut onClick={() => removeToken()} />
        Log Out
      </Link>
    </div>
  )

  const links = (
    <div className='w-30 flex flex-col gap-[10px] items-center'>
      <Link to="/home" >
        <li>Home</li>
      </Link>
      <Link to="/contact">
        <li>Contact</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
      <Link to="/signup">
        <li>Sign Up</li>
      </Link>
    </div>
  )
  return (
    <>
      <div className='hidden md:block'>
<header className='max-w-[1400px] m-auto p-4'>
        <nav className='flex justify-between items-center'>
            <div className='flex items-center gap-[170px]'>
                <img src={img} alt="" />
                <ul className='flex items-center gap-[30px]'>
                  <Link to="/home" >
                     <li>Home</li>
                  </Link>
                  <Link to="/contact">
                     <li>Contact</li>
                  </Link>
                  <Link to="/about">
                     <li>About</li>
                  </Link>
                  <Link to="/signup">
                     <li>Sign Up</li>
                  </Link>
                </ul>
            </div>
            <div className='flex items-center gap-[30px]'>
               <Input style={{width:"300px"}} placeholder="What are you looking for?" suffix={<SearchOutlined />} />
               <Link to="/wishlist">
                 <HeartOutlined style={{fontSize:"20px"}} />
               </Link>
                <Link to="/cart">
                  <ShoppingCartOutlined style={{ fontSize: "20px" }} />
                </Link>
               <Link to="/account">
                 <UserOutlined style={{fontSize:"20px"}} />
               </Link>
            </div>
        </nav>
      </header>


      <main className='max-w-[1400px] m-auto p-4'>
        <Outlet/>
      </main>


      <footer className='max-w-[1600px] m-auto bg-[#000000] p-10'>
         <section className='max-w-[1400px] m-auto text-[white] p-4'>
          <div className='flex justify-between items-start gap-[130px]'>
            <article className='flex flex-col gap-[10px] w-60'>
              <h1 className='text-[25px] font-bold'>Exclusive</h1>
              <p>Subscribe</p>
              <p>Get 10% off your first order</p><br />
              <Input  placeholder='Enter your email' suffix={<SendOutlined />} />
            </article>
            <article className='flex flex-col gap-[10px] w-60'>
              <h1 className='text-[25px] font-bold'>Support</h1>
              <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </article>
            <article className='flex flex-col gap-[10px] w-60'>
              <h1 className='text-[25px] font-bold'>Account</h1>
              <p>My Account</p>
              <p>Cart</p>
              <p>Wishlist</p>
              <p>Shop</p>
            </article>
            <article className='flex flex-col gap-[10px] w-60'>
              <h1 className='text-[25px] font-bold'>Quick Link</h1>
              <p>Privacy Policy</p>
              <p>Terms Of Use</p>
              <p>FAQ</p>
              <p>Contact</p>
            </article>
            <article className='flex flex-col gap-[10px] w-60'>
              <h1 className='text-[25px] font-bold'>Social </h1>
              <div className='flex items-center gap-[15px]'>
                 <FacebookOutlined style={{fontSize:"30px"}} />
                 <LinkedinOutlined style={{fontSize:"30px"}} />
                 <InstagramOutlined style={{fontSize:"30px"}} />
                 <TwitterOutlined style={{fontSize:"30px"}} />
              </div>
            </article>
          </div>
          <div className='relative top-[30px] text-center'>
            <p className='text-[grey] font-bold'>@Copyright Rimel 2022. All right reserved</p>
          </div>
         </section>
      </footer>
      </div>


      <div className='block md:hidden'>
        <header className='max-w-[370px] m-auto'>
          <nav className='mt-5 flex items-center justify-between'>
            <div className='flex items-center gap-[10px]'>
              <Popover content={links}>
                <Menu size={38} />
              </Popover>
              <p className='text-[30px] font-bold'>Exclusive</p>
            </div>
            <div className='flex items-center gap-[20px]'>
               <Link to="/cart">
                 <ShoppingCartOutlined style={{fontSize:"30px"}} />
               </Link>
               <Popover  content={content}>
                <UserOutlined style={{fontSize:"30px"}} />
               </Popover>
            </div>
          </nav>
        </header>

        <main className='max-w-[370px] m-auto'>
          <Outlet/>
        </main>

        <footer className='bg-[black] p-10 text-[white]'>
          <section className='max-w-[370px] m-auto'>
            <div className='flex flex-col gap-[20px]'>
              <p className='text-[30px] font-bold'>Exclusive</p>
              <p>Subscribe</p>
              <br />
              <p>Get 10% off your first order</p>
              <Input  placeholder='Enter your email' style={{padding:"10px"}} suffix={<SendOutlined />} />
              <br />
              <h1 className='text-[30px] font-bold'>Support</h1>
              <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div><br />
            <div className='flex items-start justify-center gap-[80px]'>
              <div className='flex flex-col items-start gap-[10px]'>
                <h1 className='text-[30px] font-bold'>Account</h1>
                <p>My Account</p>
                <p>Cart</p>
                <p>Wishlist</p>
                <p>Shop</p>
              </div>
              <div className='flex flex-col items-start gap-[10px]'>
                <h1 className='text-[30px] font-bold'>Quick Link</h1>
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
              </div>
            </div><br />
            <div>
              <h1 className='text-[30px] font-bold'>Social </h1>
              <div className='flex items-center gap-[20px]'>
                 <FacebookOutlined style={{fontSize:"30px"}} />
                 <LinkedinOutlined style={{fontSize:"30px"}} />
                 <InstagramOutlined style={{fontSize:"30px"}} />
                 <TwitterOutlined style={{fontSize:"30px"}} />
              </div>
            </div><br />
            <div className='flex justify-center  text-center'>
              <p className='text-[grey] w-50'>@Copyright Rimel 2022. All right reserved</p>
            </div>
          </section>
        </footer>
      </div>
    </>
  )
}

export default Layout