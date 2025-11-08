import type { GitHubReponse } from '@/types/github';
import { axiosInstance } from '../axios/axiosInstance';

export const githubApi = {
    getRepos: async (keyword: string): Promise<GitHubReponse> => {
        try {
            const response: GitHubReponse = await axiosInstance.get(
                `https://api.github.com/search/repositories?q=${keyword}`
            );
            return response;
        } catch (e) {
            throw new Error();
        }
    },
};
