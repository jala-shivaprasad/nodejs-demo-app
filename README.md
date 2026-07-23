# Node.js Demo App

This project demonstrates a CI/CD pipeline using GitHub Actions.

## Technologies

- Node.js
- Express
- Docker
- GitHub Actions

## CI/CD Workflow

- Push code to GitHub
- GitHub Actions starts automatically
- Install dependencies
- Run tests
- Build Docker image
- Push image to Docker Hub

## Run Locally

Install dependencies

```bash
npm install
```

Start server

```bash
npm start
```

Visit

```
http://localhost:3000
```

Run tests

```bash
npm test
```

Build Docker Image

```bash
docker build -t nodejs-demo-app .
```

Run Docker Container

```bash
docker run -p 3000:3000 nodejs-demo-app
```
