import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ArticlePage from "./components/ArticlePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/articles/:id" element={<ArticlePage />} />
        <Route path="/" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;