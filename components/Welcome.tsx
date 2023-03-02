import React from 'react'

function Welcome() {
  return (
    <>
      <div
        className="app-card alert alert-dismissible shadow-sm mb-4 border-left-decoration"
        role="alert"
      >
        <div className="inner">
          <div className="app-card-body p-3 p-lg-4">
            <h3 className="mb-3">Welcome, Manager!</h3>
            <div className="row gx-5 gy-3">
              <div className="col-12 col-lg-9">
                <div>This is a massege for you</div>
              </div>
            </div>
            {/*<!--//app-card-body-->*/}
          </div>
          {/*<!--//inner-->*/}
        </div>
        {/*<!--//app-card-->*/}
      </div>
    </>
  )
}

export default Welcome
