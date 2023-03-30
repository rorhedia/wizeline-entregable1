const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'aplicacion-baz',
  brokers: ['localhost:9092']
});

const producer = kafka.producer();

const run = async () => {
  await producer.connect();
  for (let i=0; i<20; i++){
    await producer.send({
      topic: 'topico-uno',
      messages: [
        { value: 'Publicación ' + i },
      ],
    });
  };
}

run().catch(console.error)