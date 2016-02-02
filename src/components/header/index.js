import React from 'react'
import AppBar from 'react-toolbox/lib/app_bar'

const Header = (props, context) => {
  return (
    <AppBar fixed flat>
      <a href='./home'>React Toolbox Docs</a>
    </AppBar>
  )
}

export default Header

