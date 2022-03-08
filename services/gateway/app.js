let { ServiceBroker } = require("moleculer");
let ApiService = require("moleculer-web");

let broker = new ServiceBroker({
    transporter: process.env.MESSAGE_BROKER || 'nats://localhost:4222',
    logLevel: "info",
    requestTimeout: 5 * 1000,
    logger: console,
});

// Create a service
broker.createService({
    name: "test",
    actions: {
        hello(request) {
            console.log(request.params);
            return "Hello from API Gateway!";
        },
        add(ctx) {
            return broker.call(
                "math.add", { 
                    a: Number(ctx.params.a), 
                    b: Number(ctx.params.b) 
                });
        },
    }
});

// Load API Gateway
broker.createService(ApiService);

// Start server
broker.start().then(() => broker.waitForServices("math")).then(() => broker.call("math.add", { a: 5, b: 3 }))
.then(res => console.log("5 + 3 =", res))
.catch(err => console.error(`Error occurred! ${err.message}`));

broker.waitForServices("pubsub").then(() => broker.call("pubsub.status", {  }))
.then(res => console.log("status: ", res))
.catch(err => console.error(`Error occurred! ${err.message}`));
