import React from 'react'

import Header from '../components/header'
import Ads from '../components/ads'

class Layout extends React.Component {
  constructor () {
    super()
    this.state = { grid: [
      {url: 'http://placehold.it/200x200', text: 'text de la primera card', offerts: [{text: 'Oferta Uno', name: 'Nombre', author: true}, {}]},
      {url: 'http://placehold.it/200x200', text: 'text de la segunda card', offerts: [{text: 'Oferta Uno'}]},
      {url: 'http://placehold.it/200x200', text: 'text de la tercera card', offerts: [{text: 'Oferta Uno'}]},
      {url: 'http://placehold.it/200x200', text: 'text de la cuarta card', offerts: [{text: 'Oferta Uno'}]},
      {url: 'http://placehold.it/200x200', text: 'text de la quinta card', offerts: [{text: 'Oferta Uno'}]},
      {url: 'http://placehold.it/200x200', text: 'text de la sexta card', offerts: [{text: 'Oferta Uno'}]}
    ]}
  }

  render () {
    return (
      <div>
        <Header onChangeSearch={this.handleChangeSearch.bind(this)}/>
        <Ads grid={this.state.grid} />
      </div>
    )
  }

  otraFunciondeInstancia () {
    this.setState()
  }

  handleChangeSearch (query) {
    console.log('Layout', query)
  }

}

export default Layout
