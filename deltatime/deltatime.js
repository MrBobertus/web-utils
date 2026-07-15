(function deltatime() {
    let oldFrame = null
    let currentFrame = null
    let deltaTime = null

    function update(time) {
        if (!currentFrame) {
            currentFrame = time
        } else {
            oldFrame = currentFrame
            currentFrame = time
        }

        if (oldFrame && currentFrame) {
            deltaTime = (currentFrame - oldFrame) / 1000
        }
    }

    function get() {
        return deltaTime
    }

    window.DeltaTime = {
        update: update,
        get: get
    };
})()
