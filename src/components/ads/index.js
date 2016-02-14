import React from 'react'
import ReactDOM from 'react-dom'
import PreviewAd from '../ad/preview'
import ContentAd from '../ad/content'

const Grid3D = window.grid3D

export default class Ads extends React.Component {

  static get propTypes () {
    return {
      grid: React.PropTypes.array
    }
  }

  componentDidMount () {
    this.grid3DComponent = new Grid3D(ReactDOM.findDOMNode(this))
  }

  render () {
    const {grid} = this.props
    return (
      <section className='grid3d vertical container' id='grid3d'>
         <div className='grid-wrap ui container'>
             <div className='grid'>
              {grid.map((ad, key) => (<PreviewAd key={key} {...ad}/>))}
            </div>
        </div>
        <div className='content'>
          {grid.map((ad, key) => (<ContentAd key={key} {...ad}/>))}
          <span className='loading'></span>
          <span className='icon3d close-content'></span>
        </div>
      </section>
    )
  }
}

