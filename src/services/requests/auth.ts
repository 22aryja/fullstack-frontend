import type { Credentials, UserToken } from '@/types/auth';
import { axiosInstance } from '../axios/axiosInstance';

export const auth = {
    register: async (creds: Credentials): Promise<UserToken> => {
        try {
            const response: UserToken = await axiosInstance.post(
                '/api/auth/register',
                { creds }
            );
            return response;
        } catch (e) {
            throw new Error();
        }
    },
    login: async (creds: Credentials): Promise<UserToken> => {
        try {
            const response: UserToken = await axiosInstance.post(
                '/api/auth/login',
                { creds }
            );
            return response;
        } catch (e) {
            throw new Error();
        }
    },
};
