import React from 'react'
import LogoSvg from "../../../assets/images/Logo.svg"
import { Link } from 'react-router-dom'
const Logo = () => {
  return (
    <figure>
        <Link to="/"><img src={LogoSvg} alt="Logo" /></Link>

    </figure>
  )
}

export default Logo