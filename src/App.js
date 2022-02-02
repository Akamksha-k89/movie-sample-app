import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";

import './App.scss';

function App() {
  return (
    <div className="app">
     <Router>
       <Header></Header>
       <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/movie/:imdbID" element={<MovieDetail/>}/>
       <Route component={PageNotFound}/>
       </Routes>
       <Footer/>
     </Router>
    </div>
  );
}

export default App;
