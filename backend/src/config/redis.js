const redis = require('redis');

const client = redis.createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379',
});

client.on('error', (err) => {
  console.error('❌ Redis error:', err);
});

client.on('connect', () => {
  console.log('✅ Redis connected');
});

(async () => {
  try {
    await client.connect();
  } catch (error) {
    console.error('❌ Failed to connect to Redis:', error);
  }
})();

module.exports = client;
