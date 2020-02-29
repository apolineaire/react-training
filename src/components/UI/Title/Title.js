import React from 'react'
import './Title.css'

const Title = ({ children }) => {
   return (
      <div className="title-container">
         <h1 className="title-text">{children}</h1>
      </div>
   )
}

export default Title
