import React from 'react';
import logo from '../../logo.svg';
import { isLoggedIn } from '../../pages/Auth/helper'
import { logout } from '../../pages/Auth/slice';
import { showToaster } from '../../slices/toaster.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ThemeSwitch } from './ThemeSwitch';

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutSession = async () => {
        await dispatch<any>(logout());
        dispatch(showToaster({ message: 'Signed out successfully!', type: 'success', autoHideDuration: 5000 }))
        navigate('/');
    }
    return <header className='App-header'>
        <div className="App-title">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                React Boilerplate
            </p>
        </div>
        <div className='flex align-center'>
            <ThemeSwitch />
            {isLoggedIn() && <a className="App-link" onClick={logoutSession}>
                Logout
            </a>}
        </div>
    </header>;
}

export default Header;
