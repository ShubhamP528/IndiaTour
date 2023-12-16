import React, { useState } from 'react'
import Cards from './Cards'
import data from './Data'

function IndianTour() {
    const [tours, setTours]=useState(data)

    const removeTour=(id)=>{
        const newTours=tours.filter(tour=>tour.id!=id)
        setTours(newTours)
    }

    if (tours.length===0){
        return (
            <div className='w-[100vw] h-[100vh] flex justify-center'>
                <div className='flex flex-col justify-center gap-7 w-fit'>
                    <div>
                        <h1 className=' text-center font-bold text-2xl'>No Tour Left</h1>
                    </div>
                    <div className='flex justify-center'>
                        <button className=' bg-gray-200 w-[100%] py-2 text-sm font-semibold' onClick={()=>setTours(data)}>Refresh</button>
                    </div>
                </div>
                
            </div>
        )
    }

  return (
    <div className="w-[80vw] mx-auto flex flex-col justify-center gap-10 mt-8">
        <div className=' flex justify-center'>
            <h1 className='w-fit font-extrabold text-[5rem] text-center border-dotted border-8 border-sky-500 rounded-2xl px-6 '>Indian Tourisums</h1>
        </div>
        <Cards tours={tours} removeTour={removeTour}/>
    </div>
  )
}

export default IndianTour