import Lottie from 'react-lottie';

import '../styles/pages/SignIn.css';
import AnimationData from '../assets/animations/SignInAnimation.json';

function SignIn() {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: AnimationData,
    rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
   <div id="container-SingIn">

      <div id="header">
        <ul>
          <li><img id="logo" alt="logo" src="https://w3lcome.com/wp-content/uploads/2020/04/W3lcome-Logo-Standard-4.png"/></li>
        </ul>
      </div>

    <div>
      <div id="box-Animation" className="box">
         <div id="animation-container"> 
            <Lottie id=""options={defaultOptions}
              height={"90%"}
              width={"90%"}
              isStopped={false}
              isPaused={false}/>
          </div>
    </div>

    <div id="box-Form" className="box">
        <div id="form-container">
          <form  className="login-form">
              <h1 id="title-form">Sign In</h1>
                 
               <div className="wrap-styleInput" >
                 <input type="text" placeholder="E-mail"/>
               </div>

              <div className="wrap-styleInput">
                 <input type="password" placeholder="Password"/>
              </div>

              <div className="wrap-buttonSignIn">
                <button  value="login">Sign In</button>
              </div>

              <span id="text-or">OR</span>

              <div className="wrap-buttonSignUp">
                <button value="login">Create account</button>
              </div>

              <div className='recovery'>
                <a href="#recovery">Forgot Password?</a>
              </div>
            </form>
        </div>
      </div>
    </div>
  </div>
  );
}

export default SignIn;