import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.tsx";
import DetailPage from "../pages/Detail.tsx";
import WishlistPage from "../pages/Wishlist.tsx";
import "../styles/components/Nav.scss";
import Nav from "../components/Nav.tsx";

function App() {
    return (
        <Router>
            <Nav />

            <Routes>
                <Route path="/" element={ <HomePage/> }/>
                <Route path="/movie/:id" element={ <DetailPage/> }/>
                <Route path="/wishlist" element={ <WishlistPage/> }/>
            </Routes>
        </Router>
    );
}

export default App;