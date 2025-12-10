import { Link } from 'react-router-dom'

function ForgotPassword() {
  return (
  <div className='authentication-bg '>
        <div className="home-center">
        <div className="home-desc-center">

            <div className="container">

              


                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card">
                            <div className="card-body">
                                <div className="px-2 py-3">


                                    <div className="text-center">
                                        <a href="index.php">
                                            <img src="assets/images/logo-dark.png" height="22" alt="logo"/>
                                        </a>

                                        <h5 className="text-primary mb-2 mt-4">Forgot Password</h5>
                                        <p className="text-muted">Re-Password with Morvin.</p>
                                    </div>

                                    <div className="alert alert-success text-center mb-4 mt-4 pt-2" role="alert">
                                        Enter your Email and instructions will be sent to you!
                                    </div>


                                    <form className="form-horizontal" method="post">
            
                                        <div className="mb-3 <?php echo (!empty($useremail_err)) ? 'has-error' : ''; ?>">
                                            <label htmlFor="useremail">Email<span className="text-danger"> *</span></label>
                                            <input type="text" className="form-control" id="useremail" name="useremail" placeholder="Enter email"/>
                                            <span className="text-danger"></span>
                                            
                                        </div>
                    
                                        <div className="row mb-0">
                                            <div className="col-12 text-end">
                                                <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Reset</button>
                                            </div>
                                        </div>
    
                                    </form>

                                   



                                   

                                </div>
                            </div>
                        </div>

                        <div className="mt-5 text-center text-white">
                            <p>Remember It ?<Link to="/login"><a href="auth-login.php" className="fw-bold text-white"> Sign In here</a> </Link></p>
                            <p>© <script>document.write(new Date().getFullYear())</script> Morvin. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesdesign</p>
                        </div>
                    </div>
                </div>

            </div>


        </div>
        
    </div>
    </div>
  )
}

export default ForgotPassword