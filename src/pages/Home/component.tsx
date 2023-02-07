import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import { DefaultStore } from '../../store/interfaces/store';

const Home = () => {
    const { name } = useSelector((state: DefaultStore) => state.user);
    return <div className="flex flex-column">
        <h1 className="text-left">Welcome {name}!</h1>
        <Outlet />
    </div>;
};

export default Home;