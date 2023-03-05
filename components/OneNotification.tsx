import Image from 'next/image'
import React, { useEffect } from 'react'


export type OneNotificationProps  = {
    type : 'Billing'|'Project'|'News'|'Product',
}

function OneNotification({type}:OneNotificationProps) {
    // const myImg =  <Image className="profile-image" src={image} alt="" width={100} height={100}/>
    const svgIcons  = {
        'Billing' : (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-receipt" fill="currentColor"><path fillRule="evenodd" d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"/><path fillRule="evenodd" d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/></svg>),
        'Project':(<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bar-chart-line" fill="currentColor"><path fillRule="evenodd" d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"/></svg>),
        'News':(<svg  xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" width="1em" viewBox="0 0 16 16" className="bi bi-bar-chart-line" > <path fillRule="evenodd" d="M20 17a1 1 0 01-2 0V5a1 1 0 00-1-1H3a1 1 0 00-1 1v13a2 2 0 002 2h15c1.654 0 3-1.346 3-3V7h-2v10zM12 7h3v2h-3V7zm0 4h3v2h-3v-2zM5 7h5v6H5V7zm0 10v-2h10v2H5z" /> </svg>),
        'Product' :(<svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em"  > <path d="M864 144H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm0 400H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zM464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm0 400H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16z" /> </svg>),
    }
                    



  return (
    <>
        <div className="app-card app-card-notification shadow-sm mb-4">
              <div className="app-card-header px-4 py-3">
                <div className="row g-3 align-items-center">
                  <div className="col-12 col-lg-auto text-center text-lg-start">
                    <div className="app-icon-holder">
                        {svgIcons[type]}
                    </div>
                  </div>
                  {/*<!--//col-->*/}
                  <div className="col-12 col-lg-auto text-center text-lg-start">
                    <div className="notification-type mb-2">
                      <span className="badge app-btn-primary">{type}</span>
                    </div>
                    <h4 className="notification-title mb-1">
                      Notification Heading Lorem Ipsum
                    </h4>

                    <ul className="notification-meta list-inline mb-0">
                      <li className="list-inline-item">2 hrs ago</li>
                      <li className="list-inline-item">|</li>
                      <li className="list-inline-item">Amy Doe</li>
                    </ul>
                  </div>
                  {/*<!--//col-->*/}
                </div>
                {/*<!--//row-->*/}
              </div>
              {/*<!--//app-card-header-->*/}
              <div className="app-card-body p-4">
                <div className="notification-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sed ultrices dolor, ac maximus ligula. Donec ex orci, mollis
                  ac purus vel, tempor pulvinar justo. Praesent nibh massa,
                  posuere non mollis vel, molestie non mauris. Aenean consequat
                  facilisis orci, sed sagittis mauris interdum at.
                </div>
              </div>
              {/*<!--//app-card-body-->*/}
              <div className="app-card-footer px-4 py-3">
                <a className="action-link" href="#">
                  View all
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-arrow-right ms-2"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </a>
              </div>
              {/*<!--//app-card-footer-->*/}
            </div>
    </>
  )
}

export default OneNotification