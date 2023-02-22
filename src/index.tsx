import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import AuthProvider from './contexts/auth';
import { RouterProvider } from 'react-router-dom';
import router from './pages/routes';
import Style from './style';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <AuthProvider>
            <React.StrictMode>
                <Style.GlobalStyle />
                <RouterProvider router={router} />
            </React.StrictMode>
        </AuthProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
