import React, { FC, useEffect, useState } from "react";
import { AlertDiv } from './styles';
import * as colors from "../../core/config/colors";

const CustomAlert: FC<{ type?: string; title?: string; message?: string; autoHideDuration?: number, clearAlert: () => void }> = ({ type, title, message, autoHideDuration, clearAlert }) => {

    const [state, setState] = useState({ bgColor: colors.LIGHT_GREEN, textColor: colors.DARK_GREEN })
    const [autoHideSeconds, setAutoHideSeconds] = useState(5);
    useEffect(() => {
        if (autoHideDuration) {
            if (autoHideSeconds > 0) {
                setTimeout(() => {
                    setAutoHideSeconds(autoHideSeconds - 1);
                }, 1000);
            } else
                clearAlert && clearAlert();
        }
    }, [autoHideSeconds])

    useEffect(() => {
        autoHideDuration && setAutoHideSeconds(autoHideDuration / 1000)
    }, [autoHideDuration])

    const getTextColor = () => {
        switch (type) {
            case 'error': return { bgColor: colors.LIGHT_RED, textColor: colors.DARK_RED };
            case 'info': return { bgColor: colors.LIGHT_BLUE, textColor: colors.DARK_BLUE };
            case 'warning': return { bgColor: colors.LIGHT_ORANGE, textColor: colors.DARK_ORANGE };
            case 'success':
            default:
                return { bgColor: colors.LIGHT_GREEN, textColor: colors.DARK_GREEN };
        }
    }

    const getIcon = () => {
        switch (type) {
            case 'error': return '/images/exclamation-circle.svg';
            case 'info': return '/images/information-circle.svg';
            case 'warning': return '/images/exclamation-triangle.svg';
            case 'success':
            default:
                return '/images/tick.svg';
        }
    }

    useEffect(() => {
        setState(getTextColor());
    }, [type])

    return <>{(!autoHideDuration || (autoHideDuration && autoHideSeconds) > 0) ? <AlertDiv role="alert" {...state}>
        <img src={getIcon()} alt="message" className="alert-icon" />
        <span className="alert-message">{message}</span>
    </AlertDiv> : <></>}</>
}

export default CustomAlert