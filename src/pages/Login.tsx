import React from "react";

import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="authentication-bg ">
      <div className="home-center">
        <div className="home-desc-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="card">
                  <div className="card-body">
                    <div className="px-2 py-3">
                      <div className="text-center">
                        <a href="#">
                          <img
                            src="assets/images/logo-dark.png"
                            height="22"
                            alt="logo"
                          />
                        </a>

                        <h5 className="text- mb-2 mt-4">
                          Welcome Back !
                        </h5>
                        <p className="text-muted">Sign in to continue.</p>
                      </div>

                      <form className="form-horizontal mt-4 pt-2">
                        <div className="mb-3">
                          <label htmlFor="useremail">
                            Username<span className="text-danger"> *</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="useremail"
                            name="useremail"
                            placeholder="Enter email"
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="password">
                            Password<span className="text-danger"> *</span>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Enter password"
                          />
                        </div>

                        <div className="mb-3">
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="rememberMe"
                            />
                            <label className="form-label" htmlFor="rememberMe">
                              Remember me
                            </label>
                          </div>
                        </div>

                        <Link to="/dashboard">
                          <button
                            className="btn btn-primary w-100 waves-effect waves-light"
                            type="submit"
                          >
                            Log In
                          </button>
                        </Link>


                      <Link to="/forgot-password">
                        <div className="mt-4 text-center">
                          <a href="#" className="text-muted">
                            <i className="mdi mdi-lock me-1"></i> Forgot your
                            password?
                          </a>
                        </div>

                        </Link>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="mt-5 text-center text-white">
                  
                  <p>
                    © {new Date().getFullYear()} Morvin. Crafted with
                    <i className="mdi mdi-heart text-danger"></i> by
                    Themesdesign
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
