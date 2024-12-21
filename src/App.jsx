
import React, { useState } from 'react'

const App = () => {
  const [color, setcolor] = useState('bg-zinc-800');
  const handlechangecolor = (newcolor) =>{
    setcolor(newcolor)
  }
  return (
   <div className={`w-full min-h-screen ${color}`}>
    <input type='color'/>
    <div className='absolute bottom-12 translate-x-[25rem] bg-white w-1/2 flex items-center justify-around p-1 py-2 rounded-3xl'>
      <div onClick={()=>{
        handlechangecolor('bg-red-600')
      }} className='bg-red-600 px-6 rounded-3xl py-2 font-bold text-white cursor-pointer'>Red</div>
      <div onClick={()=>{
        handlechangecolor('bg-green-600')
      }} className='bg-green-600 px-6 rounded-3xl py-2 font-bold text-white cursor-pointer'>Green</div>
      <div onClick={()=>{
        handlechangecolor('bg-yellow-600')
      }} className='bg-yellow-600 px-6 rounded-3xl py-2 font-bold text-white cursor-pointer'>Yellow</div>
      <div onClick={()=>{
        handlechangecolor('bg-gray-600')
      }} className='bg-gray-600 px-6 rounded-3xl py-2 font-bold text-white cursor-pointer'>Gray</div>
      <div onClick={()=>{
        handlechangecolor('bg-black')
      }} className='bg-black px-6 rounded-3xl py-2 font-bold text-white cursor-pointer'>Black</div>
      <div onClick={()=>{
        handlechangecolor('bg-purple-600')
      }} className='bg-purple-600 px-6 rounded-3xl py-2 font-bold text-white cursor-pointer'>Purple</div>
    </div>
   </div>
  )
}

export default App