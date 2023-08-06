import React from "react";
import "./App.scss";
import Main from "./main/Main";
import Header from "../components/header/Header";
import Toast from "../components/UI/toast/Toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page404 from "./page404/Page404";
import ContentPage from "./contentPage/ContentPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Toast />
        <Routes>
          <Route path="/:id" element={<ContentPage />}></Route>
          <Route path="/" element={<Main />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
