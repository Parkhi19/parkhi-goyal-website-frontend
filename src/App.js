import logo from './logo.svg';
import Home from './components/Home';
import './App.css';
import {Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import Blogs from "./components/blogs/Blogs";
import Footer from "./components/Footer";
import KnowMore from "./components/personal-info/KnowMore";


function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/blogs" element={<Blogs/>}></Route>
                    <Route path="/about" element={<KnowMore/>}></Route>
                </Routes>
            </BrowserRouter>
            <Footer></Footer>

        </div>

    );
}

export default App;
