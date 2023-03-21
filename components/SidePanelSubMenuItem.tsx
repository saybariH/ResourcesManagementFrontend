import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { ReactNode, useEffect, useState } from 'react'


export type SidePanelSubMenuItemProps = {
    id:number
    nom : string,
    subLink : string[],
    subMenu : string[],
    icon : ReactNode
}

function SidePanelSubMenuItem({id,nom,subLink,subMenu,icon}:SidePanelSubMenuItemProps) {
    const currentRoute = useRouter()
    const [togglePages, setTogglePages] = useState(false)



  return (
        <li className="nav-item has-submenu" key={id}>
                {/*<!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->*/}
                <Link
                  className={
                    subLink.includes(currentRoute.pathname)
                      ? 'nav-link submenu-toggle active'
                      : 'nav-link submenu-toggle'
                  }
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#submenu-1"
                  aria-expanded={togglePages}
                  aria-controls="submenu-1"
                  onClick={() => setTogglePages((state) => !state)}
                >
                  <span className="nav-icon">
                    {/*<!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->*/}
                    {icon}
                  </span>
                  <span className="nav-link-text">{nom}</span>
                  <span className="submenu-arrow">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-chevron-down"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </span>
                  {/*<!--//submenu-arrow-->*/}
                </Link>
                {/*<!--//nav-link-->*/}
                <div
                  id="submenu-1 collapse show"
                  className="collapse submenu submenu-1"
                  data-bs-parent="#menu-accordion"
                  style={togglePages ? { display: 'block' } : {}}
                >
                  <ul className="submenu-list list-unstyled">
                    {
                        subLink.map((item,index)=>
                            
                                <li className="submenu-item " key={index}>
                                    <Link
                                        // className="submenu-link text-decoration-none"
                                        className={
                                        currentRoute.pathname === item
                                            ? 'submenu-link text-decoration-none active'
                                            : 'submenu-link text-decoration-none'
                                        }
                                        href={item}
                                    >
                                        {subMenu[index]}
                                    </Link>
                                </li>   
                            
                        )
                    }
                  </ul>
                </div>
              </li>
  )
}

export default SidePanelSubMenuItem