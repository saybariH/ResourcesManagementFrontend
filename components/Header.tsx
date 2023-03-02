import React, { useState } from 'react'
import Navbar from './Navbar'
import SidePanel from './SidePanel'

function Header() {
  // const [sideBarVisible,setSideBarVisible] = useState("app-sidepanel");

  return (
    <>
      <header className="app-header fixed-top">
        <Navbar />
        <SidePanel />
      </header>
    </>
  )
}

export default Header
