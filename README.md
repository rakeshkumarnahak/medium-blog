# Medium-like Blog Application

Welcome to my Medium-like Blog Application! This project is a full-stack blogging platform built with a serverless backend using Cloudflare, Hono, Prisma, and PostgreSQL, with React handling the frontend. All the code is written in TypeScript to keep things type-safe and scalable.

## Tech Stack

- **Frontend**: React (TypeScript)
- **Backend**: Serverless with Cloudflare Workers using Hono framework
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Languages**: TypeScript (for both backend and frontend)

## Project Structure

```bash
.
├── backend/
│   ├── src/
│   └── prisma/
├── frontend/
│   └── src/
├── .env.sample
├── wrangler.sample.toml
└── README.md
```

## Environment Variables

You need to set up the following environment variables for the application to run:

- Since .env and wrangler.toml files contain sensitive information, they are not included in this repository. However, I have provided sample files that you can use to configure your environment.

1. **.env**: This is a sample of your environment variables. To set up your .env file, copy .env.sample to .env and replace the placeholder values with your own. This is your direct database link and is used for connecting to your PostgreSQL.

   ```env
   DATABASE_URL="Direct database link"
   ```



2. **wrangler.toml**: Similarly, copy wrangler.sample.toml to wrangler.toml and fill in the necessary configuration for your Cloudflare Workers. 

   ```toml
   [vars]
   DATABASE_URL = "Your_connection_pool_link"
   JWT_SECRET = "your_jwt_secret"
   ```

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/your-repository.git
   cd your-repository
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

## Usage

1. **Set up the Database**: This project uses PostgreSQL as the database. Make sure to update your .env file with your database connection URL. Once that's done, you can run Prisma migrations to set up the schema.

   ```sh
   # In the backend directory
   npx prisma migrate deploy

   ```

- You will also need to create a client for interacting with the backend. Ensure you have the Prisma Client set up by generating it:

  ```sh
  # In the backend directory
  npx prisma generate

  ```

2. **Frontend**: To start the React development server, run:

   ```sh
   npm start
   ```

3. **Backend**: To deploy your serverless functions, make sure you have the Cloudflare Wrangler CLI installed, then run:

   ```sh
   wrangler publish
   ```

````
