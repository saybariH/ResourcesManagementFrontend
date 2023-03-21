import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
export type SidePanelSimpleItemProps = {
    id:number,
    nom :string,
    href : string ,
    icon :ReactNode
}


function SidePanelSimpleItem({id,nom,href,icon}:SidePanelSimpleItemProps) {
    const currentRoute = useRouter()
    // const [togglePages, setTogglePages] = useState(false)


  return (
            <li className="nav-item" key={id}>
                {/*<!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->*/}
                <Link
                  className={
                    currentRoute.pathname === href
                      ? 'nav-link  active'
                      : 'nav-link '
                  }
                  href={href}
                >
                  <span className="nav-icon">
                     {icon}
                  </span>
                  <span className="nav-link-text">{nom}</span>
                </Link>
              </li>
  )
}

export default SidePanelSimpleItem