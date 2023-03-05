import OneNotification from '@/components/OneNotification'
import Image from 'next/image'
import React from 'react'

function notification() {

    

  return (
    <>
      <div className="app-wrapper mt-5">
        <div className="app-content pt-3 p-md-3 p-lg-4">
          <div className="container-xl">
            <div className="position-relative mb-3">
              <div className="row g-3 justify-content-between">
                <div className="col-auto">
                  <h1 className="app-page-title mb-0">Notifications</h1>
                </div>
                <div className="col-auto">
                  <div className="page-utilities">
                    <select className="form-select form-select-sm w-auto">
                      <option  value="DEFAULT">
                        All
                      </option>
                      <option value="option-2">News</option>
                      <option value="option-3">Product</option>
                      <option value="option-4">Project</option>
                      <option value="option-4">Billing</option>
                    </select>
                  </div>
                  {/*<!--//page-utilities-->*/}
                </div>
              </div>
            </div>

           
            {/*<!--//app-card-->*/}

            <OneNotification  type="Billing" />
            <OneNotification  type="Project" />
            <OneNotification  type="News" />
            <OneNotification  type="Product" />
            {/*<!--//app-card-->*/}

            
          </div>
          {/*<!--//container-fluid-->*/}
        </div>
        {/*<!--//app-content-->*/}
      </div>
      {/*<!--//app-wrapper-->*/}
    </>
  )
}

export default notification
