import Articles from "./components/articles/Articles";
import Navbar from "./components/navbar/Navbar"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="container">
            <Router>
              <Navbar/>
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