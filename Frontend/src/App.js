import React from "react";
import { Route, Routes } from "react-router-dom";
import { List, NotFound, View } from "./Components/Pages";
import Dashboard from "./Components/Dashboard/UserDashboard";
function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<List />} />
          <Route path="/List" element={<List />}/>
          <Route path="/List/View/:id" element={<View />} />
        </Route>
        <Route path="*" index element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
