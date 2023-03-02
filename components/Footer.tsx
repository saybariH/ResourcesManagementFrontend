import React from 'react'

function Footer() {
  return (
    <>
      <footer className="app-footer">
        <div className="container text-center py-3">
          {/* {/*<!--/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) */}
          <small className="copyright">
            Designed with <span className="sr-only">love</span>
            <i
              className="fas fa-heart"
              style={{ color: '#fb866a' }}
            ></i> by{' '}
            <a
              className="app-link"
              href="http://themes.3rdwavemedia.com"
              target="_blank"
            >
              Manager
            </a>{' '}
            for PSG
          </small>
        </div>
      </footer>
      {/*<!--//app-footer-->*/}
    </>
  )
}

export default Footer
