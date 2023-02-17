import React from 'react';
import '../App.css';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import Alert from '../components/Alert';
import { isObject } from '../core/utils/utils';
import { DefaultStore } from '../store/interfaces/store';
import { hideToaster } from '../slices/toaster.slice';
import { useDispatch } from 'react-redux';

function AppLayout() {
    const alertConfig = useSelector((state: DefaultStore) => state.toaster);
    console.log(alertConfig)
    const dispatch = useDispatch();
    return (
        <div className="App">
            <Header />
            <main className="container">
                {isObject(alertConfig) && alertConfig.message && <Alert {...alertConfig} clearAlert={() => dispatch(hideToaster())}></Alert>}
                <Outlet />
            </main>
        </div>
    );
}

export default AppLayout;
