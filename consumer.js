const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'order-consumer',
  brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'order-group' });

async function run() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'orders', fromBeginning: true });

  console.log('👂 Listening for messages...');
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        topic,
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
}

run().catch(console.error);
