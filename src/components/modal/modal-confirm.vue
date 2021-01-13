<template>
    <div class="modal-confirm">
        <h3>{{ message }}</h3>
        <ul class="actions-list">
            <li><button @click="$emit('close')">Cancel</button></li>
            <li><button @click="$emit('confirm')" >Confirm</button></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'modal-confirm',
    props: {
        message: {
            type: String,
            default: 'Are you sure ?'
        }
    }
}
</script>

<style scoped>
    .modal-confirm h3 {
        color: #FFF;
        margin-bottom: 2rem;
    }
    .actions-list {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0;
        margin: 0;
    }
    .actions-list li {
        list-style: none;
    }
    .actions-list li button {
        background: transparent;
        border: none;
        color: var(--lightblue);
        font-size: 1.25em;
        font-style: italic;
        font-weight: bold;
        transition: .3s all ease;
    }
    .actions-list li button:hover,
    .actions-list li button:focus {
        filter: none;
        transform: scale(1.25);
        color: var(--crimson);
    }
</style>