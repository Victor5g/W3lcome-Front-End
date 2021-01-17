import Lottie from 'react-lottie';

import '../styles/pages/SingIn.css';
import AnimationData from '../assets/animations/SingInAnimation.json';

function SingIn() {
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
              <h1 id="title-form">Sing In</h1>
                 
               <div className="wrap-styleInput" >
                 <input type="text" placeholder="E-mail"/>
               </div>

              <div className="wrap-styleInput">
                 <input type="password" placeholder="Password"/>
              </div>

              <div className="wrap-buttonSingIn">
                <button  value="login">Sing In</button>
              </div>

              <span id="text-or">OR</span>

              <div className="wrap-buttonSingUp">
                <button value="login">Create a count</button>
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

export default SingIn;