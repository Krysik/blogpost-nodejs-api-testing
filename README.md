# nodejs-api-testing

This repository contains a basic nodejs application which exposes a REST API using the [fastify](https://fastify.dev) framework. The code is used as an example in my blog post about testing - [link](https://medium.com/@marcin_krysinski/setup-test-environment-for-the-nodejs-rest-api-application-and-database-02f181c4368a).

## Prerequisite

There are only two prerequisites. That is because I run every command within docker container.

- docker
- docker-compose

## How to run

1. Create a `.env` file based on the `.env.template` and fill in empty variables.
2. Install dependencies with `docker-compose run --rm app npm i`
3. Run the app with `docker-compose up app`

## Testing

You can run tests with `docker-compose run --rm app npm run test:integration -- --watch`. It runs mocha test runner in watch mode.

## Tech stack & tools

- node 20
- fastify
- typeorm
- mocha
- chai
- typescript
- swc
- docker
