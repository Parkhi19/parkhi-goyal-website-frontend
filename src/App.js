import logo from './logo.svg';
import Home from './components/Home';
import './App.css';
import {Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import Blogs from "./components/blogs/Blogs";


function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/blogs" element={<Blogs/>}></Route>
                </Routes>
            </BrowserRouter>

        </div>

    );
}

export default App;
