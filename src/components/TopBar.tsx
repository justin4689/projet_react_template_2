import React from "react";

const TopBar = () => {
  const handleToggleSidebar = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    document.body.classList.toggle("sidebar-enable");

    if (window.innerWidth >= 992) {
      document.body.classList.toggle("vertical-collpsed");
    } else {
      document.body.classList.remove("vertical-collpsed");
    }
  };

  return (
    <div>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex align-items-center">
            <div className="navbar-brand-box">
              <a href="index.php" className="logo logo-dark">
                <span className="logo-sm">
                  <img src="/assets/images/logo.jpg" alt="" height="30" />
                </span>
                <span className="logo-lg">
                  <img src="/assets/images/logo-sms2.png" alt="" height="50" />
                </span>
              </a>

              <a href="index.php" className="logo logo-light">
                <span className="logo-sm">
                  <img src="/assets/images/logo.jpg" alt="" height="30" />
                </span>
                <span className="logo-lg">
                  <img src="/assets/images/logo-sms2.png" alt="" height="50" />
                </span>
              </a>
            </div>

            <button
              type="button"
              className="btn btn-sm px-3 font-size-24 header-item waves-effect"
              id="vertical-menu-btn"
              onClick={handleToggleSidebar}
            >
              <i className="mdi mdi-menu"></i>
            </button>

            <h3 className="text-bold  text-md m-0">Gestion des factures</h3>
          </div>

          <div className="d-flex">
            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                id="page-header-notifications-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="mdi mdi-bell-outline bx-tada"></i>
                <span className="badge bg-danger rounded-pill">3</span>
              </button>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-notifications-dropdown"
              >
                <div className="p-3">
                  <div className="row align-items-center">
                    <div className="col">
                      <h6 className="m-0"> Notifications </h6>
                    </div>
                    <div className="col-auto">
                      <a href="#!" className="small">
                        {" "}
                        View All
                      </a>
                    </div>
                  </div>
                </div>
                <div data-simplebar style={{ maxHeight: "230px" }}>
                  <a href="" className="text-reset notification-item">
                    <div className="media">
                      <div className="avatar-xs me-3">
                        <span className="avatar-title bg-primary rounded-circle font-size-16">
                          <i className="mdi mdi-cart text-white"></i>
                        </span>
                      </div>
                      <div className="media-body">
                        <h6 className="mt-0 mb-1">Your order is placed</h6>
                        <div className="font-size-13 text-muted">
                          <p className="mb-1">
                            If several languages coalesce the grammar
                          </p>
                          <p className="mb-0">
                            <i className="mdi mdi-clock-outline"></i> 3 min ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="" className="text-reset notification-item">
                    <div className="media">
                      <img
                        src="/assets/images/users/avatar-3.jpg"
                        className="me-3 rounded-circle avatar-xs"
                        alt="user-pic"
                      />
                      <div className="media-body">
                        <h6 className="mt-0 mb-1">James Lemire</h6>
                        <div className="font-size-13 text-muted">
                          <p className="mb-1">
                            It will seem like simplified English.
                          </p>
                          <p className="mb-0">
                            <i className="mdi mdi-clock-outline"></i> 1 hours
                            ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="" className="text-reset notification-item">
                    <div className="media">
                      <div className="avatar-xs me-3">
                        <span className="avatar-title bg-success rounded-circle font-size-16">
                          <i className="mdi mdi-check text-white"></i>
                        </span>
                      </div>
                      <div className="media-body">
                        <h6 className="mt-0 mb-1">Your item is shipped</h6>
                        <div className="font-size-13 text-muted">
                          <p className="mb-1">
                            If several languages coalesce the grammar
                          </p>
                          <p className="mb-0">
                            <i className="mdi mdi-clock-outline"></i> 3 min ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="" className="text-reset notification-item">
                    <div className="media">
                      <img
                        src="/assets/images/users/avatar-4.jpg"
                        className="me-3 rounded-circle avatar-xs"
                        alt="user-pic"
                      />
                      <div className="media-body">
                        <h6 className="mt-0 mb-1">Salena Layfield</h6>
                        <div className="font-size-13 text-muted">
                          <p className="mb-1">
                            As a skeptical Cambridge friend of mine occidental.
                          </p>
                          <p className="mb-0">
                            <i className="mdi mdi-clock-outline"></i> 1 hours
                            ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="p-2 border-top">
                  <a
                    className="btn btn-sm btn-link font-size-14 w-100 text-center"
                    href="javascript:void(0)"
                  >
                    <i className="mdi mdi-arrow-right-circle me-1"></i> View
                    More..
                  </a>
                </div>
              </div>
            </div>

            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item waves-effect"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="rounded-circle header-profile-user"
                  src="/assets/images/users/yeo.jpg"
                  alt="Header Avatar"
                />
                <span className="d-none d-xl-inline-block ms-1">
                  Yeo Drissa
                </span>
                <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                <a className="dropdown-item" href="#">
                  <i className="mdi mdi-account-circle-outline font-size-16 align-middle me-1"></i>{" "}
                  Profile
                </a>
                <a className="dropdown-item" href="#">
                  <i className="mdi mdi-wallet-outline font-size-16 align-middle me-1"></i>{" "}
                  My Wallet
                </a>
                <a className="dropdown-item d-block" href="#">
                  <span className="badge badge-success float-end">11</span>
                  <i className="mdi mdi-cog-outline font-size-16 align-middle me-1"></i>{" "}
                  Settings
                </a>
                <a className="dropdown-item" href="auth-lock-screen.php">
                  <i className="mdi mdi-lock-open-outline font-size-16 align-middle me-1"></i>{" "}
                  Lock screen
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item text-danger" href="auth-logout.php">
                  <i className="mdi mdi-power font-size-16 align-middle me-1 text-danger"></i>{" "}
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default TopBar;
