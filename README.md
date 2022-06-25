# Fullstack APP

### Database, Backend & Frontend

- Typescript
- Node (Backend)
- React (Frontend)
- Postgres
- Docker

## Step 1

Setup a .env file @ project root folder. Sample:

```sh
DB_IMAGE=postgres
POSTGRES_PASSWORD=yourpassword
POSTGRES_USER=postgres
DB_ACCESS_PORT=5432
DB_INTERNAL_PORT=5432
```

## Step 2

Setup a .env file @ /backend folder. Sample:

```sh
DB=postgres
DB_USER=postgres
DB_HOST=db
DB_PASSWORD=yourpassword
DB_PORT=5432
BACKEND_PORT=3001
FRONTEND_PORT=3000
```

## Step 3

Run Docker Compose @ project root folder:

```sh
docker-compose up
```
