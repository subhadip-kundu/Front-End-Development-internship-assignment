import React from 'react'

function Sidebar() {
  return (
    <aside className="sidebar">
    <ul>
      <li><a href="#home"><i className="fas fa-home"></i> Home</a></li>
      <li><a href="#services"><i className="fas fa-cogs"></i> Services</a></li>
      <li><a href="#about"><i className="fas fa-info-circle"></i> About</a></li>
      <li><a href="#contact"><i className="fas fa-envelope"></i> Contact</a></li>
    </ul>
  </aside>
  )
}

export default Sidebar;