import React from 'react'
import OffertContent from '../offert/content'
import OffertForm from '../offert/form'

const ContentAd = ({text, offerts, url}) => (
  <div className='singleAddContainer '>
    <img src={url} alt={text} />
    <h2 className='header'>Descripción del producto</h2>
    <p className='description'>{text}</p>
    <div className='divider'></div>
    <div id='offerts'>
      <div className='ui comments'>
        {offerts.map((offert, key) => <OffertContent key={key} {...offert} />) }
        <OffertForm />
      </div>
    </div>
  </div>
)

export default ContentAd

