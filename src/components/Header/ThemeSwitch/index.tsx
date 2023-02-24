

import * as React from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';
import { Radio } from '../../Radio';
import { LS } from '../../../store';
import { changeTheme, ThemeKeyType } from '../../../core/theme/slice';
import { selectThemeKey } from '../../../core/theme/slice/selectors';

export function ThemeSwitch() {
    const theme = useSelector(selectThemeKey);
    const dispatch = useDispatch();

    const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value as ThemeKeyType;
        LS.setToLS('theme', value);
        dispatch(changeTheme(value));
    };

    return (
        <Wrapper>
            <Themes>
                <Radio
                    id="light"
                    label="Light"
                    className="radio switch-field"
                    name="theme"
                    onChange={handleThemeChange}
                    value="light"
                    isSelected={theme === 'light'}
                />
                <Radio
                    id="dark"
                    label="Dark"
                    className="radio switch-field"
                    name="theme"
                    onChange={handleThemeChange}
                    value="dark"
                    isSelected={theme === 'dark'}
                />
            </Themes>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  .switch-field {
	display: flex;
	overflow: hidden;
}

.switch-field input {
	display:none

}

.switch-field label {
	color: ${p => p.theme.text};
	font-size: 14px;
	line-height: 1;
	text-align: center;
	padding: 8px 16px;
	border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 100px;
    background: transparent;
    border: none;
    box-shadow: none;
}

.switch-field label:hover {
	cursor: pointer;
}

.switch-field input:checked + label {
	background-color: ${p => p.theme.background};
	box-shadow: none;
    border-radius: 100px;
}
`;
const Themes = styled.div`
    display: flex;
    margin-right:10px;
	background-color: ${p => p.theme.backgroundVariant};
    border-radius:100px;
`;