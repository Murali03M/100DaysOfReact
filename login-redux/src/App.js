import { useSelector } from 'react-redux';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';

import { selectUser } from "./features/userSlice";
function App() {
 
    const user = useSelector(selectUser);
     console.log(user);

  return <div>{user ? <Logout /> : <Login />}</div>;

}

export default App;
