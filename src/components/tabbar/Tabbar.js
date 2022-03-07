import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Tabbar.css";


const Tabbar = ({ sidebarOpen, openSidebar }) => {

  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);
  var chainName = location.pathname.substring(location.pathname.indexOf("/") + 1, location.pathname.lastIndexOf("/"));
 
  useEffect(() => {    
    chainName = location.pathname.substring(location.pathname.indexOf("/") + 1, location.pathname.lastIndexOf("/"));
    console.log(chainName);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        <Link to={"/" + chainName + "/bridges"}><a className={location.pathname.includes('bridges') ? 'active_link' : ''} onClick={() => setPathname('/' + chainName + '/bridges')}>Bridges</a></Link>
        <Link to={"/" + chainName + "/rpc"}><a className={location.pathname.includes('rpc') ? 'active_link' : ''} onClick={() => setPathname('/' + chainName + '/rpc')}>RPC Network</a></Link>
        <Link to={"/" + chainName + "/deposit"}><a className={location.pathname.includes('deposit') ? 'active_link' : ''} onClick={() => setPathname('/' + chainName + '/deposit')}>Quick Deposit </a></Link>
      </div>
    </nav>
  );
};

export default Tabbar;
