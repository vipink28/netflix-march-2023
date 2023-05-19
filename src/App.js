import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homescreen from './pages/Homescreen';
import Browse from './pages/Browse';
import BrowseByGenre from './pages/BrowseByGenre';
import PageNotFound from './pages/PageNotFound';
import Navigation from './components/Navigation';
import DetailsModal from './components/DetailsModal';
import Home from './pages/Home';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
function App() {
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(user);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, [])

  
  return (
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/browse/:platform" element={<Browse />}></Route>
          <Route path="/browsebygenre/:platform/:id" element={<BrowseByGenre />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>



        <DetailsModal />
      </BrowserRouter>
  );
}

export default App;
