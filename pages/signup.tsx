import { initRegister, registerType } from '@/code/Type';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form';

function signup() {

  const { register, handleSubmit, watch, formState: { errors },reset } = useForm<registerType>();
  const onSubmit = (data:registerType) => {
      console.log(data)
      reset(initRegister)
      
  };

  return (
    <>
      <div className="row g-0 app-auth-wrapper">
        <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
          <div className="d-flex flex-column align-content-end">
            <div className="app-auth-body mx-auto">
              <div className="app-auth-branding mb-4">
                <Link className="app-logo" href="/">
                  <Image
                    width={100}
                    height={100}
                    className="logo-icon me-2"
                    src="/app-logo.svg"
                    alt="logo"
                  />
                </Link>
              </div>
              <h2 className="auth-heading text-center mb-4">
                Sign up to Portal
              </h2>

              <div className="auth-form-container text-start mx-auto">
                <form className="auth-form auth-signup-form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="email mb-3">
                    <label className="sr-only" htmlFor="signup-email">
                      Firstname
                    </label>
                    <input
                      id="firstname"
                      type="text"
                      className="form-control signup-name"
                      defaultValue="" {...register("firstname")}
                      placeholder="Firstname"
                      required
                    />
                  </div>
                  <div className="email mb-3">
                    <label className="sr-only" htmlFor="signup-email">
                      Lastname
                    </label>
                    <input
                      id="first-name"
                      defaultValue=""
                      {...register("lastname")}
                      type="text"
                      className="form-control signup-name"
                      placeholder="Lastname"
                      required
                    />
                  </div>
                  <div className="email mb-3">
                    <label className="sr-only" htmlFor="signup-email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-control signup-email"
                      placeholder="Email"
                      defaultValue=""
                      {...register("email")}
                      required
                    />
                  </div>
                  <div className="password mb-3">
                    <label className="sr-only" htmlFor="signup-password">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      className="form-control signup-password"
                      placeholder="Create a password"
                      defaultValue="" 
                      {...register("password")}
                      required
                    />
                  </div>
                  <div className="extra mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="RememberPassword"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="RememberPassword"
                      >
                        I agree to Portal's{' '}
                        <a href="#" className="app-link">
                          Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="#" className="app-link">
                          Privacy Policy
                        </a>
                        .
                      </label>
                    </div>
                  </div>
                  {/*<!--//extra-->*/}

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn w-100 theme-btn mx-auto app-btn-primary "
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
                {/*<!--//auth-form-->*/}

                <div className="auth-option text-center pt-5">
                  Already have an account?{' '}
                  <a className="text-link" href="login.html">
                    Log in
                  </a>
                </div>
              </div>
              {/*<!--//auth-form-container-->*/}
            </div>
            {/*<!--//auth-body-->*/}
          </div>
          {/*<!--//flex-column-->*/}
        </div>
        {/*<!--//auth-main-col-->*/}
        <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
          <div className="auth-background-holder"></div>
            <Image
                src="/background/background-1.jpg"
                alt=""
                width={778}
                height={758}
                className=""
              />
          <div className="auth-background-mask"></div>
        </div>
        {/*<!--//auth-background-col-->*/}
      </div>
      {/*<!--//row-->*/}
    </>
  )
}

export default signup
