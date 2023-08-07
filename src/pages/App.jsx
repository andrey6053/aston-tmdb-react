import React from "react";
import "./App.scss";
import FilmsPage from "./filmsPage/FilmsPage";
import Header from "../components/header/Header";
import Toast from "../components/UI/toast/Toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page404 from "./page404/Page404";
import ContentPage from "./contentPage/ContentPage";
import ActorsPage from "./actorsPage/ActorsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Toast />
        <Routes>
          <Route path="/:id" element={<ContentPage />}></Route>
          <Route path="/" element={<FilmsPage />}></Route>
          <Route path="/actors" element={<ActorsPage />}></Route>
          <Route path="/actors/:id" element={<ContentPage />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
