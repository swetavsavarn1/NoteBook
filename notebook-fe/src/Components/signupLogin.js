import '../App.css'
import { useContext, useRef, useState, useEffect } from 'react';
import axios from 'axios'
import { userContext } from '../App';
import { useNavigate } from 'react-router-dom';

function SignupLogin() {
    const containerRef = useRef(null);

    const handleSignUpClick = () => {
        containerRef.current.classList.add('right-panel-active');
    };

    const handleSignInClick = () => {
        containerRef.current.classList.remove('right-panel-active');
    };
    const [userData, setUserData] = useState({})
    const [button, setButton] = useState(false)
    const userKey = useContext(userContext)
    const navigate = useNavigate()
    const [alert, showAlert] = useState(false);
    const [message, setmessage] = useState('');
    useEffect(() => {
        if (alert) {
            const timer = setTimeout(() => {
                showAlert(false);
                setButton(false)
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [alert]);



    return (

        <div class="container">
            {alert && (
                <div class="alert alert-light" role="alert">
                    {message}
                </div>
            )}
            <div className="container" id="container" ref={containerRef}>
                <div class="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" onChange={(e) => { setUserData({ ...userData, SName: e.target.value }) }} value={userData.SName} required={true} />
                        <input type="email" placeholder="Email" onChange={(e) => { setUserData({ ...userData, SEmail: e.target.value }) }} value={userData.SEmail} required={true} />
                        <input type="password" placeholder="Password" onChange={(e) => { setUserData({ ...userData, SPassword: e.target.value }) }} value={userData.SPassword} required={true} />
                        <button onClick={signUp} disabled={button}>Sign Up</button>
                    </form>
                </div>
                <div class="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" onChange={(e) => { setUserData({ ...userData, Email: e.target.value }) }} required={true} />
                        <input type="password" placeholder="Password" onChange={(e) => { setUserData({ ...userData, Password: e.target.value }) }} required={true} />
                        <button onClick={signIn} disabled={button}>Sign In</button>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={handleSignInClick} />
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={handleSignUpClick} />
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
    async function signIn() {
        try {
            setButton(true)
            const res = await axios.post(process.env.REACT_APP_BE_BASE_URL + 'login/', { email: userData.Email, password: userData.Password })
            userKey.setUserToken(res.data.key)
            setUserData({ Email: '', Password: '' })
            navigate('/home')
        } catch (error) {
            showAlert(true)
            setmessage(error.response.data.message);
            console.log('Error:', error);

        }



    }
    async function signUp() {
        try {
            setButton(true)
            console.log({ email: userData.SEmail, name: userData.SName, password: userData.SPassword })
            const res = await axios.post(process.env.REACT_APP_BE_BASE_URL + 'signup/', { email: userData.SEmail, name: userData.SName, password: userData.SPassword })
            showAlert(true)
            setmessage(res.data.message)
            setUserData({ SName: '', SEmail: '', SPassword: '' });


            navigate('/')
        } catch (error) {
            showAlert(true)
            setmessage(error.response.data.message);
            console.log('Error:', error);

        }

    }

}
export default SignupLogin