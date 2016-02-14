import React from 'react'
import cx from 'classnames'

export default class OffertContent extends React.Component {
  static get propTypes () {
    return {
      text: React.PropTypes.string,
      name: React.PropTypes.string,
      url: React.PropTypes.string,
      author: React.PropTypes.bool
    }
  }

  static get defaultProps () {
    return {
      text: 'Este anuncio no tiene texto',
      name: 'Anónimo',
      url: 'http://placehold.it/200x200',
      author: false
    }
  }

  constructor (props, context) {
    super(props, context)
    this.state = {isExpanded: false}
  }


  render () {
    const {text, name, url, author} = this.props
    const offertClass = cx('comment', {
      author: author
    })
    const imgClass = cx('imageComment', {
      'is-expanded': this.state.isExpanded
    })
    return (
      <div className={offertClass}>
          <span className='author'>{name}</span>
          <div className='metadata'>
              <span className='date'>Hoy a las 5:42PM</span>
          </div>
          <div className={imgClass} onClick={this.handleClickImg.bind(this)}>
              <img src='http://placehold.it/600x600' alt='lorem' className='ui fluid image' />
          </div>
          <div className='text'>{text}</div>
      </div>
    )
  }
  
  handleClickImg () {
    this.setState({
      isExpanded: !this.state.isExpanded
      
    })
  }

}

export default OffertContent

