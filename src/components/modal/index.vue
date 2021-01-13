<template>
    <transition name="fade" appear>
        <div class="modal-bg" @click="handleClose">
            <div class="modal-window" @click.stop>
                <slot name="default"></slot>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'modal',
    props: {
        strict: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClose: function () {
            if (!this.strict) this.$emit('close')
        }
    }
}
</script>

<style scoped>
.modal-bg {
    z-index: 999999;
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background:  #08415CAA;
    box-shadow: 0 0 0 2rem #08415C55;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .5s all ease;
    animation: fade-in .7s ease 1;
}
.modal-window {
    min-height: 100px;
    min-width: 100px;  
    animation: vertigo .7s cubic-bezier(.61,-0.54,.45,1.56) 1;
}


@keyframes fade-in {
    from {
        opacity: 0;
        border-radius: 50%;
        transform: scale(.9);
    } to {
        opacity: 1;
        border-radius: 0;
        transform: scale(1);
    }
}

@keyframes vertigo {
    from {
        transform: scale(2) translateY(2rem);
    } to {
        transform: scale(1) translateY(0);
    }
}
</style>