import React from "react";
import '@aws-amplify/ui-react/styles.css';
// import { Auth } from 'aws-amplify';
import Amplify, { Auth } from 'aws-amplify';

Amplify.configure({
    Auth: {
        region: 'ap-northeast',
        userPoolId: 'ap-northeast-1_51Tkv0nUI',
        userPoolWebClientId: '7mka84jmlbvdm4m29a241gmc1l'
    }
});

// >>New - Configuring Auth Module
// Auth.configure(awsconfig);

function Login() {


    const handleLogin = (event) =>
    {
        event.preventDefault();
        // let username = 'inboxkundu@gmail.com55';
        // let password = 'Admin@12';
        let { uname, pass } = document.forms[0];
        let username = uname.value;
        let password = pass.value;
        
        try{
            const user = Auth.signIn(username, password);
            console.log(user);
        }catch(error){
            console.log('error sign in ', error);
        }
    };

    return (
        <div className="form">
            <form>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />

                </div>
                <div className="button-container">
                    <input type="submit" onClick={handleLogin}/>
                </div>
            </form>
        </div>
    );
}
    export default Login;