import React from "react";

function Sidebar() {
  const menuItems = [
    {
      id: "adminSubmenu",
      iconClass: "dripicons-wallet",
      label: "Administration",
      //
      links: ["Inbox", "Email Read", "Email Compose"],
    },
    {
      id: "sessionsSubmenu",
      iconClass: "dripicons-mail",
      label: "Sessions",
      // Sessions
      links: ["Inbox", "Email Read", "Email Compose"],
    },
    {
      id: "settingsSubmenu",
      iconClass: "dripicons-gear",
      label: "Parametres",
      // Parametres
      links: ["Inbox", "Email Read", "Email Compose"],
    },
  ];

  return (
    <div className="vertical-menu">
      <div data-simplebar className="h-100">
        <div className="user-sidebar text-center">
          <div className="dropdown">
            <div className="user-img">
              <img
                src="/assets/images/users/yeo.jpg"
                alt=""
                className="rounded-circle"
              />
              <span className="avatar-online bg-success"></span>
            </div>
            <div className="user-info">
              <h5 className="mt-3 font-size-16 text-white">Yeo Drissa</h5>
              <span className="font-size-13 text-white-50">Administrateur</span>
            </div>
          </div>
        </div>

        {/* Sidemenu */}
        <div id="sidebar-menu">
          <ul className="list-unstyled" id="side-menu">
            <li className="menu-title">Menu de Navigation</li>

            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href="#!"
                  className="has-arrow waves-effect collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${item.id}`}
                  aria-expanded="false"
                  aria-controls={item.id}
                >
                  <i className={item.iconClass}></i>
                  <span>{item.label}</span>
                </a>
                <ul
                  className="sub-menu collapse"
                  id={item.id}
                  data-bs-parent="#side-menu"
                >
                  {item.links.map((linkLabel) => (
                    <li key={linkLabel}>
                      <a href="#">{linkLabel}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
