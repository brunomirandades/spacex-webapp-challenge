
export interface Launch {
  id: string;
  name: string;
  date_utc: string;
  date_unix?: number;
  date_local?: string;
  flight_number: number;
  upcoming: boolean;
  success: boolean | null;
  details?: string | null;
  links?: {
    patch?: {
      small?: string;
      large?: string;
    };
    webcast?: string;
    youtube_id?: string;
    wikipedia?: string;
  };
  rocket?: string;
  launchpad?: string;
  payloads?: string[];
  crew?: object[];
  ships?: string[];
  capsules?: string[];
  cores?: object[];
  failures?: object[];
  fairings?: {
    reused?: boolean;
  } | null;
  static_fire_date_utc?: string | null;
  net?: boolean;
  auto_update?: boolean;
  tbd?: boolean;
  launch_library_id?: string;
  date_precision?: string;
}

export interface LaunchSummary {
  next: Launch;
  previous: Launch;
  upcoming: Launch[];
  past: Launch[];
}