import React from 'react'
import './Header.css'
import muuviheader from '../../images/muuviheader.jpg'
export default function Header() {
  return (
    <div id="image_container">
        <img src={muuviheader} alt="header" className="header"/>
    </div>
  )
}
