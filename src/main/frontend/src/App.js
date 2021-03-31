import './css/fontawesome/css/all.css'
import './css/bootstrap.min.css'
import './css/style.css'
import './css/rate-style.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="container" style={{minHeight: '100vh'}}>

        </div>
        <Footer/>
    </div>
  );
}

export default App;
