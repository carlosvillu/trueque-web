import React from 'react'

class Header extends React.Component {

  constructor () {
    super()
    this.state = {query: null}
  }

  render () {
      return (
          <div>
              <section className='ui top borderless menu clearfix ' id='topMenu'>
                  <div className='ui grid three columns centered container'>
                      <div className='left aligned column ' id='search'>
                          <div className='ui button icon blue searchButton'
                               onClick={this.handleClickSearch.bind(this)}>
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

              <div className='container searchModal' ref='searchModal'>
                  <span className='buttonClose icon3d searchButton'
                        onClick={this.handleClickSearch.bind(this)}></span>
                  <div className='center aligned column searchBar'>
                      <form className='searchForm' onSubmit={this.handleSubmitSearch.bind(this)}>
                          <input className='searchInput'
                                 ref='searchInput'
                                 type='text'
                                 name='search'
                                 placeholder='Escribe aquí'
                                 value={this.state.query}
                                 onChange={this.handleChangeSearch.bind(this)}/>
                      </form>
                  </div>
              </div>
          </div>
      )
  }

  handleClickSearch () {
      $(this.refs.searchModal).toggle(300)
  }

  handleChangeSearch (evt) {
    const {value} = evt.target
    this.setState({query: value});
  }

  handleSubmitSearch (evt) {
    evt.preventDefault()
    this.handleClickSearch()
    this.props.onChangeSearch(this.refs.searchInput.value)
  }
}

export default Header
