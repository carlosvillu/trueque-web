import React from 'react'

import Header from '../components/header'
import Ads from '../components/ads'

const Layout = () => {
  return (
    <div>
      <Header />
      <Ads grid={[
        {url: 'http://placehold.it/200x200', text: 'text de la primera card', offerts: [{text: 'Oferta Uno', name: 'Nombre', author: true}, {}]},
        {url: 'http://placehold.it/200x200', text: 'text de la segunda card', offerts: [{text: 'Oferta Uno'}]},
        {url: 'http://placehold.it/200x200', text: 'text de la tercera card', offerts: [{text: 'Oferta Uno'}]},
        {url: 'http://placehold.it/200x200', text: 'text de la cuarta card', offerts: [{text: 'Oferta Uno'}]},
        {url: 'http://placehold.it/200x200', text: 'text de la quinta card', offerts: [{text: 'Oferta Uno'}]},
        {url: 'http://placehold.it/200x200', text: 'text de la sexta card', offerts: [{text: 'Oferta Uno'}]}
      ]} />
    </div>
  )
}

export default Layout
