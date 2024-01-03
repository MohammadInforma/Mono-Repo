import React from 'react'

const Button = (props) => {
  return (
    <button {...props} style={{background: "red", color: 'white'}}>{props?.children}</button>
  )
}

export default Button;