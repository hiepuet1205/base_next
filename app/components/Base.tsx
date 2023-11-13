import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Base = props => {
  return (
    <div>
        <Header></Header>
        {props.children}
        <Footer></Footer>
    </div>
  )
}

export default Base