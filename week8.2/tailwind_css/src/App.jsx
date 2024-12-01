// import { useState } from 'react'
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {
  return (
    <div className='grid grid-cols-3 p-4'>
      {/* vanilla css */}
      {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ backgroundColor: 'red' }}>RED</div>
        <div style={{ backgroundColor: 'blue' }}>BLUE</div>
        <div style={{ backgroundColor: 'green' }}>GREEN</div>
      </div>

      <div className='flex justify-center'>
        <div className='bg-red-200'>RED</div>
        <div className='bg-blue-200'>BLUE</div>
        <div className='bg-green-200'>GREEN</div>
      </div>
      
      <div className='grid grid-cols-10'>
        <div className='bg-red-200 col-span-4'>RED</div>
        <div className='bg-blue-200 col-span-4'>BLUE</div>
        <div className='bg-green-200 col-span-2'>GREEN</div>
      </div>

      <div className='bg-orange-500'>ALL</div>
      <div className='bg-orange-500 sm:bg-amber-500'>SM</div>
      <div className='bg-orange-500 md:bg-yellow-500'>MD</div>
      <br />
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='bg-red-200'>RED</div>
        <div className='bg-blue-200'>BLUE</div>
        <div className='bg-green-200'>GREEN</div>
      </div> */}
      <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={13}></RevenueCard>
    </div>
  )
}

export default App
