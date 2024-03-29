const { ServiceBroker } = require("moleculer");

const broker = new ServiceBroker({
    transporter: process.env.MESSAGE_BROKER || 'nats://localhost:4222',
    logLevel: "info",
    requestTimeout: 5 * 1000
});

broker.createService({
    name: "math",
    actions: {
        add(ctx) {
            console.log('Hit add!');
            return Number(ctx.params.a) + Number(ctx.params.b);
        }
    }
});

broker.start();
