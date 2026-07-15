(function noisegenerator() {
    function generateNoise(width, height, density = 0.5, background = "255, 255, 255", pixelcolor = "0, 0, 0", backgroundvisibility = true, randompixelopacity = true) {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = `rgba(${background}, ${(backgroundvisibility) ? "1" : "0"})`
        ctx.fillRect(0, 0, width, height)

        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                if (Math.random() < density) {
                    ctx.fillStyle = `rgba(${pixelcolor}, ${(randompixelopacity) ? Math.random() : "1"})`
                    ctx.fillRect(i, j, 1, 1)
                }
            }
        }
      
        return canvas;
    }

    window.NoiseGenerator = {
        generate: generateNoise
    };
})();
