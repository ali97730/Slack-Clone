import { Button } from '@material-ui/core';
import React from 'react'
import { auth,provider } from '../firebase';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';

import "./Login.css";


const Login=() =>{

    const [state,dispatch] = useStateValue(); 

    const signIn =()=>{
        auth.signInWithPopup(provider)
        .then(result=>{
            console.log(result)
                dispatch({
                    type:actionTypes.SET_USER,
                    user:result.user
                    
                })
        })
        .catch(error=>{alert(error.message)});
    }

    return (
        <div className="login">
                <div className="login__container">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2000px-Slack_Technologies_Logo.svg.png"
                     alt="Logo"/>
               
                <h1>Sign In to Mohsinali</h1>
                <p>ali97730.slack.com</p>
                <Button onClick={signIn}>Sign In With Google </Button>
                </div>
        </div>
    )
}

export default Login;
