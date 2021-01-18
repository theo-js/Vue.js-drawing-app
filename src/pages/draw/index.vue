<template>
    <div class="draw-page">
        <div class="drawing-container" key="draw">
            <drawing-field></drawing-field>
        </div>
        <p class="alert alert-warning">
            <strong>IMPORTANT:</strong> Resizing the window will erase a part of your drawing !
        </p>
    </div>
</template>

<script>
import DrawingField from '../../components/DrawingField'
export default {
    name: 'Draw',
    components: {
        DrawingField
    }
}
</script>

<style scoped>
.drawing-container {
    position: relative;
    display: flex;
    flex-flow: column wrap;
}
</style>