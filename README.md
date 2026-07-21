# 🪐 Cosmic Solar Explorer & Space REST API

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-v20.11+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-v4.19+-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/HTML5_Canvas-ES6+-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/Security-Helmet_CORS-6366f1?style=for-the-badge&logo=shoppay&logoColor=white" alt="Security" />
</p>

An exceptionally polished, high-performance, and visually immersive 3D-styled **Solar System Space Simulator** powered by a production-ready **Node.js & Express.js REST API** backend service.

---

## 🌟 Key Features & Architecture Upgrades

### 1. 🪐 3D Spherical Radial Planet Gradients & Shadow Maps
- **Advanced Shading Physics**: Planets are styled with deep, multi-stop radial gradients (e.g., Earth transitions from bright `#93c5fd` to a midnight `#2563eb` ocean shadow) to simulate light falling directly from the Sun.
- **Glowing Atmospheric Rings**: Includes atmospheric color-glowing box shadows matching each planet’s unique visual spectrum (e.g., Martian red core glow, Saturnian gold double rings).
- **Light shadow-casting overlays**: Uses layered CSS pseudoclass overlays (`::after`) with linear transparent-to-black masks aligned at a `105deg` angle to simulate realistic dark sides facing away from the Sun.

### 2. ⚡ Crucial UX Fix: The Orbit Collision Solver
- **The Core Bug Solved**: Traditionally, layered CSS orbital rings overlap, blocking pointer events. This caused inner planets (Mercury, Venus, Earth, Mars) to become unclickable.
- **The Architect's Solution**: Integrated custom pointer interaction bounds:
  ```css
  .orbit { pointer-events: none; }  /* Allows click events to pass through empty orbit space */
  .planet { pointer-events: auto; } /* Restores target precision exclusively on the clickable bodies */
3. 🌐 Dynamic REST API & Fallback Core (Full-Stack Resilience)
RESTful Architecture: Serves planetary stats in real-time from a secure backend routing handler /api/v1/planets.
Fault-Tolerant Offline Cache: Implements an automatic local fallback dataset within the client script. If the server drops connections, the app instantly switches to a local copy—guaranteeing 100% application uptime, zero blank states, and absolute tolerance to server connection drops.
