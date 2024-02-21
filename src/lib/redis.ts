import { Redis } from '@upstash/redis';

export const redis = new Redis({
  url: 'https://us1-fine-kangaroo-39288.upstash.io',
  token: process.env.REDIS_KEY!,
})
