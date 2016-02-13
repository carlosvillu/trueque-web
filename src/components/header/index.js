import React from 'react'

const Header = () => {
  return (
      <section className='ui top borderless menu clearfix ' id='topMenu'>
          <div className='ui grid three columns centered container'>
              <div className='left aligned column ' id='search'>
                  <div className='ui button icon blue searchButton' >
                      <i className='search icon '></i> <span className='buttonText'>Buscar</span>
                  </div>
              </div>
              <div className='center aligned column' id='siteTitle'>
                  <a href='#'><h1>Trueke</h1></a>
              </div>
              <div className='right aligned column' id='addOneAdd'>
                  <div className='ui button icon blue adButton'>
                      <i className='add icon'></i> <span className='buttonText'>Nuevo Anuncio</span>
                  </div>
              </div>

          </div>
      </section>
  )
}

export default Header
