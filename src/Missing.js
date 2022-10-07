import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <div>
      <p>There is nothing Here!</p>
      <p>Pleace comeback <Link id="link" style={{color:"red"}} to="/">Home Page</Link> </p>
    </div>
  )
}

export default Missing