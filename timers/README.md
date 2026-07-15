# DeltaTime | `/timers/deltatime.js`

> A high-precision, frame-rate independent delta timer for smooth, consistent browser animations

---

## CDN Import Link

```html
<script src="https://cdn.jsdelivr.net/gh/MrBobertus/web-utils/timers/deltatime.js"></script>
```

API Reference

```js
DeltaTime.update(timestamp)
```

Updates the internal clocks. Pass the high-resolution timestamp automatically
provided by the browser's requestAnimationFrame loop.

```js
DeltaTime.get()
```

Returns the calculated delta time (the duration of the current frame in seconds,
e.g., 0.016 at 60 FPS).

---

## Usage Example

```html
<script src="https://cdn.jsdelivr.net/gh/MrBobertus/web-utils/timers/deltatime.js"></script>

<script>
  function render(timestamp) {
    requestAnimationFrame(render);

    // 1. Update the timer with the browser's high-res timestamp
    DeltaTime.update(timestamp);

    // 2. Get the precise, smoothed delta time
    const dt = DeltaTime.get();

    // 3. Scale your movement smoothly
    myElement.position.x += speed * dt;
  }
  
  render();
</script>
```
