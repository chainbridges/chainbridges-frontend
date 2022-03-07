import "./App.css";
import { Fragment, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Tabbar from "./components/tabbar/Tabbar";

import Main from "./components/main/Main";
import GnosisBridges from "./components/contents/Gnosis/GnosisBridges";
import GnosisRpc from "./components/contents/Gnosis/GnosisRpc";
import GnosisDeposit from "./components/contents/Gnosis/GnosisDeposit";
import PolygonBridges from "./components/contents/Polygon/PolygonBridges";
import PolygonRpc from "./components/contents/Polygon/PolygonRpc";
import PolygonDeposit from "./components/contents/Polygon/PolygonDeposit";

const App = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <div className="container">
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />

      <Routes>
        <Route path="/" element={<><Main /></>}/>

        <Route path="/gnosis/bridges" element={<><Tabbar /><GnosisBridges /></>} />
        <Route path="/gnosis/rpc" element={<><Tabbar /><GnosisRpc /></>} />
        <Route path="/gnosis/deposit" element={<><Tabbar /><GnosisDeposit /></>} />

        <Route path="/polygon/bridges" element={<><Tabbar /><PolygonBridges /></>} />
        <Route path="/polygon/rpc" element={<><Tabbar /><PolygonRpc /></>} />
        <Route path="/polygon/deposit" element={<><Tabbar /><PolygonDeposit /></>} />

        <Route path="*" element={<p>There's nothing here!</p>}/>
      </Routes>
    </div>
  );
};


export default App;