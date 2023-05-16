import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homescreen from './pages/Homescreen';
import Browse from './pages/Browse';
import BrowseByGenre from './pages/BrowseByGenre';
import PageNotFound from './pages/PageNotFound';
import Navigation from './components/Navigation';
import DetailsModal from './components/DetailsModal';
function App() {
  return (
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homescreen />}></Route>
          <Route path="/browse/:platform" element={<Browse />}></Route>
          <Route path="/browsebygenre" element={<BrowseByGenre />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>

        <DetailsModal />
      </BrowserRouter>
  );
}

export default App;
