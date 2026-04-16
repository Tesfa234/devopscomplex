const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Main route
app.get('/', (req, res) => {
  res.send('Hello DevOps World!');
});

// Health check endpoint (useful for monitoring)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Only start server if not being required (for testing)
if (require.main === module) {
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}

module.exports = app; // Export for testing