import React from 'react'

const Button = ({children,color,...props}) => {
  return (
    <button {...props}  className='btn'>{children}</button>
  )
}

export default Button