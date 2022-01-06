import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./app.less";
import Card from "./card/Card";
import Main from "./main/Main";
import Error from "./main/repo/Error";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/card/:username/:reponame" element={<Card />} />
          <Route path="/error" element={<Error />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
