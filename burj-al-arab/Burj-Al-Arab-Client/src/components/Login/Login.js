import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';
import { getAuth, signInWithPopup, GoogleAuthProvider } from'firebase/auth';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const app = initializeApp(firebaseConfig);
    // const auth = getAuth(app);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: ''
    });
    
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleSignIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const {email, photoURL,displayName} = result.user;
            const newUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
            }
            setUser(newUser);
            setLoggedInUser(newUser);
            storeAuthToken();
            history.replace(from);
        })
    };
    const storeAuthToken = () =>{
        auth.currentUser.getIdToken(true)
        .then(function(idToken) {
            console.log({idToken});
            sessionStorage.setItem('token', idToken);
          }).catch(function(error) {
            // Handle error
          });
    }
    return (
        <div>
            <h1>This is Login</h1>
            {
                user.isSignedIn &&
                <div>
                <img src={user.photo} alt={user.name} />
                <br />
                <h2 style={{fontWeight: 'bold'}}>Welcome, {user.name}</h2>
                </div>
            }
            <button onClick={handleSignIn}>Sign In</button>
        </div>
    );
};

export default Login;
