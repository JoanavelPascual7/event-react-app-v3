import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Index from "./pages/Index";
import New from "./pages/New";
import Show from "./pages/Show";
import Edit from "./pages/Edit";
import FourOFour from "./pages/FourOFour";
import NewReviewForm from "./components/NewReviewForm"; 
import UsersIndex from "./pages/UsersIndex";
import UsersShow from './pages/UsersShow';
import UserEdit from './pages/UserEdit'; // Import UserEdit page
import UserNew from './pages/UserNew'; // Import UserNew page
import ReviewsIndex from "./pages/ReviewsIndex";
import ReviewsNew from './pages/ReviewsNew'; // Import ReviewsNew page


import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UsersIndex />} />
            <Route path="/users/new" element={<UserNew />} /> {/* New User route */}
            <Route path="/users/:id" element={<UsersShow />} />
            <Route path="/users/:id/edit" element={<UserEdit />} /> {/* Edit User route */}
            <Route path="/events" element={<Index />} />
            <Route path="/events/new" element={<New />} />
            <Route path="/events/:id" element={<Show />} />
            <Route path="/events/:id/edit" element={<Edit />} />
            <Route path="/events/:id/reviews/new" element={<ReviewsNew />} />
            <Route path="/events/:id/reviews" element={<ReviewsIndex />} /> 
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
