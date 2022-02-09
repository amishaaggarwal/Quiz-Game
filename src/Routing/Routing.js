import React from "react";
import { Route, Routes } from "react-router-dom";
import PlayScreen from "pages/playScreen/PlayScreen";
import Login from "pages/Login/Login";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/kbc" element={<PlayScreen />} />
        <Route path="/" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default Routing;
