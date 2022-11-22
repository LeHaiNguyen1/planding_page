import Articles from "./components/hero/hero.jsx";
import Navbar from "./components/navbar/navbar.jsx"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import '../src/index.css'

function App() {
    return (
        <div className="container">
            <Router>
                    <Navbar/>
                    <Articles/>
            </Router>
        </div>
    );
}

export default App;