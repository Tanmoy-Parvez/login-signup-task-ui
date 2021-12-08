import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFIrebase';
import welcomeImg from '../../images/welcome.jpg'

const DummyPage = () => {
    const { user } = useFirebase()
    return (
        <div className="text-center">
            <div className="d-flex justify-content-center">
                <img src={welcomeImg} alt="" className="img-fluid" />
            </div>
            <Link to="/home">
                <button className="btn btn-outline-primary mt-3">Back to Home</button>
            </Link>
        </div>
    );
};

export default DummyPage;