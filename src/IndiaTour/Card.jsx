import React, { useState } from 'react'

function Card({id ,name, info, image, price, removeTour}) {

    const [toggle, setToggle]=useState(false)

    const description=toggle ? info : info.substring(0,200) 

  return (
    <div className=' w-[400px] flex flex-col border-spacing-4 p-4 shadow-2xl rounded-md gap-2 font-sans'>
        <img className=' w-[380px] aspect-square object-cover' src={image}/>
        <h4 className=' text-lime-700 font-extrabold text-2xl'> ₹ {price}</h4>
        <h1 className=' text-2xl font-extrabold'>{name}</h1>
        <p className=' text-lg font-medium'>
            {description} <span onClick={()=>setToggle(!toggle)}>{toggle ? `Show Less` : `Read More`}</span>
        </p>
        <div className=' flex justify-center'>
            <button className=' bg-red-200 w-fit px-6 py-2 rounded-lg hover:bg-red-600 font-bold hover:text-white' onClick={()=>removeTour(id)}>Not Intersted</button>
        </div>
    </div>
  )
}

export default Card