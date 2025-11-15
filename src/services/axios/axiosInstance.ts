import axios, { type AxiosInstance, type AxiosResponse } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});

axiosInstance.interceptors.response.use(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (response: AxiosResponse<any, any>) => response.data,
    (error: unknown) => console.error('Response error', error)
);
