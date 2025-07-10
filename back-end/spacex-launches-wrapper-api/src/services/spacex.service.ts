import axios from 'axios';
import dotenv from 'dotenv';
import { Launch } from '../types/launch';

dotenv.config();

// space x info api
const baseURL = process.env.SPACEX_API;
if (!baseURL) {
    throw new Error('SPACEX_API URL environment variable not set or invalid');
}

// fetch helper function
async function fetchLauch<T>(endpoint: string): Promise<T> {
    try {
        const { data } = await axios.get<T>(`${baseURL}/${endpoint}`);
        return data;
    } catch (error) {
        console.error(`Failed to fetch ${endpoint}:`, error);
        throw new Error(`Unable to fetch SpaceX launch data from ${endpoint}`);
    }
}

// funcs to get launches info
// get next launch
export const getNextLaunch = (): Promise<Launch> => {
    return fetchLauch<Launch>('next');
};

// get previous launch
export const getPreviousLaunch = (): Promise<Launch> => {
    return fetchLauch<Launch>('latest');
};

// get upcoming launches
export const getUpcomingLaunches = (): Promise<Launch[]> => {
    return fetchLauch<Launch[]>('upcoming');
};

//get past launches
export const getPastLaunches = (): Promise<Launch[]> => {
    return fetchLauch<Launch[]>('past');
};