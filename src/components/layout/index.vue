<template>
    <div class="layout">
        <header class="app-header">
            <Header />
        </header>
        <main class="page">
            <slot name="default"></slot>
        </main>
        <footer class="app-footer">
            <Footer />
        </footer>
    </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
    name: 'Layout',
    components: {
        Header,
        Footer
    }
}
</script>

<style>
/* Root */
:root {
  font-size: 14px;
  --subtle-grey: #E8F1E8;
  --darkgrey: #3e3d47;
  --darkblue: #08415C;
  --blue: #388697;
  --lightblue: #B5FFE1;
  --pink: #EBBAB9;
  --crimson: #CC2936;
  --orange: rgb(255, 196, 0);

   --heading-color: var(--darkblue);
   --text: var(--darkgrey);
   --link-color: var(--crimson);
   --bg-dark: var(--darkblue);
   --bg-lit: #FFF;
   --bg-lit-hilit: var(--lightblue);
   --warning: #ffef7c;
}

/* Selection */
::selection {
    color: #FFF;
    background: var(--crimson);
}
/* Scroll bars */
::-webkit-scrollbar {
    width: 1rem;
    height: 1rem;
}
::-webkit-scrollbar-thumb {
    background-color: var(--blue);
    border: 3px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}
::-webkit-scrollbar-thumb:active {
    background-color: var(--lightblue);
}
::-webkit-scrollbar-corner {
    background: transparent;
}

/* Reset */
body, html {
  margin: 0;
  padding: 0;
  background: var(--bg-dark);
}
html {
  box-sizing: border-box;
}
* {
  box-sizing: inherit;
}

/* Fonts */
body {
    font-family: 'Open Sans', sans-serif;
    color: var(--darkgrey);
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Cookie', cursive;
    color: var(--heading-color);
    margin: 0;
}
h2 {
    font-size: 3rem;
}
h3 {
    font-size: 2.5rem;
}
h4 {
    font-size: 2rem;
}
h5 {
    font-size: 1.5rem;
}
h6 {
    font-size: 1.25rem;
}
br {
    user-select: none;
}
a {
    font-weight: 800;
    color: var(--link-color);
}
button, .btn {
    background: var(--subtle-grey);
    color: var(--text);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: solid 1px var(--text);
    border-radius: .25rem;
}
button:hover, button:focus,
.btn:hover, .btn:focus,
input:focus {
    filter: brightness(.9) drop-shadow(0 0 .125rem #B5FFE1AA);
    outline: none;
    transition: .2s all ease;
}
input:focus {
    filter: initial;
}
button:active, .btn:active {
    filter: brightness(.75) drop-shadow(0 0 .125rem #B5FFE1AA);
}
button:disabled, .btn.disabled {
    opacity: .5;
    cursor: default;
}
button:disabled:hover, .btn.disabled:hover {
    filter: brightness(1);
}

.alert {
    box-shadow: 0 1px 0.25rem 0 #1114;
    border-radius: .25rem;
    margin: 1rem 0;
    padding: 1rem;
    display: inline-block;
    position: relative;
}
.alert-warning {
    background: var(--warning)
}
.alert-warning::after {
    content: '!';
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: calc(50% - .625em);
    left: -.625em;
    height: 1.25em; width: 1.25em;
    box-shadow: 1px 1px 2px 1px #1112;
    border-radius: 50%;
    font-weight: bold;
    color: #FFF;
    background: var(--orange);
}


@media screen and (max-width: 800px) {
    .alert {
        display: block;
    }
}

/* Mobile */
@media screen and (max-device-width: 1100px) {
    .alert {
        display: block;
    }
}
</style>

<style scoped>
.layout {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-areas: 'header main' '. footer';
    grid-row-gap: .5rem;
    justify-items: center;
    margin: .5rem auto;
    max-width: 1250px;
}

.app-header {
    grid-area: header;
    height: 100%;
    width: 100%;
    background: transparent;
}

.page {
    grid-area: main;
    min-height: 40vw;
    width: calc(100% - 1rem);
    max-width: 1000px;
    margin-right: auto;
    padding: 1rem;
    background: #FFF;
    border-radius: 2px;
    box-shadow: 0 .125rem 1rem .125rem #111A;
    overflow: hidden;
}

.app-footer {
    grid-area: footer;
    width: calc(100% - 1rem);
    margin-right: auto;
}


@media screen and (max-width: 800px) {
    .layout {
        grid-template-areas: 'header header' 'main main' 'footer footer';
        justify-items: unset;
    }
    .app-header {
        width: unset;
    }
    .page {
        border-radius: 0;
        margin-right: 0;
        width: 100%;
    }
    .app-footer {
        margin-right: 0;
        width: 100%;
    }
}
</style>