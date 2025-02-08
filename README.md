# Home Dashboard Server

Backend server for the Home Dashboard application built with Node.js, Express, MongoDB, and TypeScript.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory (use `.env.example` as template)
4. Build the TypeScript code:
   ```bash
   npm run build
   ```

## Development

To start the development server with hot-reload:
```bash
npm run dev
```

## Production

To build and start the production server:
```bash
npm run build
npm start
```

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build the TypeScript code
- `npm start`: Start production server
- `npm run lint`: Run ESLint
- `npm test`: Run tests

## Project Structure

```
src/
├── index.ts        # Application entry point
├── routes/         # API routes
├── models/         # Mongoose models
├── controllers/    # Route controllers
└── config/         # Configuration files
``` 