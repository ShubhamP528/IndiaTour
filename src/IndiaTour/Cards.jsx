import React from 'react'
import Card from './Card'

function Cards({tours, removeTour}) {
  return (
    <div className=' flex flex-wrap w-[80vw] justify-center gap-4'>
        {tours.map(tour=><Card key={tour.id} {...tour} removeTour={removeTour}/>)}
    </div>
  )
}

export default Cards