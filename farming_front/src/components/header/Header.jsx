import React, { useState } from 'react';
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
// import SchemePage from '../SchemePage'; // Adjust the path accordingly
// import AddSchemeForm from '../AddSchemeForm'; // Adjust the path accordingly

const Header = () => {
    // const [showForm, setShowForm] = useState(false);
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    }

    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src='./farm1.png' alt='logo' width={70} style={{ border: '3px solid grey' }} />
                {auth ? (
                    <div className="flexCenter h-menu">
                        <Link to="/home">Services</Link>
                        <Link to="/scheme">Schemes</Link>
                        <Link to="/loans">Loans</Link>
                        <Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link>
                    </div>
                ) : (
                    <div className='nav-ul nav-right'>
                        <li><Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </div>
                )}
                {/* {showForm ? <AddSchemeForm /> : <SchemePage />}
                <button onClick={() => setShowForm(!showForm)}>Add New Scheme</button> */}
            </div>
        </section>
    )
}

export default Header;
