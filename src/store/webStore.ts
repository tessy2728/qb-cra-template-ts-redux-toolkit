import { isEmpty } from '../core/utils/utils';

export class LS {
    static setToLS = (name: string, value: string) => {
        if (window.localStorage && !isEmpty(name)) {
            window.localStorage.setItem(name, value);
            return true;
        }
        return false;
    }
    static getFromLS = (name: string) => {
        if (window.localStorage && !isEmpty(name)) {
            return window.localStorage.getItem(name);
        }
        return undefined;
    }
    static removeFromLS = (name: string) => {
        if (window.localStorage && !isEmpty(name)) {
            return window.localStorage.removeItem(name);
        }
    }
    static clear = () => {
        if (window.localStorage) {
            return window.localStorage.clear();
        }
    }
}

export class SS {
    static setToSS = (name: string, value: string) => {
        if (window.sessionStorage && !isEmpty(name)) {
            window.sessionStorage.setItem(name, value);
            return true;
        }
        return false;
    }
    static getFromSS = (name: string) => {
        if (window.sessionStorage && !isEmpty(name)) {
            return window.sessionStorage.getItem(name);
        }
        return undefined;
    }
    static removeFromSS = (name: string) => {
        if (window.sessionStorage && !isEmpty(name)) {
            return window.sessionStorage.removeItem(name);
        }
    }
    static clear = () => {
        if (window.sessionStorage) {
            return window.sessionStorage.clear();
        }
    }
}