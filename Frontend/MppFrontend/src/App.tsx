import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SingerShowAll } from "./components/singers/SingerShowAll";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AppMenu } from "./components/AppMenu";
import { AppHome } from "./components/AppHome";
import { SingerDetails } from "./components/singers/SingerDetails";
import { SingerDelete } from "./components/singers/SingerDelete";
import { SingerAdd } from "./components/singers/SingerAdd";
import { RecordLblsShowAll } from "./components/recordLbls/RecordLblsShowAll";
import { RecordLblsDetails } from "./components/recordLbls/RecordLblsDetails";
import { RecordLblsDelete } from "./components/recordLbls/RecordLblsDelete";
import { RecordLblsAdd } from "./components/recordLbls/RecordLblsAdd";
import { RecordLblsUpdate } from "./components/recordLbls/RecordLblsUpdate";
import { RecordLblsOrderBySingersAge } from "./components/recordLbls/RecordLblsOrderBySingersAge";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <Router>
        <AppMenu />
        <Routes>
          <Route path="/" element={<AppHome />} />
          <Route path="/singers" element={<SingerShowAll />} />
          <Route path="/singers/:singerId" element={<SingerDetails />} />
          <Route path="/singers/:singerId/delete" element={<SingerDelete />} />
          <Route path="/singers/add" element={<SingerAdd />} />
        </Routes>
        <Routes>
          <Route path="/recordLbls" element={<RecordLblsShowAll />} />
          <Route path="/recordLbls/:reclblId" element={<RecordLblsDetails />} />
          <Route path="/recordLbls/:id/delete" element={<RecordLblsDelete />} />
          <Route path="/recordLbls/add" element={<RecordLblsAdd />} />
          <Route path="/recordLbls/:recId/edit" element={<RecordLblsUpdate />} />
          <Route path="/average-age" element={<RecordLblsOrderBySingersAge />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
