import React, { useEffect, useState } from "react";

const TopBar = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const visited = window.sessionStorage
      ? sessionStorage.getItem("is_visited")
      : null;

    if (visited === "dark-mode-switch") {
      setTheme("dark");
      return;
    }

    const bsLink = document.getElementById(
      "bootstrap-style"
    ) as HTMLLinkElement | null;
    const href = bsLink?.getAttribute("href") ?? "";
    setTheme(href.includes("bootstrap-dark") ? "dark" : "light");
  }, []);

  const handleToggleTheme = () => {
    const bsLink = document.getElementById(
      "bootstrap-style"
    ) as HTMLLinkElement | null;
    const appLink = document.getElementById(
      "app-style"
    ) as HTMLLinkElement | null;

    if (!bsLink || !appLink) return;

    const isDark = theme === "dark";

    if (isDark) {
      // Dark -> Light
      bsLink.href = "assets/css/bootstrap.min.css";
      appLink.href = "assets/css/app.min.css";
      window.sessionStorage &&
        sessionStorage.setItem("is_visited", "light-mode-switch");
      setTheme("light");
    } else {
      // Light -> Dark
      bsLink.href = "assets/css/bootstrap-dark.min.css";
      appLink.href = "assets/css/app-dark.min.css";
      window.sessionStorage &&
        sessionStorage.setItem("is_visited", "dark-mode-switch");
      setTheme("dark");
    }
  };

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
              <a href="/dashboard" className="logo logo-dark">
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
                id="page-header-dark-mode-switch"
                onClick={handleToggleTheme}
              >
                <i
                  className={
                    theme === "dark"
                      ? "mdi mdi-white-balance-sunny"
                      : "mdi mdi-weather-night"
                  }
                ></i>
              </button>
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
