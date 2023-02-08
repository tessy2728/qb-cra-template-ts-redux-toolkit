import React from 'react';
import logo from '../../logo.svg';
import { isLoggedIn } from '../../core/utils/sessionHandler'
import { logout } from '../../slices/auth.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutSession = () => {
        dispatch<any>(logout());
        navigate('/');
    }
    return <header className='App-header'>
        <div className="App-title">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                React Boilerplate
            </p>
        </div>

        {isLoggedIn() && <a className="App-link" onClick={logoutSession}>
            Logout
        </a>}
    </header>;
}

export default Header;
