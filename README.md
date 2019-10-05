# Microservice test

The project consists of multiple microservices.

- Node.js Gateway
- Node.js Hello World

## More is coming!

- Node.js MongoDB based storage API
- GoLang Hello World
- Python Hello World

## How to run

### Development mode

First you need to have [NATS](https://github.com/nats-io/nats-server) server running.

```
docker run -d --name nats-main -p 4222:4222 -p 6222:6222 -p 8222:8222 nats
```

### "Production" mode

Let's make it clear: this project is just for demonstration purposes and does not provide any production value as such.

It does contain all files and configs needed to run it in production enviroment.

It requires Docker as a default run-time enviroment.

```
docker-compose up
```

## Copyright and license

Copyright (c) 2019 [Michal Tuleja](http://tuleja.net).

Code released under the [MIT License](./LICENSE).