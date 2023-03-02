import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function login() {
  return (
    <>
         <div className="row g-0 app-auth-wrapper">
	    <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
		    <div className="d-flex flex-column align-content-end">
			    <div className="app-auth-body mx-auto">	
				    <div className="app-auth-branding mb-4">
                        <Link className="app-logo" href="/">
                         <Image className="logo-icon me-2" width={100} height={100} src="/app-logo.svg" alt="logo" />
                        </Link>
                    </div>
					<h2 className="auth-heading text-center mb-5">Log in to Portal</h2>
			        <div className="auth-form-container text-start">
						<form className="auth-form login-form">         
							<div className="email mb-3">
								<label className="sr-only" htmlFor="signin-email">Email</label>
								<input id="signin-email" name="signin-email" type="email" className="form-control signin-email" placeholder="Email address" required />
							</div>{/*<!--//form-group-->*/}
							<div className="password mb-3">
								<label className="sr-only" htmlFor="signin-password">Password</label>
								<input id="signin-password" name="signin-password" type="password" className="form-control signin-password" placeholder="Password" required />
								<div className="extra mt-3 row justify-content-between">
									<div className="col-6">
										<div className="form-check">
											<input className="form-check-input" type="checkbox" value="" id="RememberPassword" />
											<label className="form-check-label" htmlFor="RememberPassword">
											Remember me
											</label>
										</div>
									</div>{/*<!--//col-6-->*/}
									<div className="col-6">
										<div className="forgot-password text-end">
											<a href="reset-password.html">Forgot password?</a>
										</div>
									</div>{/*<!--//col-6-->*/}
								</div>{/*<!--//extra-->*/}
							</div>{/*<!--//form-group-->*/}
							<div className="text-center app-btn-primary rounded text-white">
								<button type="submit" className="btn app-btn-primary w-100 text-white theme-btn mx-auto">Log In</button>
							</div>
						</form>
						
						<div className="auth-option text-center pt-5">No Account? Sign up <a className="text-link" href="signup.html" >here</a>.</div>
					</div>{/*<!--//auth-form-container-->*/}	

			    </div>{/*<!--//auth-body-->*/}
		    
			    <Footer />
		    </div>{/*<!--//flex-column-->*/}   
	    </div>{/*<!--//auth-main-col-->*/}
	    <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
		    <div className="auth-background-holder" >
                <Image src="/background/background-1.jpg" alt="" width={100} height={100} className="" />
		    </div>
		    <div className="auth-background-mask"></div>
		    <div className="auth-background-overlay p-3 p-lg-5">
			    <div className="d-flex flex-column align-content-end h-100">
				    <div className="h-100"></div>
				    
				</div>
		    </div>{/*<!--//auth-background-overlay-->*/}
	    </div>{/*<!--//auth-background-col-->*/}
    
    </div>{/*<!--//row-->*/}
    </>
  )
}

export default login