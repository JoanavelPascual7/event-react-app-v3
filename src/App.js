import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Index from "./pages/Index";
import New from "./pages/New";
import Show from "./pages/Show";
import Edit from "./pages/Edit";
import FourOFour from "./pages/FourOFour";
import NewReviewForm from "./components/NewReviewForm"; 



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Index />} />
            <Route path="/events/new" element={<New />} />
            <Route path="/events/:id" element={<Show />} />
            <Route path="/events/:id/edit" element={<Edit />} />
            <Route path="/events/:id/reviews/new" element={<NewReviewForm />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;