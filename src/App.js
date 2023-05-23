import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, userAuth } from './auth/authSlice';
function App() {
  const [error, setError] = useState();  
  const user = useSelector(selectUser);
  console.log(user);
  const dispatch = useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        dispatch(userAuth({status: true, user: uid}))
      } else {
        // User is signed out
        dispatch(userAuth({status: false}))
      }
    });
  }, [dispatch])

  return (
      <BrowserRouter>
        <Navigation />
        {
        !user.status ?
        <Routes>
        <Route path="/" element={<Home />}></Route>
        </Routes>
        :
        <Routes>
          <Route path="/" element={<Homescreen />}></Route>
          <Route path="/browse/:platform" element={<Browse />}></Route>
          <Route path="/browsebygenre/:platform/:id" element={<BrowseByGenre />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      }


        <DetailsModal />
      </BrowserRouter>
  );
}

export default App;
