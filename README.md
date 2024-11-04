# nodejs-api-testing

This repository contains a basic nodejs application which exposes a REST API using the [fastify](https://fastify.dev) framework. The code is used as an example in my blog post about testing - [link]().

## Prerequisite

There are only two prerequisites. That is because I run every command within docker container.

- docker
- docker-compose

## How to run

1. Create a `.env` file based on the `.env.template` and fill in empty variables.
2. Install dependencies with `docker-compose --rm app npm i`
3. Run the app with `docker-compose up app`
4. You can run tests with `docker-compose --rm app npm run test:integration -- --watch`

## Tech stack & tools

- node 20
- fastify
- typeorm
- mocha
- chai
- typescript
- swc
- docker
