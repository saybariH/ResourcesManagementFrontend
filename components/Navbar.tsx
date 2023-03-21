import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Dropdown } from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { set } from 'react-hook-form'

export type NavBarProps = {
  sidePanelVisibility:string,
  setSidePanelVisibility :(status:any) => void
}

function Navbar({sidePanelVisibility,setSidePanelVisibility}:NavBarProps) {


  return (
    <>
      <div className="app-header-inner ">
        <div className="container-fluid ">
          <div className="app-header-content">
            <div className="row justify-content-between align-items-center">
              <div className="col-auto">
                <a
                  id="sidepanel-toggler"
                  className="sidepanel-toggler d-inline-block d-xl-none"
                  href="#"
                  onClick={()=> setSidePanelVisibility("app-sidepanel sidepanel-visible")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    role="img"
                  >
                    <title>Menu</title>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                      d="M4 7h22M4 15h22M4 23h22"
                    ></path>
                  </svg>
                </a>
              </div>
              {/*<!--//col-->*/}
              <div className="search-mobile-trigger d-sm-none col">
                <i className="search-mobile-trigger-icon fas fa-search"></i>
              </div>
              {/*<!--//col-->*/}
              
              {/*<!--//app-search-box-->*/}

              <div className="app-utilities col-auto">
                
                {/*<!--//app-utility-item-->*/}
                <Dropdown className="app-utility-item app-user-dropdown dropdown">
                  <Dropdown.Toggle
                    id="dropdown-basic user-dropdown-toggle"
                    className="dropdown-toggle border-0 bg-white"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-expanded="false"
                  >
                       <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-bell icon"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z" />
                      <path
                        fillRule="evenodd"
                        d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
                      />
                    </svg>
                    <span className="icon-badge">4</span>
                   
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Header className="dropdown-menu-header p-3">
                        <h5 className="dropdown-menu-title mb-0">
                          Notifications
                        </h5>
                    </Dropdown.Header>
                    <div className="dropdown-menu-content" >
                    <Dropdown.Item href="#/action-1" className="item p-3"  >
                    {/* <div className="item p-3"> */}
                        <div className="row gx-2 justify-content-between align-items-center">
                          <div className="col-auto">
                            <div className="app-icon-holder">
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 16 16"
                                className="bi bi-bar-chart-line"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"
                                />
                              </svg>
                            </div>
                          </div>
                          {/*<!--//col-->*/}
                          <div className="col">
                            <div className="info">
                              <div className="desc">
                                Your report is ready. Proin venenatis interdum
                                est.
                              </div>
                              <div className="meta"> 3 days ago</div>
                            </div>
                          </div>
                          {/*<!--//col-->*/}
                        </div>
                        {/*<!--//row-->*/}
                        <a className="link-mask" href="notifications.html"></a>
                      {/* </div> */}
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                     
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-3">
                      <div className="dropdown-menu-footer p-2 text-center">
                        <Link href="/notification">View all</Link>
                      </div>
                    </Dropdown.Item>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
                {/*<!--//app-utility-item-->*/}
                <Dropdown className="app-utility-item app-user-dropdown dropdown">
                  <Dropdown.Toggle
                    id="dropdown-basic user-dropdown-toggle"
                    className="dropdown-toggle border-0 bg-white"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-expanded="false"
                  >
                    <span
                      // className="dropdown-toggle"
                      id="user-dropdown-toggle"
                      // data-bs-toggle="dropdown"
                      role="button"
                      // aria-expanded="false"
                    >
                      <Image
                        width={100}
                        height={100}
                        src="/users/user.png"
                        alt="user profile"
                      />
                    </span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      <Link className="dropdown-item" href="/">
                        <i className="bi bi-person"></i> Account
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <Link className="dropdown-item" href="/profile">
                        <i className="bi bi-gear"></i> Settings
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-3">
                      <Link className="dropdown-item" href="/">
                        <i className="bi bi-box-arrow-left"></i> Log Out
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                {/*<!--//app-user-dropdown-->*/}
              </div>
              {/*<!--//app-utilities-->*/}
            </div>
            {/*<!--//row-->*/}
          </div>
          {/*<!--//app-header-content-->*/}
        </div>
        {/*<!--//container-fluid-->*/}
      </div>
      {/*<!--//app-header-inner-->*/}
    </>
  )
}

export default Navbar
