import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import Alert from '../components/Alert';
import { isObject } from '../core/utils/utils';
import { RootState } from '../store/interfaces/store';
import { hideToaster } from '../slices/toaster.slice';
import { useDispatch } from 'react-redux';

function AppLayout() {
    const alertConfig = useSelector((state: RootState) => state.toaster);
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
