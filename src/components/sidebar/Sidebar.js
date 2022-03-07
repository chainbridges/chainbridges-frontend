import "./Sidebar.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {

  const location = useLocation();
  var [pathname, setPathname] = useState(location.pathname);

  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <Link className="sidebar__logolink" to="/">
        <div className="sidebar__title">
            <div className="sidebar__img">
              <img src={logo} alt="logo" />
              <h1>ChainBridges</h1>
            </div>
            <i
              onClick={() => closeSidebar()}
              className="fa fa-times"
              id="sidebarIcon"
              aria-hidden="true"
            ></i>
        </div>
      </Link>
      <div className="sidebar__menu">
        <h2>Chains</h2>
        <Link to="/gnosis/bridges" className={pathname.includes('gnosis') ? 'sidebar__link active_menu_link' : 'sidebar__link'} onClick={() => setPathname('/gnosis/bridges')}>
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <a>Gnosis</a>
        </Link>

        <Link to="/polygon/bridges" className={pathname.includes('polygon') ? 'sidebar__link active_menu_link' : 'sidebar__link'} onClick={() => setPathname('/polygon/bridges')}>
          <i className="fa fa-building-o"></i>
          <a>Polygon</a>
        </Link>

        <Link to="/zksync/bridges" className={pathname.includes('zksync') ? 'sidebar__link active_menu_link' : 'sidebar__link'} onClick={() => setPathname('/zksync/bridges')}>
          <i className="fa fa-building-o"></i>
          <a>Zksync</a>
        </Link>

        <Link to="/arbitrum/bridges" className={pathname.includes('arbitrum') ? 'sidebar__link active_menu_link' : 'sidebar__link'} onClick={() => setPathname('/arbitrum/bridges')}>
          <i className="fa fa-building-o"></i>
          <a>Arbitrum</a>
        </Link>

        <Link to="/optimism/bridges" className={pathname.includes('optimism') ? 'sidebar__link active_menu_link' : 'sidebar__link'} onClick={() => setPathname('/optimism/bridges')}>
          <i className="fa fa-building-o"></i>
          <a>Optimism</a>
        </Link>

        <Link to="/fantom/bridges" className={pathname.includes('fantom') ? 'sidebar__link active_menu_link' : 'sidebar__link'} onClick={() => setPathname('/fantom/bridges')}>
          <i className="fa fa-building-o"></i>
          <a>Fantom</a>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
