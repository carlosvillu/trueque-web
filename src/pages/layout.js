import React from 'react'

import Header from '../components/header'
import Ads from '../components/ads'

const Layout = () => {
  return (
    <div>
      <Header />
      <Ads grid={[
        {url: 'http://placehold.it/200x200', text: 'text de la primera card', offerts: Math.floor(Math.random() * 99) + 1},
        {url: 'http://placehold.it/200x200', text: 'text de la segunda card', offerts: Math.floor(Math.random() * 99) + 1},
        {url: 'http://placehold.it/200x200', text: 'text de la tercera card', offerts: Math.floor(Math.random() * 99) + 1},
        {url: 'http://placehold.it/200x200', text: 'text de la cuarta card', offerts: Math.floor(Math.random() * 99) + 1},
        {url: 'http://placehold.it/200x200', text: 'text de la quinta card', offerts: Math.floor(Math.random() * 99) + 1},
        {url: 'http://placehold.it/200x200', text: 'text de la sexta card', offerts: Math.floor(Math.random() * 99) + 1}
      ]} />
    </div>
  )
}

export default Layout
