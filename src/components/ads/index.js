import React from 'react'
import Ad from '../ad'

const Ads = ({grid}) => {
  return (
    <div className='ui stackable grid container'>
    {
      grid.map((ad) => {
        return (
          <div className='eight wide tablet four wide computer column'>
            <Ad {...ad}/>
          </div>
        )
      })
    }
    </div>
  )
}

export default Ads
