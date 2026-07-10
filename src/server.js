const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');

dotenv.config();

const app = express();

// Set security headers (relaxed slightly to allow inline CSS/JS scripting on the client)
app.use(helmet({
  contentSecurityPolicy: false
}));
app.use(cors());
app.use(express.json());

// Serve static assets from the public folder
app.use(express.static(path.join(__dirname, '../public')));

// 🪐 Planet REST API Endpoint
app.get('/api/v1/planets', (req, res) => {
  const planets = [
    { name: "Mercury", temp: "167°C", moons: 0, funFact: "The smallest planet and closest to the Sun." },
    { name: "Venus", temp: "464°C", moons: 0, funFact: "The hottest planet in our solar system, with a thick toxic atmosphere." },
    { name: "Earth", temp: "15°C", moons: 1, funFact: "Our home planet, and the only known planet hosting life." },
    { name: "Mars", temp: "-65°C", moons: 2, funFact: "Known as the Red Planet due to iron oxide rust on its surface." },
    { name: "Jupiter", temp: "-110°C", moons: 95, funFact: "The largest planet in the solar system, with a giant red storm." },
    { name: "Saturn", temp: "-140°C", moons: 146, funFact: "Famous for its spectacular, highly-visible ring system." },
    { name: "Uranus", temp: "-195°C", moons: 28, funFact: "An ice giant that rotates completely on its side." },
    { name: "Neptune", temp: "-200°C", moons: 16, funFact: "The windiest planet in our solar system, with supersonic winds." }
  ];
  
  res.status(200).json({
    success: true,
    count: planets.length,
    data: planets
  });
});

// Explicit route to load the interactive Solar system
app.get('/explorer', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/solar.html'));
});

// Catch-all route to serve the Home portal index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Space Explorer Server running on port ${PORT}`);
  console.log(`🌍 Home Portal: http://localhost:${PORT}`);
  console.log(`🪐 Solar System Explorer: http://localhost:${PORT}/explorer`);
});
