import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook
import '../App.css';
import { userContext } from '../App';

function Home() {
    const [content, setcontent] = useState('');
    const [disableButton, setDisableButton] = useState(false);
    const userToken = useContext(userContext);
    const [alert, showAlert] = useState(false);
    const [message, setmessage] = useState('');
    const navigate = useNavigate(); // Initialize useHistory

    useEffect(() => {
        if (alert) {
            const timer = setTimeout(() => {
                showAlert(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [alert]);

    return (
        <>
            {alert && (
                <div class="alert alert-dark" role="alert">
                    {message}
                </div>
            )}
            <div className="container my-3">
                <div className="paper">
                    <div className="paper-content">
                        <textarea
                            autoFocus
                            onChange={(e) => {
                                setcontent(e.target.value);
                            }}
                        >
                        </textarea>
                        <div className="text-right mx-3">
                            <button
                                type="button"
                                class="btn btn-dark"
                                onClick={buttonHandeler}
                                disabled={disableButton}
                            >
                                Done
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    async function buttonHandeler() {
        setDisableButton(true);
        try {
            if (userToken.userToken === '') {
                navigate('/'); // Change the route to '/'
            } else {
            const response = await axios.post(
                `${process.env.REACT_APP_BE_BASE_URL}notebook/post`,
                { key: userToken.userToken, note: content }
            );

            if (response.status === 200) {
                setcontent('');
                setmessage(response.data.message);
            }
            }
        } catch (error) {
            setmessage(error.response.data.message);
            console.log('Error:', error);
        }

        showAlert(true);
        setDisableButton(false);
    }
}

export default Home;
