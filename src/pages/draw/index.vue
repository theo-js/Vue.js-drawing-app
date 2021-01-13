<template>
    <div class="drawing-container">
        <drawing-field></drawing-field>
    </div>
    <p class="alert alert-warning">
        <strong>IMPORTANT:</strong> Resizing the window will erase a part of your drawing !
    </p>
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
    text-align: center;
}
</style>