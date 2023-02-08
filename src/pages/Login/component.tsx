import React, { useEffect, useState, FC, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signIn } from '../../slices/auth.slice';
import { DefaultStore } from '../../store/interfaces/store';
import Wrapper from './style';
import Loader from '../../components/Loader';

const LoginComponent: FC<any> = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isSignedIn, loading, loginError } = useSelector((state: DefaultStore) => state.user);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (isSignedIn) {
            setPassword('');
            navigate('/home/articles');
        }
    }, [isSignedIn]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await dispatch<any>(signIn({ email, password }));
        if(res.payload.status === 200) {
            setPassword('');
            navigate('/home/articles');
        }
    };

    return (
        <Wrapper {...props}>
            {!loading && <section>
                <form className="login-form" onSubmit={onSubmit}>
                    <h1>Welcome to FEED!</h1>
                    <input
                        autoFocus
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        onChange={onChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={onChange}
                    />
                    <button type="submit" disabled={!email || !password}>
                        Sign in
                    </button>
                </form>
                <p className="error">{loginError}</p>
                <div className="signup">
                    Don&apos;t have an account? <a href="/signup">Sign up</a>
                </div>
            </section>}
            {loading && <Loader />}
        </Wrapper>
    );
};

export default LoginComponent;
