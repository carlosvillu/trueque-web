import React from 'react'

const OffertForm = ({}) => (
  <form className='ui reply form'>
    <h2 className='header'>Ofertar</h2>
      <div className='field'>
        <input type='text' name='name' placeholder='Nombre' />
      </div>
      <div className='field'>
          <textarea></textarea>
          <div className='countCharacters'>
              123
          </div>
      </div>
      <input type='file' name='addPhoto' id='addPhoto' value='' />
      <label htmlFor='addPhoto'>Arrastra una foto o haz click aquí</label>

      <div className='ui blue labeled submit icon button'>
        <i className='icon send'></i> Enviar
      </div>
  </form>
)

export default OffertForm


