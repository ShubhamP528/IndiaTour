import React, { useState } from 'react'

function DesignedCounter() {

    const [count, setCount]=useState(0)

    const incrementHandler=()=>{
        setCount(prevCount=>prevCount+1)
    }

    const decrementHandler=()=>{
        setCount(prevCount=>prevCount-1)
    }

    const resetHandler=()=>{
        setCount(0)
    }

  return (
    <div className=" bg-gray-700 h-[100vh] w-[100vw] flex justify-center items-center">
        <div className="flex flex-col w-fit gap-5">
            <h1 className='text-center text-[2rem] text-blue-500 font-bold'>Counter</h1>
            <div className='flex gap-9 justify-center text-[1.5rem] bg-white w-[10rem]'>
                <button className=' font-bold border-r-2 pr-2 my-2' onClick={incrementHandler}>+</button>
                <div className="border-spacing-5 font-extrabold my-2">
                    {count}
                </div>
                <button className=' font-bold border-l-2 pl-2 my-2' onClick={decrementHandler}>-</button>
            </div>
            <div className="flex justify-center">
                <button className="bg-blue-400 w-fit py-1 px-2 text-white rounded-sm text-[1rem] font-bold" onClick={resetHandler}>Reset</button>
            </div>
        </div>
    </div>
  )
}

export default DesignedCounter