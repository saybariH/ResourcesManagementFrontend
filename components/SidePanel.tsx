import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import SidePanelSimpleItem from './SidePanelSimpleItem'
import SidePanelSubMenuItem from './SidePanelSubMenuItem'

export type SidePanelProps = {
  sidePanelVisibility:string,
  setSidePanelVisibility :(status:any) => void
}
export const sidePanelMenu= {
  All : [
      {
        id:1,
        nom : 'Acceuil',
        href:  '/',
        icon : <>
                <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-house-door"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                    />
                  </svg>
                  </>
  },
  {
    id:2,
    nom : 'Docs',
    href:  '/docs',
    icon : <>
      <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-folder"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.828 4a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 6.173 2H2.5a1 1 0 0 0-1 .981L1.546 4h-1L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3v1z" />
                      <path
                        fillRule="evenodd"
                        d="M13.81 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zM2.19 3A2 2 0 0 0 .198 5.181l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3H2.19z"
                      />
                    </svg>
    </>
  },
  {
    id:3,
    nom : 'Table',
    href : '/table',
    icon : <>
          <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-card-list"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"
                      />
                      <circle cx="3.5" cy="5.5" r=".5" />
                      <circle cx="3.5" cy="8" r=".5" />
                      <circle cx="3.5" cy="10.5" r=".5" />
                    </svg>
    </>
  },
  {
    id:4,
    nom : 'Pages',
    subLink : ['/notification','/','/'],
    subMenu : ['Notification','Account','Setting'],
    icon : <>
            <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-files"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4z"
                      />
                      <path d="M6 0h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1H4a2 2 0 0 1 2-2z" />
                </svg>
    </>

  },
  {
    id:5,
    nom : 'Gestion Des Utilisateur',
    href : '/gestionUtilisateur',
    icon : <>
          <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-card-list"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
                      />
                      <circle cx="3.5" cy="5.5" r=".5" />
                      <circle cx="3.5" cy="8" r=".5" />
                      <circle cx="3.5" cy="10.5" r=".5" />
                    </svg>
    </>
  }
],
}


function SidePanel({sidePanelVisibility,setSidePanelVisibility}:SidePanelProps) {
  const currentRoute = useRouter()
  const [togglePages, setTogglePages] = useState(false)

    const sidePanelSetup = sidePanelMenu['All'].map((item)=>{
        if(item.subLink){
          return  <SidePanelSubMenuItem id={item.id} nom={item.nom} subLink={item.subLink} subMenu={item.subMenu} icon={item.icon} key={item.id}  />
          
        }
        else{
          return  <SidePanelSimpleItem  id={item.id} nom={item.nom} href={item.href} icon={item.icon} key={item.id} />
          
        }

    })
  

  return (
    <>
      <div id="app-sidepanel"  className={sidePanelVisibility} >
        <div id="sidepanel-drop" className="sidepanel-drop"></div>
        <div className="sidepanel-inner d-flex flex-column">
          <a
            id="sidepanel-close"
            className="sidepanel-close d-xl-none "
            style={{cursor:'pointer'}}
            onClick={()=>setSidePanelVisibility((state:string) => state === "app-sidepanel sidepanel-hiden" ? "app-sidepanel sidepanel-visible" : "app-sidepanel sidepanel-hiden" )}
          >
            &times;
          </a>
          <div className="app-branding">
            <Link className="app-logo text-decoration-none" href="/">
              <Image width={100} height={100} className="logo-icon me-2" src="/app-logo.svg" alt="logo" />
              <span className="logo-text">PORTAL</span>
            </Link>
          </div>
          {/*<!--//app-branding-->*/}

          <nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">
            <ul
              className="app-menu list-unstyled accordion"
              id="menu-accordion"
            >
              {sidePanelSetup}
            
            </ul>
            {/*<!--//app-menu-->*/}
          </nav>
          {/*<!--//app-nav-->*/}
          <div className="app-sidepanel-footer">
            <nav className="app-nav app-nav-footer">
              <ul className="app-menu footer-menu list-unstyled">
                <li className="nav-item">
                  {/*<!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->*/}
                  <Link
                    className={
                      currentRoute.pathname === '/profile'
                        ? 'nav-link  active'
                        : 'nav-link '
                    }
                    href="/profile"
                  >
                    <span className="nav-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-gear"
                        fill="currentColor"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                      </svg>
                    </span>
                    <span className="nav-link-text">Account</span>
                  </Link>
                  {/*<!--//nav-link-->*/}
                </li>
                <li className="nav-item">
                  {/*<!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->*/}
                  <Link className="nav-link" href="/">
                    <span className="nav-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-gear"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                        />
                      </svg>
                    </span>
                    <span className="nav-link-text">Log Out</span>
                  </Link>
                  {/*<!--//nav-link-->*/}
                </li>
                {/*<!--//nav-item-->*/}

                {/*<!--//nav-item-->*/}
              </ul>
              {/*<!--//footer-menu-->*/}
            </nav>
          </div>
          {/*<!--//app-sidepanel-footer-->*/}
        </div>
        {/*<!--//sidepanel-inner-->*/}
      </div>
      {/*<!--//app-sidepanel-->*/}
    </>
  )
}

export default SidePanel
