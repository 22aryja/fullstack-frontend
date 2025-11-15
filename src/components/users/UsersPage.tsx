import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createUser, deleteUser, editUser, getUsers } from './requests';
import UserTable from './Table';

const UsersPage = () => {
    const queryClient = useQueryClient();

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: getUsers,
    });

    const refetch = () => {
        queryClient.invalidateQueries({ queryKey: ['users'] });
    };

    const { mutate: addUser } = useMutation({
        mutationFn: createUser,
        onSuccess: refetch,
    });

    const { mutate: updateUser } = useMutation({
        mutationFn: editUser,
        onSuccess: refetch,
    });

    const { mutate: removeUser } = useMutation({
        mutationFn: deleteUser,
        onSuccess: refetch,
    });

    return (
        <div className="w-full h-full flex p-16">
            <UserTable
                rows={users}
                onAdd={(newUser) => addUser(newUser)}
                onEdit={(user) => {
                    const { id, ...rest } = user;
                    updateUser({ id, updatedUser: rest });
                }}
                onDelete={(user) => {
                    removeUser(user.id);
                }}
            />
        </div>
    );
};

export default UsersPage;
