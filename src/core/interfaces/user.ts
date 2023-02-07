export interface LoginPayload {
    username: string;
    password: string;
}

export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    emailVerified?: boolean;
    emailHash?: string;
    passwordLastUpdated?: any;
    lastLogin?: Date;
    phone?: any;
    email: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface UserAuth {
    name: string;
    accessToken: string;
    isSignedIn?: boolean;
    loading?: boolean;
    loginError?: string;
    userDetails?: any;
}
