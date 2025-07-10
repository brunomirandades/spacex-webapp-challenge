# 🚀 SpaceX Launches API Wrapper

This is a custom backend API built with Node.js and TypeScript that wraps the [SpaceX API](https://github.com/r-spacex/SpaceX-API) and provides simplified endpoints to retrieve launch data.

## 📦 Features

- Get the **next** upcoming launch
- Get the **previous** launch
- Get a **list of upcoming** launches
- Get a **list of past** launches
- Get a **summarized info pack** of launches (next, previous, 10 upcoming and 10 past launches)

## 🛠️ Tech Stack

- Node.js
- Express.js
- TypeScript
- Axios
- dotenv

## 📁 Project Structure

```bash
/spacex-wrapper-api/
├── src/
│ ├── controllers/ # Express route controllers
│ ├── routes/ # Express routes
│ ├── services/ # API service logic
│ ├── app.ts # Express app setup
│ └── server.ts # Server entry point
├── .env # Environment config
├── .gitignore
├── tsconfig.json
├── package.json
└── README.md
```

## 🔧 Setup Instructions

1. **Clone the repository**
    ```
    git clone https://github.com/your-username/spacex-wrapper-api.git
    cd spacex-wrapper-api
    ```

2. **Install dependencies**
    ```
    npm install
    ```

3. **Set environment variables**
    Create a '.env' file in the root directory:

    ```
    PORT=3000
    SPACEX_API=https://api.spacexdata.com/v5/launches
    ```

4. **Start the server**
    ```
    npm run dev
    ```
    The server will run on http://localhost:3000

## 🌐 API Endpoints

| Method | Endpoint             | Description                |
| ------ | -------------------- | -------------------------- |
| GET    | `/launches/next`     | Get the next launch        |
| GET    | `/launches/previous` | Get the most recent launch |
| GET    | `/launches/upcoming` | Get upcoming launches list |
| GET    | `/launches/past`     | Get past launches list     |
| GET    | `/launches/summary`  | Get packed data of above   |

## 🚀 Example Response
```
{
  "name": "Starlink 7-9",
  "date_utc": "2025-07-20T10:45:00.000Z",
  "details": "Starlink mission from Cape Canaveral...",
  ...
}
```