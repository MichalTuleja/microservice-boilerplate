const { ServiceBroker } = require("moleculer");

const broker = new ServiceBroker({
    // nodeID: "node-hello",
    transporter: "nats://localhost:4222",
    logLevel: "info",
    requestTimeout: 5 * 1000
});

broker.createService({
    name: "pubsub",
    actions: {
        status(ctx) {
            console.log('Requested status by RPC!');
            return 'OK';
        }
    }
});

broker.start();

broker.waitForServices("pubsub")
    .then(() => {
        setInterval(() => {
            broker.call("test.hello", { param1: 'hello' })
                .then(res => console.log("status: ", res))
                .catch(err => {
                    console.error(`Error occured! ${err.message}`);
                });
        }, 1000);
    });
