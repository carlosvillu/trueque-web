import React from 'react'

const Ad = ({text, offerts, url}) => {
  return (
    <div className='ui link cards'>
        <div className='card'>
            <div className='image'>
                <img className='ui fluid image' src={url} alt='lorem' />
            </div>

            <div className='content'>
                <div className='description'>{text}</div>
            </div>

            <div className='extra content'>
                <a href='#'><span className='right floated'><i className='share icon'></i> </span></a>
                <a href='#'><span><i className='comments icon'></i> {offerts} ofertas </span></a>
            </div>
        </div>
    </div>
  )
}

export default Ad
