import Footer from '@/components/Footer'
import Link from 'next/link'
import React from 'react'

function PageNotFound() {
  return (
    <>
      <div className="app app-404-page" /*style={{backgroundColor:'#f5f6fe'}}*/>
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-md-11 col-lg-7 col-xl-6 mx-auto">
              <div className="app-branding text-center mb-5 ">
                <Link className="app-logo text-decoration-none" href="index.html">
                  <img
                    className="logo-icon me-2"
                    src="/app-logo.svg"
                    alt="logo"
                  />
                  <span className="logo-text ">PORTAL</span>
                </Link>
              </div>
              {/*<!--//app-branding-->*/}
              <div className="app-card p-5 text-center shadow-sm ">
                <h1 className="page-title mb-4">
                  404
                  <br />
                  <span className="font-weight-light">Page Not Found</span>
                </h1>
                <div className="mb-4">
                  Sorry, we can't find the page you're looking for.
                </div>
                <Link
                  className="btn app-btn-primary border border-dark"
                  href="/"
                >
                  Go to home page
                </Link>
              </div>
            </div>
            {/*<!--//col-->*/}
          </div>
          {/*<!--//row-->*/}
        </div>
        {/*<!--//container-->*/}

        <Footer />
      </div>
    </>
  )
}

export default PageNotFound
