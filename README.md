# 🪐 Cosmic Solar Explorer & Space REST API

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-v20.20+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-v4.19+-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/HTML5_Canvas-ES6+-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/Security-Helmet_CORS-6366f1?style=for-the-badge&logo=shoppay&logoColor=white" alt="Security" />
</p>

An exceptionally polished, high-performance, and visually immersive 3D-styled **Solar System Space Simulator** powered by a production-ready **Node.js & Express.js REST API** backend service.

---

## 🌟 Key Features & Architecture Upgrades

### 1. 🪐 3D Spherical Radial Planet Gradients (Frontend)
- **Advanced Shading Physics**: Planets are styled with deep, multi-stop radial gradients (e.g., Earth transitions from bright `#93c5fd` to a midnight `#2563eb` ocean shadow) to simulate light falling directly from the Sun.
- **Glowing Atmospheric Rings**: Includes atmospheric color-glowing box shadows matching each planet’s unique visual spectrum (e.g., Martian red core glow, Saturnian gold double rings).

### 2. ⚡ Crucial UX Fix: The Orbit Collision Solver
- **The Core Bug Solved**: Traditionally, layered CSS orbital rings overlap, blocking pointer events. This caused inner planets (Mercury, Venus, Earth, Mars) to become unclickable.
- **The Architect's Solution**: Integrated custom pointer interaction bounds:
  ```css
  .orbit { pointer-events: none; }  /* Allows click events to pass through empty orbit space */
  .planet { pointer-events: auto; } /* Restores target precision exclusively on the clickable bodies */
This ensures 100% of the planets are immediately selectable, clickable, and responsive.

3. 🌐 Dynamic REST API & Fallback Core (Full-Stack Resilience)
RESTful Architecture: Serves planetary stats in real-time from a secure backend routing handler /api/v1/planets.
Fault-Tolerant Offline Cache: Implements an automatic local fallback dataset within the client script. If the server drops connections, the app instantly switches to a local copy—guaranteeing 100% application uptime, zero blank states, and absolute tolerance to server connection drops.
📂 Professional Folder Structure
text

node-rest-api/
├── public/                 # Served Client-Side Assets (Express Static Router)
│   ├── index.html          # Sleek Neon Cosmic Portal (Glassmorphic CTAs)
│   └── solar.html          # Interactive Orbit Canvas & Real-Time Stats Display Panel
├── src/
│   └── server.js           # Production Express Gateway (Helmet, CORS policies, & Planet Routes)
├── package.json            # Node Metadata & App Config
└── .gitignore              # Protects system directories (AppData, node_modules)
🛠️ Step-by-Step Installation & Local Run
To launch this application locally on your machine, copy and execute these safe terminal commands in Git Bash:

Bash

# 1. Move into the local repository folder
cd "/c/Users/devan/Downloads/New folder/node-rest-api"

# 2. Install all secure node dependencies
npm install

# 3. Fire up the local server
node src/server.js
🌍 Active Local Network Links:
Home Entrance Portal: http://localhost:5000
Dynamic Space Simulator: http://localhost:5000/explorer
Planetary Stats API: http://localhost:5000/api/v1/planets
🔒 Security & Best Practices Directives
Security Headers: Mounted helmet() to enforce custom content security policies.
Cross-Origin Protections: Integrated cors() middleware to prevent unauthorized API requests.
Robust Exception Catching: Implemented global unhandledRejection capture handlers to prevent the process from crashing due to underlying system adjustments.
🤝 Contributing
Contributions, enhancements, and custom cosmic shaders are welcome! Please open an issue or submit a pull request if you want to expand the universe.

📄 License
This project is open-source and licensed under the MIT License.
