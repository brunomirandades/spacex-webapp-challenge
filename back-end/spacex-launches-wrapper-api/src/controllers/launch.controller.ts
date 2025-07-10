import { Request, Response } from 'express';
import * as spacexService from '../services/spacex.service';

// endpoint for next launch
export const getNext = async (_req: Request, res: Response) => {
    const nxtLaunch = await spacexService.getNextLaunch();
    res.json(nxtLaunch);
};

// endpoint for previous launch
export const getPrevious = async (_req: Request, res: Response) => {
    const prevLaunch = await spacexService.getPreviousLaunch();
    res.json(prevLaunch);
};

// endpoint for upcoming launches
export const getUpcoming = async (_req: Request, res: Response) => {
    const upcLaunches = await spacexService.getUpcomingLaunches();
    res.json(upcLaunches);
};

// endpoint for past launches
export const getPast = async (_req: Request, res: Response) => {
    const pstLaunches = await spacexService.getPastLaunches();
    res.json(pstLaunches);
};

// endpoint for the summarized info
export const getSummary = async (_req: Request, res: Response) => {
    try {
        const [next, previous, upcoming, past] = await Promise.all([
            spacexService.getNextLaunch(),
            spacexService.getPreviousLaunch(),
            spacexService.getUpcomingLaunches(),
            spacexService.getPastLaunches(),
        ]);

        res.json({
            next,
            previous,
            upcoming: upcoming.slice(0, 10),    // the 10 most recent upcoming launches
            past: past.slice(-10).reverse(),    // the last 10 from the past launches at the end of the list (most recent)
        });
    } catch (err) {
        console.error('Error fetching launch summary:', err);
        res.status(500).json({ error: 'Failed to load launch summary' });
    }
};