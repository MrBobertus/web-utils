# WEB-UTILS | Lightweight Vanilla JavaScript Toolkit

> A collection of highly-optimized, dependency-free vanilla JavaScript utilities. Built by [MRB Labs](https://github.com/MrBobertus)

[![CDN](https://img.shields.io/badge/CDN-jsDelivr-orange?style=for-the-badge&logo=jsdelivr)](https://cdn.jsdelivr.net/gh/MrBobertus/web-utils/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](https://github.com/MrBobertus/web-utils/blob/main/LICENSE)

---

## Features

* **Zero Dependencies** - pure vanilla JavaScript with no bloated external packages
* **Isolated Namespacing** - wrapped in IIFE structures so variables never conflict with your other scripts
* **High Performance** - engineered with flat memory allocations to avoid garbage collection stutters
* **Instant CDN Delivery** - load any tool directly into your HTML file via jsDelivr
* **Modular Design** - load only the specific utility folders you actually need for your project

---

## Available Utilities

| Utility Folder | Description | CDN Script Link |
| :--- | :--- | :--- |
| `/deltatime` | High-precision, frame-rate independent delta timer | [Load Script](https://cdn.jsdelivr.net/gh/MrBobertus/web-utils/deltatime/deltatime.js) |

---

## Quick Start Example: `/deltatime`

To load the delta-time utility directly into your browser-based game or animation loop:

```html
<!-- 1. Load the utility via the jsDelivr CDN -->
<script src="https://cdn.jsdelivr.net/gh/MrBobertus/cozy-utils/deltatime/deltatime.js"></script>

<script>
  function render(timestamp) {
    requestAnimationFrame(render);

    // 2. Update the timer with the browser's high-res timestamp
    DeltaTime.update(timestamp);

    // 3. Get the precise, smoothed delta time in seconds
    const dt = DeltaTime.get();

    // Use 'dt' to scale your movement smoothly
    myElement.position.x += speed * dt;
  }
  
  render();
</script>
