import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProfileDetails() {
  return (
    <>
      <div className="col-12 col-lg-6">
        <div className="app-card app-card-account shadow-sm d-flex flex-column align-items-start">
          <div className="app-card-header p-3 border-bottom-0">
            <div className="row align-items-center gx-3">
              <div className="col-auto">
                <div className="app-icon-holder">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-person"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                    />
                  </svg>
                </div>
                {/*<!--//icon-holder-->*/}
              </div>
              {/*<!--//col-->*/}
              <div className="col-auto">
                <h4 className="app-card-title">Profile</h4>
              </div>
              {/*<!--//col-->*/}
            </div>
            {/*<!--//row-->*/}
          </div>
          {/*<!--//app-card-header-->*/}
          <div className="app-card-body px-4 w-100">
            <div className="item border-bottom py-3">
              <div className="row justify-content-between align-items-center">
                <div className="col-auto">
                  <div className="item-label mb-2">
                    <strong>Photo</strong>
                  </div>
                  <div className="item-data">
                    <Image
                      className="profile-image"
                      src="/users/user.png"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                {/*<!--//col-->*/}
                <div className="col text-end">
                  <Link className="btn-sm app-btn-secondary" href="#">
                    Change
                  </Link>
                </div>
                {/*<!--//col-->*/}
              </div>
              {/*<!--//row-->*/}
            </div>
            {/*<!--//item-->*/}
            <div className="item border-bottom py-3">
              <div className="row justify-content-between align-items-center">
                <div className="col-auto">
                  <div className="item-label">
                    <strong>Name</strong>
                  </div>
                  <div className="item-data">James Doe</div>
                </div>
                {/*<!--//col-->*/}
                <div className="col text-end">
                  <Link className="btn-sm app-btn-secondary" href="#">
                    Change
                  </Link>
                </div>
                {/*<!--//col-->*/}
              </div>
              {/*<!--//row-->*/}
            </div>
            {/*<!--//item-->*/}
            <div className="item border-bottom py-3">
              <div className="row justify-content-between align-items-center">
                <div className="col-auto">
                  <div className="item-label">
                    <strong>Email</strong>
                  </div>
                  <div className="item-data">james.doe@website.com</div>
                </div>
                {/*<!--//col-->*/}
                <div className="col text-end">
                  <Link className="btn-sm app-btn-secondary" href="#">
                    Change
                  </Link>
                </div>
                {/*<!--//col-->*/}
              </div>
              {/*<!--//row-->*/}
            </div>
            {/*<!--//item-->*/}
            <div className="item border-bottom py-3">
              <div className="row justify-content-between align-items-center">
                <div className="col-auto">
                  <div className="item-label">
                    <strong>Website</strong>
                  </div>
                  <div className="item-data">https://johndoewebsite.com</div>
                </div>
                {/*<!--//col-->*/}
                <div className="col text-end">
                  <Link className="btn-sm app-btn-secondary" href="#">
                    Change
                  </Link>
                </div>
                {/*<!--//col-->*/}
              </div>
              {/*<!--//row-->*/}
            </div>
            {/*<!--//item-->*/}
            <div className="item border-bottom py-3">
              <div className="row justify-content-between align-items-center">
                <div className="col-auto">
                  <div className="item-label">
                    <strong>Location</strong>
                  </div>
                  <div className="item-data">New York</div>
                </div>
                {/*<!--//col-->*/}
                <div className="col text-end">
                  <Link className="btn-sm app-btn-secondary" href="#">
                    Change
                  </Link>
                </div>
                {/*<!--//col-->*/}
              </div>
              {/*<!--//row-->*/}
            </div>
            {/*<!--//item-->*/}
          </div>
          {/*<!--//app-card-body-->*/}
          <div className="app-card-footer p-4 mt-auto">
            <Link className="btn app-btn-secondary border" href="#">
              Manage Profile
            </Link>
          </div>
          {/*<!--//app-card-footer-->*/}
        </div>
        {/*<!--//app-card-->*/}
      </div>
    </>
  )
}

export default ProfileDetails
