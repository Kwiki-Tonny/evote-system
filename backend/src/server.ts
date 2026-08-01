// 1. Import the libraries
import Fastify from 'fastify';
import cors from '@fastify/cors';

// 2. Create the app instance
//    { logger: true } means we will see errors in the terminal.
const app = Fastify({ logger: true });

// 3. Register CORS so the frontend can talk to us
app.register(cors, { origin: '*' });

// 4. Define a "Route" (an endpoint)
//    When someone visits /api/health, run this function.
app.get('/api/health', async (request, reply) => {
  // Return a JSON object.
  // Fastify automatically turns this into text and sends it.
  return { status: 'OK', message: 'Evote Backend is running!' };
});

// 5. Start the server
const start = async () => {
  try {
    // Listen on port 4000. '0.0.0.0' means allow connections from anywhere.
    await app.listen({ port: 4000, host: '0.0.0.0' });
    console.log('Backend running on http://localhost:4000');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();