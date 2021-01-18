<template>
    <canvas
        class="drawing-field"
        ref="canvas"
        :width="canvasWidth"
        :height="canvasHeight"
        @mousemove="handleMouseMove"
        @mousedown="handleMouseDown"
        @mouseup="handleMouseUp"
        @touchstart="handleMouseDown"
        @touchmove.prevent="handleMouseMove"
        @touchend="handleMouseUp"
    ></canvas>
    <div
        class="drawing-field-before"
        :style="{
            height: `calc(${canvasHeight}px - 1rem)`,
            width: `${canvasWidth/2}px`,
            opacity: hasStartedDrawing ? 1 : 0
        }"
    ></div>
    <div class="drawing-field-after"
    :style="{
            height: `calc(${canvasHeight}px - 1rem)`,
            width: `${canvasWidth/2}px`,
            opacity: hasStartedDrawing ? 1 : 0
        }"
    ></div>

    <div
        class="msg"
        :style="{
            height: `calc(${canvasHeight + 'px'} + .5rem)`,
            width: `calc(${canvasWidth + 'px'} + .5rem)`,
            opacity: hasStartedDrawing ? 0 : 1
        }"
    >
        <p>Draw here</p>
    </div>
    <br />
    <drawing-options
        @reset="reset"
        @value-change="handleChange"
        @save="handleSave"
        :strokeStyle="strokeStyle"
        :lineWidth="lineWidth"
        :hasStartedDrawing="hasStartedDrawing"
        :fileName="fileName"
    ></drawing-options>
</template>

<script>
import { throttle } from 'lodash'
import drawingOptions from './drawing-options.vue'

export default {
    name: 'drawing-field',
    components: {
        drawingOptions
    },
    data() {
        return {
            hasStartedDrawing: false,
            isPenDown: false,
            canvasWidth: 250,
            canvasHeight: 400,
            currentX: null,
            currentY: null,
            prevX: null,
            prevY: null,
            lineWidth: 1,
            strokeStyle: '#3e3d47',
            fileName: 'simple_drawing'
        }
    },
    methods: {
        // Canvas sizing
        adaptCanvasSize: throttle(function () {
            // Make canvas fit parent element
            const container = this.$refs.canvas.parentElement
            const { width } = container.getBoundingClientRect()

            this.resizeCanvas(width - 7, this.canvasHeight)
        }, 100),

        resizeCanvas: function (newWidth, newHeight) {
            // Copy canvas content
            this.inMemCtx.drawImage(this.$refs.canvas, 0, 0)

            // Apply new width to rendered canvas (resets canvas content)
            if (newWidth !== this.canvasWidth) {
                this.canvasWidth = newWidth
            }
            // Apply new height to rendered canvas
            if (newHeight !== this.canvasHeight) {
                this.canvasHeight = newHeight
            }

            // Redraw image
            window.setTimeout(() => {
                if (this.ctx && this.inMemCanvas) {
                    this.ctx.drawImage(this.inMemCanvas, 0, 0)

                    // Apply new size to canvas in memory
                    this.inMemCanvas.width = newWidth
                    this.inMemCanvas.height = newHeight
                }
            }, 1)
        },
        
        // Stroke
        handleMouseMove: function (ev) {
            if (this.isPenDown) {
                const { x, y } = this.findxy(ev)

                if (
                    x > 0 &&
                    x < this.canvasWidth + 3 &&
                    y > 0 &&
                    y < this.canvasHeight + 3
                    // Mouse is inside canvas
                ) {                    
                    // Draw line
                    this.currentX = x 
                    this.currentY = y

                    this.draw()
                } else {
                    // Release stroke when mouse is out of canvas
                    this.isPenDown = false
                }
            }
        },
        handleMouseDown: function (ev) {
            this.isPenDown = true
            const { x, y } = this.findxy(ev)
            this.prevX = x
            this.prevY = y

            // Hide msg
            if (!this.hasStartedDrawing) this.hasStartedDrawing = true
        },
        handleMouseUp: function () {
            this.isPenDown = false
            this.prevX = null
            this.prevY = null
        },
        findxy: function (ev) {
            // Get mouse position relative to screen
            let x = 0
            let y = 0
            if (ev.type.match('mouse')) {
                x = ev.clientX
                y = ev.clientY
            } else if (ev.type.match('touch')) {
                x = ev.touches[0].clientX
                y = ev.touches[0].clientY
            }

            // Find mouse position inside canvas
            const container = this.$refs.canvas.parentElement
            const { top, left } = container.getBoundingClientRect()

            return {
                x:  x - left,
                y: y - top
            }
        },
        draw: function () {
            if (this.prevX !== null && this.prevY !== null) {
                this.ctx.beginPath()
                this.ctx.lineWidth = this.lineWidth
                this.ctx.strokeStyle = this.strokeStyle
                this.ctx.moveTo(this.prevX, this.prevY)
                this.ctx.lineTo(this.currentX, this.currentY)
                this.ctx.stroke()
                this.ctx.closePath()

                this.prevX = this.currentX
                this.prevY = this.currentY
            }
        },

        // Options
        handleChange: function (newValue) {
            this[Object.keys(newValue)[0]] =  Object.values(newValue)[0]
        },
        reset: function () {
            this.hasStartedDrawing = false
            this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
        },
        handleSave: function () {
            try {
                if (!this.fileName || !this.hasStartedDrawing) throw new Error()
                // Convert canvas to blob object
                this.$refs.canvas.toBlob(blob => {
                    // Create object URL
                    const url = window.URL.createObjectURL(blob)
                    // Download from object URL
                    const anchor = document.createElement('a')
                    anchor.href = url
                    anchor.download = this.fileName
                    anchor.click()
                    anchor.parentElement.removeChild(anchor)
                    // Revoke object URL
                    window.URL.revokeObjectURL(url)
                }, 'image/png')
            } catch (err) {
                console.log(err)
            }
        }
    },
    computed: {
        ctx: function () {
            return this.$refs.canvas.getContext('2d')
        },
        // We need another canvas in memory to redraw the canvas on resize
        inMemCanvas: function () {
            return document.createElement('canvas')
        },
        inMemCtx: function () {
            return this.inMemCanvas.getContext('2d')
        }
    },

    // Lifecycle hooks
    mounted() {
        this.adaptCanvasSize()
        // Attach window resize listener
        window.addEventListener('resize', this.adaptCanvasSize, false)
    },
    beforeUnmount() {
        // Clear listeners
         window.removeEventListener('resize', this.adaptCanvasSize, false)
    }
}
</script>

<style scoped>
.drawing-field {
    position: relative;
    background: #FFF;
    border-radius: .5rem;
    border: .25rem double var(--blue);
    cursor: crosshair;
    box-sizing: content-box;
    z-index: 2;
    box-shadow: 0 2px .25rem 1px #777A;
}
/* Canvas shadow */
.drawing-field-before, .drawing-field-after {
    position: absolute;
    content: '';
    bottom: 15px;
    width: 50%;
    max-width:300px;
    background: #777;
    box-shadow: 0 15px 10px #777A;
    transform: rotate(-2deg);
    top: .75rem; left: 10px;
    transition: .3s opacity ease-in-out;
}
.drawing-field-after {
    transform: rotate(2deg);
    right: 10px;
    left: auto;
}

.msg {
    background: #111;
    color: var(--pink);
    position: absolute;
    left: 0; top: 0;
    pointer-events: none;
    border-radius: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Cookie', cursive;
    font-size: 5rem;
    z-index: 9;
    transition: .3s opacity ease-in-out;
}
</style>