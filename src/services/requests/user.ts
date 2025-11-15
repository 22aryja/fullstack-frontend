import type { User } from '@/types/user';
import { axiosInstance } from '../axios/axiosInstance';

export const user = {
    getUsers: async (): Promise<User[]> => {
        try {
            const response: User[] = await axiosInstance.get('/api/users');
            return response;
        } catch (e) {
            throw new Error();
        }
    },
    getUser: async (id: string): Promise<User> => {
        try {
            const response: User = await axiosInstance.get(`/api/users/${id}`);
            return response;
        } catch (e) {
            throw new Error();
        }
    },
    createUser: async (newUser: Omit<User, 'id'>): Promise<User> => {
        try {
            const response: User = await axiosInstance.post('/api/users', {
                ...newUser,
            });
            return response;
        } catch (e) {
            throw new Error();
        }
    },
    editUser: async ({
        id,
        updatedUser,
    }: {
        id: string;
        updatedUser: Omit<User, 'id'>;
    }): Promise<User> => {
        try {
            const response: User = await axiosInstance.put(`/api/users/${id}`, {
                ...updatedUser,
            });
            return response;
        } catch (e) {
            throw new Error();
        }
    },
    deleteUser: async (id: string): Promise<User> => {
        try {
            const response: User = await axiosInstance.delete(
                `/api/users/${id}`
            );
            return response;
        } catch (e) {
            throw new Error();
        }
    },
};
