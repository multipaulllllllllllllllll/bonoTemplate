import { Hono } from 'hono';

// Create a new Hono app instance
const app = new Hono();

// --- Root Route Handler ---
app.get('/', (c) => {
  return c.text('Welcome to the Bun + Hono API!');
});

// --- Example API Endpoint ---
app.get('/api/health', (c) => {
  return c.json({
    status: 'ok',
    message: 'API is running smoothly',
    timestamp: new Date().toISOString(),
  });
});

// --- Example Parameter Route ---
app.get('/api/greet/:name', (c) => {
  const name = c.req.param('name') || 'Guest';
  return c.text(`Hello, ${name}! Welcome to the Hono API.`);
});

/**
 * Entry point to start the server.
 * Bun automatically handles the server startup when the script is executed.
 */
console.log('🚀 Starting server on http://localhost:3000');
export default app;