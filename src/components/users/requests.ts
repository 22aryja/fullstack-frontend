import { user } from '@/services/requests/user';
import type { User } from '@/types/user';

export const getUsers = async () => {
    const response = await user.getUsers();
    return response;
};

export const createUser = async (newUser: Omit<User, 'id'>) => {
    const response = await user.createUser(newUser);
    return response;
};

export const editUser = async (params: {
    id: string;
    updatedUser: Omit<User, 'id'>;
}) => {
    const response = await user.editUser(params);
    return response;
};

export const deleteUser = async (id: string) => {
    const response = await user.deleteUser(id);
    return response;
};
