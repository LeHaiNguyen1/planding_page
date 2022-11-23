import Articles from "./components/hero/hero.jsx";
import Navbar from "./components/navbar/navbar.jsx"
import '../src/index.css'
import Feature from "./components/feature/feature.jsx";
import Footer from "./components/footer/footer.jsx";
import OutputFloor from "./components/outputFloor/outputFloor.jsx";
import About from "./components/about/about.jsx";
import Walkincrypto from "./components/walkincrypto/walkincrypto.jsx";

function App() {
    return (
        <div className="container-fluid">
            <header>
                <Navbar />
            </header>
            <main>
                <Articles />
                <About/>
                <Walkincrypto/>
                <OutputFloor/>
                <Feature/>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;