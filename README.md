# [Weather Demo]

## Installation

Weather app requires [Node.js](https://nodejs.org/) v10+ to run.

Pre-requirements:
- Docker:
  - Docker Desktop - https://www.docker.com/products/docker-desktop
  - Homebrew `brew install docker`
  - Chocolatey `choco install docker-cli`

We need to ensure that docker is installed on machine. And run script that will create postgres container

```sh
docker -v
npm run db:setup
```

Install the dependencies and start the server.

```sh
cp .env.example .env
npm i
npm start
```