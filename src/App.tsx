import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ArticlePage from "./components/ArticlePage";
import ArticleDetail from "./components/ArticleDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ArticlePage />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;