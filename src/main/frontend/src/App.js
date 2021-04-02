import './css/fontawesome/css/all.css'
import './css/bootstrap.min.css'
import './css/style.css'
import './css/rate-style.css'
import './css/admin.css'
import {Route, Switch} from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";
import Admin from "./components/Admin/Admin";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path={'/admin'} render={() => (
                    <Switch>
                        <Route path='/admin' render={() => <Admin/>}/>
                    </Switch>
                )}/>
                <Route path={''} render={() => (
                    <>
                        <Header/>
                        <Switch>
                            {/*<Route path='/profile' render={() => <Profile/>}/>*/}
                            <Route path='/register' render={() => <Register/>}/>
                            <Route path='/login' render={() => <Login/>}/>
                            <Route path='/' exact render={() => <Home/>}/>
                        </Switch>
                        <Footer/>
                    </>
                )}/>
            </Switch>
        </div>
    );
}

export default App;
