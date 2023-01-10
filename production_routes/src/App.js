import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomeComponent from "./pages/HomeComponent";
import AccountComponent from "./pages/AccountComponent";
import CardsComponent from "./pages/CardsComponent";
import ProtectedRoute from './ProtectedRoute';
import useAuth from "./useAuth";

function App() {
  const [isAuth, login, logout] = useAuth(false)
  return (
    <div className="ui container">
      <h2>Protected Routes Tutorial</h2>
      <Router>
        <ul>
          <li>
            <Navigate to="/" replace={true} >Home Page</Navigate>
          </li>
          <li>
            <Navigate to="/accounts" replace={true} >Accounts (Protected)</Navigate>
          </li>
          <li>
            <Navigate to="/cards" replace={true} >Cards (UnProtected)</Navigate>
          </li>
        </ul>
        {isAuth ? (<><div className="ui message brown">You are logged in..</div><button className="ui button blue" onClick={logout}>Logout</button></>):(<><div className="ui message violet">You are logged out..</div><button className="ui button blue" onClick={login}>Login</button></>)}
        <Routes>
          <Route path="/" exact component={HomeComponent} />
          <Route path="/cards" component={CardsComponent} />
          <ProtectedRoute path="/accounts" component={AccountComponent} auth={ isAuth}/>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
