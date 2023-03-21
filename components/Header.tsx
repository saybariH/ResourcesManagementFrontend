import React, { useState } from 'react'
import Navbar from './Navbar'
import SidePanel from './SidePanel'

function Header() {
  const [sidePanelVisibility,setSidePanelVisibility] = useState("app-sidepanel sidepanel-hiden")

  return (
    <>
      <header className="app-header fixed-top">
        <Navbar sidePanelVisibility={sidePanelVisibility} setSidePanelVisibility={setSidePanelVisibility} />
        <SidePanel sidePanelVisibility={sidePanelVisibility} setSidePanelVisibility={setSidePanelVisibility} />
      </header>
    </>
  )
}

export default Header
