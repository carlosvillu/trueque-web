import React from 'react'

const Header = () => {
  return (
      <div>
          <section className='ui top borderless inverted blue menu ' id='topMenu'>
              <div className='ui grid three columns centered container'>
                  <div className='column' id='siteTitle'>
                      <a href='#'><h1>Trueke</h1></a>
                  </div>
                  <div className='center aligned column ' id='searchBar'>
                      <div className='ui category search'>
                          <div className='ui icon input'>
                              <input className='prompt' placeholder='Buscar anuncios...' type='text' />
                              <i className='search icon'></i>
                          </div>
                          <div className='results'></div>
                      </div>
                  </div>
                  <div className='right aligned column' id='addOneAdd'>
                      <div className='ui button icon red'>
                          <i className='add icon'></i> <span className='buttonText'>Nuevo Anuncio</span>
                      </div>
                  </div>
              </div>
          </section>

          <section className='anuncio anuncio_home'>
              <p>
                  Conseguí lo que quieras sin dinero.
                  <br />
                  ¡Buscalo ahora! y <u>ofrecé otro a cambio</u>
              </p>
          </section>
      </div>
  )
}

export default Header
