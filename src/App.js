import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UnExpended from './components/UnExpanded';
// import AllExpanded from "./components/AllExpended";

function App() {
  return (
    <div className="container-fluid">
      <UnExpended />
      {/* <AllExpanded /> */}
    </div>
  );
}

export default App;
