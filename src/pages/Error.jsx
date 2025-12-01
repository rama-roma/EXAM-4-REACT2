import React from 'react'
import BtnRed from '../components/btnRed'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <main>
      <section className='mt-10 mb-10 flex flex-col items-center gap-[30px]'>
        <h1 className='text-[130px]'>404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p><br />
        <Link to='/home'>
          <BtnRed text="Back to home page"/>
        </Link>
      </section>
    </main>
  )
}

export default Error