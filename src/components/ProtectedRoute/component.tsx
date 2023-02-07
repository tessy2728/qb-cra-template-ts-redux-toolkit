import React from 'react';
import { Navigate } from "react-router-dom";
import { removeUserSession } from '../../core/utils/sessionHandler';
interface IProtectedRoute {
    isSignedIn: ()=>boolean;
    redirectPath:string;
    children:any;
}

const ProtectedRoute = ({
    isSignedIn,
    redirectPath = '/',
    children,
}:IProtectedRoute) => {
    console.log(document.cookie)
    if (!isSignedIn()) {
        removeUserSession();
        return <Navigate to={redirectPath} replace />;
    }
    return children;
};

export default ProtectedRoute;