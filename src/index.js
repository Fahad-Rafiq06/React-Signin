import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";

function Hi() {
  return <div className='main-div'>
    <div className='left-side'>
      <img src="https://colorlib.com/etc/lf/Login_v18/images/bg-01.jpg" alt=''/>
    </div>
  <div className='right-side'>
    <form className='main-form'>
      <span className='text1'>Login to continue</span>
      <div>
      <input type="text" placeholder='Email' id='email' />
      </div>
      <div>
      <input type="password" placeholder='Password' id='pass' />
      </div>
      <div>
      <input type="checkbox" id='check' name='Remember me' />
      <label className='check'>Remember me</label>
      </div>
      <div><a href='#' className='text2'>Forgot Password?</a></div>
      <div className='button'>
        <button>Login</button>
      </div>
      <div className='text3'><span className='text4'>or sign up using</span></div>
      <div className='social-icon'>
        <a></a>
      </div>
    </form>
  </div>
  </div>;
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));