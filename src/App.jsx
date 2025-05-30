import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import pages from "./data/pages";
import DefaultLayout from './layouts/DefaultLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path={pages.HOME} element={<Home />} />
            <Route path={pages.ABOUT} element={<About />} />
            <Route path={pages.POSTS} element={<Posts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App; 
