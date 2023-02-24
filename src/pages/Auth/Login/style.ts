import styled, { DefaultTheme, createGlobalStyle, css } from 'styled-components';

const Wrapper = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: column;
    min-height: 100vh;

    section {
        border-radius: 5px;

        border: 1px solid #ccc;
        border-top: none;
        box-shadow: 0px 5px 0px 0px inset #2990a3;
        width: 300px;
        background: #fff;
    }

    .login-form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 25px;

        input {
            padding: 10px 10px;
            width: calc(100% - 20px);
            border-radius: 3px;
            border: 1px solid #ccc;
            margin: 10px 0px;

            &:focus {
                border: 1px solid #2990a3;
                outline: none;
            }
        }

        button {
            width: 100%;
            padding: 7px 6px;
            margin: 10px;
            background: #2990a3;
            color: #fff;
            cursor: pointer;
            border: 1px solid #2990a3;
            border-radius: 3px;
            &:hover {
                box-shadow: 1px 1px #2990a3;
            }

            &:disabled {
                opacity: 0.5;
                cursor: default;
                box-shadow: none;
            }
        }
    }
    .signup {
        background: #ececec;
        padding: 15px;
        font-size: 14px;
        text-align: center;
        opacity: 0.7;

        a {
            color: #000;
            font-weight: bold;
        }
    }
`;

export default Wrapper;
