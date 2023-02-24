import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectUserName } from '../Auth/slice/selectors';

const Home = () => {
    const name = useSelector(selectUserName);
    return <div className="flex flex-column">
        <h1 className="text-left">Welcome {name}!</h1>
        <Outlet />
    </div>;
};

export default Home;