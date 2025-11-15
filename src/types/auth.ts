export interface AppUser {
    id: string;
    username: string;
    password: string;
}

export interface UserToken {
    username: string;
    token: string;
}

export type Credentials = Omit<AppUser, 'id'>;
