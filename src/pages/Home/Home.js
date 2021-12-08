import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFIrebase';
import homeImg from '../../images/homeImg.jpg'

const Home = () => {
    const { logOut, user } = useFirebase()
    return (
        <div className="text-center mt-5">
            {user?.email && <h2 className="text-uppercase text-info">Logged in user: {user?.displayName}</h2>}
            <div>
                <img src={homeImg} alt="" />
            </div>
            {user?.email ?
                <button onClick={logOut} className="btn btn-danger w-25">Log Out</button>
                :
                <div>
                    <Link to="/signIn">
                        <button className="btn btn-outline-primary me-3 w-25">Sign In</button>
                    </Link>
                    <Link to="/signUp">
                        <button className="btn btn-outline-primary w-25">Sign Up</button>
                    </Link>
                </div>
            }
        </div>
    );
};

export default Home;