import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './NewsLetter.css';
import newsLetter from '../images/newsLetter.svg';
import { useCreateUserMutation } from '../apis'; 

const Newsletter = () => {
    const [slideIn, setSlideIn] = useState(false);
    const [email, setEmail] = useState('');
    const [createUser, { isLoading, isError, isSuccess }] = useCreateUserMutation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setSlideIn(true);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setSlideIn(false);
    };

    const handleSubscribe = async () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'Please enter a valid email address.',
            });
            return;
        }

        try {
            await createUser({ email }).unwrap(); // Make the API call
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: "You've subscribed to the newsletter!",
            }).then(() => {
                setEmail('');
                setSlideIn(false);
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'Failed to subscribe. Please try again later.',
            });
        }
    };

    return (
        <div className={`newsLetter2 ${slideIn ? 'slide-in' : ''}`}>
            <button className="close-btn" onClick={closePopup}>&times;</button>
            <h1>Newsletter</h1>
            <img src={newsLetter} alt="" />
            <div className="inputBtn2">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="subsBtn2" onClick={handleSubscribe} disabled={isLoading}>
                    {isLoading ? 'Subscribing...' : 'Subscribe'}
                </button>
            </div>
            {isError && <p className="error-message">Failed to subscribe. Please try again.</p>}
            {isSuccess && <p className="success-message">You've successfully subscribed!</p>}
        </div>
    );
};

export default Newsletter;
