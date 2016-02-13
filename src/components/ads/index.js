import React from 'react'
import Ad from '../ad'

const Ads = ({grid}) => {
  return (
      <section className='grid3d vertical container' id='grid3d'>
         <div className='grid-wrap ui container'>
             <div className='grid'>
    {
      grid.map((ad) => {
        return (
            <figure>
                <Ad {...ad}/>
            </figure>
        )
      })
    }
            </div>
        </div>
    </section>
  )
}

export default Ads
