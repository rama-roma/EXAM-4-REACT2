import { Input } from 'antd'
import React, { useEffect, useState } from 'react'
import BtnRed from '../components/btnRed'
import { useDispatch, useSelector } from 'react-redux'
import { accountUser } from '../reducers/auth/auth'

const Account = () => {

  const { userData } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(accountUser());
  },[dispatch]);
 
  const [userName, setUserName] = useState(userData?.userName);
  const [firstName, setFirstName] = useState(userData?.firstName);
  const [lastName, setLastName] = useState(userData?.lastName);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(userData,"user");

  useEffect(()=> {
    setUserName(userData?.userName)
    setFirstName(userData?.firstName)
    setLastName(userData?.lastName)
    setEmail(userData?.email)
    setPhoneNumber(userData?.phoneNumber)
  },[userData]);
  

  return (
    <>
      <div className='hidden md:block'>
    <main>
      <div className='mt-10 flex items-center gap-[10px]'>
        <p className='text-[grey]'>Home</p>
        <p className='text-[grey]'>/</p>
        <p>Account</p>
      </div>

      <section className='mt-20 mb-20 flex justify-between items-start'>
        <div>
          <h1 className='text-[20px] font-bold'>Manage My Account</h1><br />
          <div className='flex flex-col gap-[10px] ml-10'>
            <p className='text-[#DB4444]'>My Profile</p>
            <p className='text-[grey]'>Address Book</p>
            <p className='text-[grey]'>My Payment Options</p>
          </div>
          <br /><br />
          <h1 className='text-[20px] font-bold'>My Orders</h1><br />
          <div className='flex flex-col gap-[10px] ml-10'>
            <p className='text-[grey]'>My Returns</p>
            <p className='text-[grey]'>My Cancellations</p>
          </div>
          <br /><br />
          <h1 className='text-[20px] font-bold'>My WishList</h1>
        </div>

    
        <div key={userData?.userId} className='bg-[white] rounded-2xl pl-10 pr-10 shadow-2xl p-4 flex flex-col gap-[20px]'>
          <h1 className='text-[25px] text-[#DB4444] font-bold'>Profile</h1>
          <div className='flex gap-[20px]'>
            <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='First name' style={{height:"50px", width:"450px"}} />
            <Input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Last name' style={{height:"50px", width:"450px"}} /> 
          </div>
          <div className='flex gap-[20px]'>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' style={{height:"50px", width:"450px"}} />
            <Input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Phone Number' style={{height:"50px", width:"450px"}} /> 
          </div>
          <div className='flex justify-center'>
            <Input  value={userName}  onChange={(e) => setUserName(e.target.value)} placeholder='User Name' style={{height:"50px", width:"450px"}} /> 
          </div>
          <br /><br />
          <h1 className='text-[25px] font-bold'>Password Changes</h1>
          <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Current passwod' style={{height:"50px"}} />
          <div className='flex gap-[20px]'>
            <Input placeholder='New passwod' style={{height:"50px", width:"450px"}} />
            <Input placeholder='Confirm new passwod' style={{height:"50px", width:"450px"}} /> 
          </div><br />
          <div className='mb-10 flex items-center gap-[30px] justify-end'>
            <button>Cancel</button>
            <BtnRed text="Save Changes" />
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
        <p>Account</p>
      </div>

      <section className='mt-10 mb-10 flex flex-col gap-[30px]'>
        <div>
          <div className='border-b border-[#f0f0f0] pb-4 mb-4'>
            <h1 className='text-[18px] font-bold'>Manage My Account</h1>
            <div className='flex flex-col gap-[12px] mt-3 ml-10'>
              <p className='text-[#DB4444] font-medium'>My Profile</p>
              <p className='text-[grey]'>Address Book</p>
              <p className='text-[grey]'>My Payment Options</p>
            </div>
          </div>

          <div className='border-b border-[#f0f0f0] pb-4 mb-4'>
            <h1 className='text-[18px] font-bold'>My Orders</h1>
            <div className='flex flex-col gap-[12px] mt-3 ml-10'>
              <p className='text-[grey]'>My Returns</p>
              <p className='text-[grey]'>My Cancellations</p>
            </div>
          </div>

          <div>
            <h1 className='text-[18px] font-bold'>My WishList</h1>
          </div>
        </div>

        <div className='bg-[white] rounded-2xl shadow-lg p-5 flex flex-col gap-[20px]'>
          <h1 className='text-[22px] text-[#DB4444] font-bold'>Profile</h1>
          
          <div className='flex flex-col gap-[15px]'>
            <div className='flex flex-col gap-[15px]'>
              <Input 
                placeholder='First name' 
                style={{
                  height: "50px", 
                  width: "100%",
                  fontSize: "14px"
                }} 
              />
              <Input 
                placeholder='Last name' 
                style={{
                  height: "50px", 
                  width: "100%",
                  fontSize: "14px"
                }} 
              />
            </div>
            
            <div className='flex flex-col gap-[15px]'>
              <Input 
                placeholder='Email address' 
                style={{
                  height: "50px", 
                  width: "100%",
                  fontSize: "14px"
                }} 
              />
              <Input 
                placeholder='Street address' 
                style={{
                  height: "50px", 
                  width: "100%",
                  fontSize: "14px"
                }} 
              />
            </div>
          </div>

          <div className='mt-4'>
            <h1 className='text-[22px] font-bold mb-4'>Password Changes</h1>
            <div className='flex flex-col gap-[15px]'>
              <Input 
                placeholder='Current password' 
                style={{
                  height: "50px", 
                  width: "100%",
                  fontSize: "14px"
                }} 
              />
              <Input 
                placeholder='New password' 
                style={{
                  height: "50px", 
                  width: "100%",
                  fontSize: "14px"
                }} 
              />
              <Input 
                placeholder='Confirm new password' 
                style={{
                  height: "50px", 
                  width: "100%",
                  fontSize: "14px"
                }} 
              />
            </div>
          </div>

          <div className='mt-6 flex flex-col gap-[15px] '> 
            <BtnRed text="Save Changes" />
            <button className='p-3 border border-[#666] text-[#666] rounded-[5px] text-center flex-1 font-medium'>
              Cancel
            </button>
          </div>
        </div>
      </section>
    </main>
      </div>
    </>
  )
}

export default Account