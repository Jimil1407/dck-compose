#!/bin/sh
set -e

# Wait for Postgres to be ready
until pg_isready -h "postgres" -U "postgres"; do
  echo "Waiting for postgres..."
  sleep 2
done

echo "Postgres is ready!"

# Run Prisma migration
npx prisma migrate dev

# Start the app
npm run dev:docker
