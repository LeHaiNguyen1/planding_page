import Articles from "./components/hero";
import Navbar from "./components/navbar"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import '../src/index.css'

function App() {
    return (
        <div className="container">
            <Router>
                <div className="pr-5 pl-5">
                    <Navbar/>
                </div>
                <Routes> 
                    <Route
                        path="/"
                        element={
                            <div className="row mt-5">
                                <div className="col-md-12">
                                    <Articles/>
                                </div>
                            </div>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;