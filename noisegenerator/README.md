# NoiseGenerator | `/generators/noisegenerator.js`

> A resolution-independent, customizable procedural noise canvas generator. Ideal for creating grit, concrete, or stone textures

---

## CDN Import Link

```html
<script src="https://cdn.jsdelivr.net/gh/MrBobertus/web-utils/generators/noisegenerator.js"></script>
```

API Reference

```js
generateNoise(width, height, density, background, pixelcolor, backgroundvisibility, randompixelopacity)
```

Generates and returns an HTMLCanvasElement containing the procedural noise.

| Parameter              | Type    | Default           | Description                                                                     |
| :--------------------- | :------ | :---------------- | :------------------------------------------------------------------------------ |
| `width`                | Integer | *Required*        | The internal resolution width of the canvas.                                    |
| `height`               | Integer | *Required*        | The internal resolution height of the canvas.                                   |
| `density`              | Float   | `0.5`             | The percentage of pixel coverage (from `0.0` for empty to `1.0` for solid).     |
| `background`           | String  | `"255, 255, 255"` | The background color formatted as `"R, G, B"`.                                  |
| `pixelcolor`           | String  | `"0, 0, 0"`       | The noise pixel color formatted as `"R, G, B"`.                                 |
| `backgroundvisibility` | Boolean | `true`            | Set to `false` to make the canvas background fully transparent.                 |
| `randompixelopacity`   | Boolean | `true`            | Set to `false` to make noise pixels 100% solid instead of randomized opacities. |

Usage Examples

**Example A: **Standard 2D Canvas (Drawing on a background)

```js
// Generate a 128x128 red noise canvas
const noiseCanvas = generateNoise(128, 128, 0.15, "0,0,0", "255,0,0", false, true);

// Draw it directly onto your webpage's main canvas
mainContext.drawImage(noiseCanvas, 0, 0);
```

**Example B:** Three.js Integration (Applying to a 3D Material)

Because the function returns a raw canvas, Three.js developers can instantly
wrap it in a 3D texture:

```js
// 1. Generate a transparent, dark-grit noise canvas
const noiseCanvas = generateNoise(64, 64, 0.15, "0,0,0", "0,0,0", false, true);

// 2. Wrap it directly in a CanvasTexture
const noiseTexture = new THREE.CanvasTexture(noiseCanvas);
noiseTexture.wrapS = THREE.RepeatWrapping;
noiseTexture.wrapT = THREE.RepeatWrapping;
noiseTexture.repeat.set(5, 5);

// 3. Apply it to any colored material as an overlay!
const material = new THREE.MeshStandardMaterial({
  color: 0x007aff, // Nice blue base
  map: noiseTexture, // Gritty noise overlay
  roughness: 0.9
});
```
