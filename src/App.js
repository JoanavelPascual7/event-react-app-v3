import './App.css';


import axios from "axios"
import React, { useEffect, useState } from "react"
import { auth } from './firebaseConfig'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Index from "./pages/Index";
import New from "./pages/New";
import Show from "./pages/Show";
import Edit from "./pages/Edit";
import FourOFour from "./pages/FourOFour";
import UsersIndex from "./pages/UsersIndex";
import UsersShow from './pages/UsersShow';
import UserEdit from './pages/UserEdit'; 
import UserNew from './pages/UserNew'; 
import ReviewsIndex from "./pages/ReviewsIndex";
import ReviewsNew from './pages/ReviewsNew'; 
import ReviewsShow from "./pages/ReviewsShow";


const API = process.env.REACT_APP_API_URL


function App() {
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState(null)
  const [userUid, setUserUid] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      setUser(authUser) // firebase data for user
      if (authUser) {

        const uid = authUser.uid; // Capture uid here
        console.log('authUser:', authUser) // working
        setUser(authUser) // firebase data for user
        console.log(authUser.uid) // working
        setUserUid(authUser.uid)
        try {
          const response = await axios.get(`${API}/users`)
          console.log(response.data) // working
          const loggedInUser = response.data.find((verifiedUser) => verifiedUser.firebase_uid === uid);
            // console.log(verifiedUser) // working
            // console.log(verifiedUser.firebase_uid === userUid) //working 
            // console.log(loggedInUser.username, `is logged in`) // working
          if (loggedInUser) {
            setUserData(loggedInUser)
            console.log(loggedInUser.username, 'is logged in');
          } else {
            console.error(`User not found in the database, check if user is logged in properly`)
            setUserData(null)
          }
        }
        catch (error) {
          console.error('Error fetching user data:', error)
        } finally {
          setLoading(false)
        }
      } else {
        setUser(null) // helps with logging out
        setUserData(null) // resets data when logged out 
        setLoading(false);
      }
    })
    return () => unsubscribe()
  }, [API])


  const userId = userData?.id;
  const isAdmin = userData?.admin;

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log(user.displayName, `is logged out.`);
      setUserData(null);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main className='main-app-container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UsersIndex />} />
            <Route path="/users/new" element={<UserNew />} />
            <Route path="/users/:id" element={<UsersShow />} />
            <Route path="/users/:id/edit" element={<UserEdit />} />

            <Route path="/events" element={<Index />} />
            <Route path="/events/new" element={<New />} />
            <Route path="/events/:id" element={<Show />} />
            <Route path="/events/:id/edit" element={<Edit />} />
            <Route path="/events/:id/reviews/new" element={<ReviewsNew />} />
            <Route path="/events/:id/reviews" element={<ReviewsIndex />} />


            <Route path="/reviews/:id" element={<ReviewsShow />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;