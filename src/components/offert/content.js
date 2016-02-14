import React from 'react'
import cx from 'classnames'

const OffertContent = ({text, name, url, author}) => {
  const offertClass = cx('comment', {
    author: author
  })

  return (
    <div className={offertClass}>
        <span className='author'>{name}</span>
        <div className='metadata'>
            <span className='date'>Hoy a las 5:42PM</span>
        </div>
        <div className='imageComment'>
            <img src='http://placehold.it/600x600' alt='lorem' className='ui fluid image' />
        </div>
        <div className='text'>{text}</div>
    </div>
  )
}

OffertContent.defaultProps = {
  text: 'Este anuncio no tiene texto',
  name: 'Anónimo',
  url: 'http://placehold.it/200x200',
  author: false
}

export default OffertContent

