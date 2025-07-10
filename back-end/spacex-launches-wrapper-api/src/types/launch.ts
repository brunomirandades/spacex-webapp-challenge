// launch type definition
export interface Launch {
    name: string;
    date_utc: string;
    details?: string;
    id: string;
    flight_number?: number;
    rocket?: string;
    success?: boolean;
    upcoming?: boolean;
    links?: {
        patch?: { small?: string; large?: string };
        webcast?: string;
        article?: string;
        wikipedia?: string;
    };
    [key: string]: unknown; // fallback for extra properties
}