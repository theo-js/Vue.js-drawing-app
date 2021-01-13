<template>
    <form class="drawing-options" @submit.prevent>
        <ul class="options-list">
            <li>
                <label
                    for="stroke-color"
                    title="Set your pencil color"
                    style="margin-right: .25rem"
                >Stroke color</label>
                <input
                    title="Set your pencil color"
                    id="stroke-color"
                    type="color"
                    :value="strokeStyle"
                    @input="$emit('value-change', { strokeStyle: $event.target.value })"
                 />
            </li>
            <li>
                <label
                    for="stroke-width-number"
                    title="Set your pencil width"
                    style="margin-right: .25rem"
                >Stroke width</label>
                <input
                    title="Set your pencil width"
                    id="stroke-width-range"
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    :value="lineWidth"
                    @input="$emit('value-change', { lineWidth: $event.target.value })"
                 />
                <input
                    title="Set your pencil width"
                    id="stroke-width-number"
                    type="number"
                    min="1"
                    max="100"
                    step="1"
                    :value="lineWidth"
                    @input="$emit('value-change', { lineWidth: $event.target.value })"
                 />
            </li>
            <li class="btns">
                <button
                    title="Clear drawing"
                    class="refresh-btn"
                    @click="handleReset"
                    :disabled="!hasStartedDrawing"
                >
                    <font-awesome-icon icon="redo"></font-awesome-icon>
                </button>
                <button
                    title="Save drawing"
                    class="save-btn"
                    @click="handleSave"
                    :disabled="!hasStartedDrawing"
                >
                    <font-awesome-icon icon="save"></font-awesome-icon>
                </button>
                <input
                    title="Save as ?"
                    class="file-name"
                    placeholder="SAVE AS..."
                    type="text"
                    :value="fileName"
                    maxlength="100"
                    @input="$emit('valueChange', { fileName: $event.target.value })"
                 />
            </li>
        </ul>
    </form>
    <transition name="modal-fade">
        <modal
            v-if="isModal"
            @close="isModal = false"
        >
            <modal-confirm
                :message="confirmMessage"
                @close="isModal = false"
                @confirm="confirmCallback"
            ></modal-confirm>
        </modal>
    </transition>
</template>
<script>
import modal from '../modal'
import modalConfirm from '../modal/modal-confirm'

export default {
    name: 'drawing-options',
    data() {
        return {
            isModal: false,
            confirmMessage: '',
            confirmCallback: () => false
        }
    },
    components: {
        modal,
        'modal-confirm': modalConfirm
    },
    props: {
        strokeStyle:  {
            type: String,
            default: '#111'
        },
        lineWidth: {
            type: Number,
            default: 1
        },
        hasStartedDrawing: Boolean,
        fileName: {
            type: String,
            default: 'simple_drawing'
        }
    },
    methods: {
        confirmAction (str, confirmCallback) {
            this.isModal = true
            this.confirmMessage = str,
            this.confirmCallback = confirmCallback
        },
        handleReset: function () {
            if (this.hasStartedDrawing) {
                this.confirmAction(
                    'Clear your drawing and reset ?',
                    () => {
                        this.$emit('reset')
                        this.isModal = false
                    }
                )
            }
        },
        handleSave: function () {
            if (this.hasStartedDrawing) {
                this.$emit('save')
            }
        }
    }
}
</script>
<style scoped>
.drawing-options {
    background: var(--crimson);
    color: #FFF;
    border-radius: .5rem;
    padding: .5rem;
}
.options-list {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: .5rem;
}
.options-list li {
    list-style: none;
    display: flex;
    align-items: center;
}
.options-list li.btns {
    gap: .5rem;
    align-items: flex-end;
}

label {
    font-size: .75em;
    text-transform: uppercase;
    padding-right: .5em;
}
button {
    padding: .125em .25em;
}
#stroke-width-range {
    width: auto;
}
#stroke-width-number {
    width: 3.5em;
    text-align: center;
    background: transparent;
    border: none;
    color: #FFF;
    font-weight: bold;
}
button {
    padding: 1em;
    background: var(--crimson);
    border-color: var(--pink);
    color: var(--pink);
    filter: brightness(.9);
}
button:hover, button:focus, button:active {
    background: var(--pink);
    color: var(--crimson);
    filter: brightness(1);
}
button:active {
    filter: brightness(.9);
}
button:disabled {
    background: unset;
    color: unset;
}
.file-name {
    width: 6em;
}
input[type="text"] {
    background: transparent;
    color: #FFF;
    border: none;
    border-bottom: 1px solid #FFF;
    padding: .5em 0;
}
input[type="text"]::placeholder {
    color: var(--pink);
}

/* Transitions */
.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: all ease .7s;
}
.modal-fade-enter,
.modal-fade-leave-to {
    opacity: 0;
}
</style>