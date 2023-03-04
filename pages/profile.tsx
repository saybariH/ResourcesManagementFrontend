import ProfileDetails from '@/components/ProfileDetails'
import ProfileSecurity from '@/components/ProfileSecurity'
import React from 'react'

function profile() {
  return (
    <>
      <div className="app-wrapper mt-5">
        <div className="app-content pt-3 p-md-3 p-lg-4">
          <div className="container-xl">
            <h1 className="app-page-title">My Account</h1>
            <div className="row gy-4">
              <ProfileDetails />
              {/*<!--//col-->*/}
              <ProfileSecurity />
              {/*<!--//col-->*/}
            </div>
            {/*<!--//row-->*/}
          </div>
          {/*<!--//container-fluid-->*/}
        </div>
        {/*<!--//app-content-->*/}
      </div>
      {/*<!--//app-wrapper-->*/}
    </>
  )
}

export default profile
