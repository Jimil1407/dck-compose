## Manual installation
- Install nodejs locally ()
- Clone the repo
- Install dependencies (npm install)
- Start the DB locally
  - docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
  - Go to neon.tech and get yourself a new DB
- Change the .env file and update your DB credentials
- npx prisma migrate
- npx prisma generate
- npm run build
- npm run start

## Docker installation
 - Install docker
 - Start a new network  'docker network create user-project'
 - Start postgres(docker run  --network user-project --name postgress -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres)
 - Build the image - 'docker build --network=host -t user-app .'
 - Start the image - 'docker run -e DATABASE_URL=postgresql://postgres:mysecretpassword@postgress:5432/postgres --network user-project -p 3000:3000 user-app'

 ## Docker Compose installation steps
 - Install docker, docker-compose
 - Run 'docker-compose up'

