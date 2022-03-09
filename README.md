# Microservice Boilerplate

This project consists of several microservices. These microservices can be easily adjusted to perform various logic using plain JavaScript.

- [x] Node.js Gateway
- [x] Node.js Methods (RPC based)
- [x] Node.js Pub/Sub (Event based)
- [ ] Node.js TypeScipt
- [ ] Python Hello World

## How to run

### Development

A message broker has to be available to establish a connection between services. Moleculer supports multiple message brokers, including [NATS](https://github.com/nats-io/nats-server) and [Redis](https://redis.io). 

In this example, NATS will be used.

```
docker run -d --name nats-main -p 4222:4222 -p 6222:6222 -p 8222:8222 nats
```

The application needs to know what URL is the message broker.

```
export MESSAGE_BROKER=nats://localhost:4222
```

Now you can run your services.

```
cd services/gateway
node app.js
```

### Production with `docker-compose`

This project contains all files and configs needed to run your code in the production environment.

It requires [Docker](https://docker.io) with `docker-compose` scripts.

#### 

Running it requires the following command:

```
docker-compose up
```

Containers are built during the initial run. To rebuild the application, please run `docker-compose build`. This step is necessary when the source code or dependencies are changed.

```
docker-compose down
```

## License

This project is available under the [MIT License](./LICENSE). It also includes external libraries that are available under a variety of licenses. See LICENSE for the full license text.

Copyright (c) 2019 [Michal Tuleja](http://tuleja.net).