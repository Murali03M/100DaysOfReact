import './App.css';
import react ,{useEffect,useState} from 'react'
import jwt_decode from "jwt-decode";
function App() {
    const[user ,setUser] =useState({})
   const handleCallbackResponse =(response) =>{

        console.log("JWT Toekn:"+response.credential);
        var userobject = jwt_decode(response.credential)
        console.log(userobject);
        setUser(userobject);
        document.getElementById("signInDiv").hidden=true; 

   }
   const handleSignOut =(e) =>{
         setUser({});
         document.getElementById("signInDiv").hidden=false;   


   }
    useEffect(() => {
      const google = window.google
  google.accounts.id.initialize({
        client_id:"701606749616-iogcsehdm4053kakhr36tk49u108kedg.apps.googleusercontent.com",
        callback: handleCallbackResponse
      });
      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        {
          theme:"outline",
          size:"large",
         
          
        }
      )
      google.accounts.id.prompt();
    }, [])
    
  return (
    <div className="App">
       <div id="signInDiv" className='signinButton'> </div>
      <div className='signOut'>

     
       {
        user && <div>
          <img src={user.picture}></img> 
          <h3>{user.name}</h3>
        </div>
       }
        {
         Object.keys(user).length !=0 && 
         <button onClick={(e)=>handleSignOut(e)}>Sign Out</button>

       } 
        </div>
    </div>
  );
}

export default App;
