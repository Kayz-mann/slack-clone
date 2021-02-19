import React from 'react'
import "./Login.css"
import { Button } from "@material-ui/core"
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider"
import { actionTypes} from "./reducer";

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
       auth
         .signInWithPopup(provider)
         .then(result => {
             console.log(result);
             dispatch({
                 type: actionTypes.SET_USER,
                 user: result.user,
             })
         }) 
         .catch(error => {
             alert(error.message);
         });
    }

    return (
        <div className="login">
            <div className="login__container">
              <img src="https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-slack/contentbuilder/Slack_Mark_mSCuu6G.svg" />
              <h1>Sign in to Technocrafts Solution HQ</h1>
              <p>technocrafts.slack.com</p>
              <Button onClick={signIn}>Sign In with Google</Button>
            </div>
           
        </div>
    )
}

export default Login
