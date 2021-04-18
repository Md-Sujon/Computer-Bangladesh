
import firebase from "firebase/app";
import "firebase/auth";
import {UserContext} from '../../App'
import { useHistory, useLocation } from 'react-router';
import './Login.css'
import firebaseConfig from './FirebaseConfig';
import { useContext} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGooglePlusG} from '@fortawesome/free-brands-svg-icons';
import Navbar from "../Home/Navbar/Navbar";



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);;
 }else {
    firebase.app();
 }


const Login = () => {

    var provider = new firebase.auth.GoogleAuthProvider();
   const [loggedInUser,setLoggedInUser]=useContext(UserContext);
   const history=useHistory();
   const location=useLocation();
   let { from } = location.state || { from: { pathname: "/" } };

   const handleGoogleSingIn =()=>{
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    // console.log(result);
      const {displayName,email}=result.user;
      const singedInUser={name:displayName,email}
    setLoggedInUser(singedInUser)
    history.replace(from)
    
  }).catch((error) => {
    console.log(error);
    
  });

}

    return (
        <div>
          <Navbar></Navbar>
          <div className="Login"> 
        
           <button type="submit" onClick={handleGoogleSingIn} class="btn btn-primary"> <FontAwesomeIcon icon={faGooglePlusG} />Google Login</button>
        </div>
        </div>
    );
};

export default Login;