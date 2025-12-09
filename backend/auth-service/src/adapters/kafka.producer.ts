import { Kafka } from 'kafkajs';
import config from '../config';

const kafka = new Kafka({
  clientId: config.kafka.clientId,
  brokers: config.kafka.brokers
});

export const producer = kafka.producer();

export async function connectProducer() {
  await producer.connect();
}

export async function publishUserCreated(payload: { userId: string; email: string }) {
  await producer.send({
    topic: 'user.created',
    messages: [{ key: payload.userId, value: JSON.stringify(payload) }]
  });
}
