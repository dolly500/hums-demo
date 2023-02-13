import React from 'react'
import Template from '../../Template';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import './SignUp.css';
// import 'bootstrap/dist/css/bootstrap.css';

const Right = () => {
    return (
        <div className='right-div'>
            <h3>Create Account</h3>
            <p>Our mobile app would be coming out soon. Be among the first people to get notified.</p>
            <form>
                <input className="sign-input" type='text' placeholder='Name' /><br></br>
                <input className="sign-input" type='text' placeholder='Email' /><br></br>
                <input className="sign-input" type='password' placeholder='Password' /><br></br>
                <p className='sign-accept'>By clicking on Sign Up you accept to our <a href='#'>Terms and Condition</a> </p>
                <button className='btn-lg btn-primary btn-block sign-up-btn'>Sign Up</button>
            </form>
            <p className='or'>or</p>
            <button className='btn-lg sign-up-bt-fb'> <FaFacebook style={{ 'marginRight': '0.4em', 'fontSize': '16px', 'position': 'relative', 'top': '2px'}} /> Facebook</button>
            <button className='btn-lg sign-up-bt-gg'> <FcGoogle style={{ 'marginRight': '0.4em', 'fontSize': '16px', 'position': 'relative', 'top': '2px' }}/> Google</button>
        </div>
    )
}

const SignUp = () => {
    return (
        <div>
            <Template App={Right}/>
        </div>
    )
}

export default SignUp;