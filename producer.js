const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'order-producer',
  brokers: ['localhost:9092'], // same as docker-compose config
});

const producer = kafka.producer();

async function run() {
  await producer.connect();

  for (let i = 1; i <= 10; i++) {
    const message = { orderId: i, item: `Item-${i}`, price: i * 100 };
    await producer.send({
      topic: 'orders',
      messages: [{ value: JSON.stringify(message) }],
    });
    console.log('✅ Sent:', message);
  }

  await producer.disconnect();
}

run().catch(console.error);
