import React from 'react'
import './Component.css'
import {Link} from 'react-router-dom';

export default function Navigation() {
  return (
    <div class="navLink">
      <Link class="navLinkItem" to="home">Home</Link>
      <Link class="navLinkItem" to="about">About</Link>
      <Link class="navLinkItem" to="gallery">Gallery</Link>
      <Link class="navLinkItem" to="blogs">Blogs</Link>
      <Link class="navLinkItem" to="contacts">Contacts</Link>
    </div>
  )
}
