<template>
  <div :class="`${isNavOpen ? 'navOpen' : ''} header-content`">
      <h1 id="app-title">
          <router-link to="/">Simple drawing</router-link>
      </h1>
      <nav :class="`${isNavOpen ? 'open' : ''} header-nav`">
          <ul class="header-nav-list">
              <li>
                  <router-link to="/">
                    Home&nbsp;
                    <font-awesome-icon
                        style="font-size: .75em"
                        icon="home"
                    ></font-awesome-icon>
                  </router-link>
              </li>
              <li>
                  <router-link to="/draw">
                    Draw&nbsp;
                    <font-awesome-icon
                        style="font-size: .75em"
                        icon="pencil-alt"
                    ></font-awesome-icon>
                  </router-link>
              </li>
          </ul>
      </nav>
      <button
        :class="`${isNavOpen ? 'active' : ''} navToggler`"
        @click="isNavOpen = !isNavOpen"
      >
        <div class="stroke"></div>
        <div class="stroke"></div>
        <div class="stroke"></div>
      </button>
  </div>
</template>

<script>
export default {
    name: 'Header',
    data () {
        return {
            isNavOpen: false
        }
    }
}
</script>

<style scoped>
    .header-content {
        padding: 1rem;
        overflow: hidden;
        position: relative;
    }

    /* Title */
    #app-title {
        margin-top: 0;
        margin-bottom: 1rem;
        text-align: center;
    }
    #app-title > a {
        text-decoration: none;
        color: #FFF;
    }

    /* Navbar */
    .navToggler {
        display: none;
        position: absolute;
        justify-content: space-between;
        align-items: stretch;
        flex-direction: column;
        padding: 0;
        background: transparent;
        top: 1.5rem; right: 1rem;
        height: 1.5rem; width: 2rem;
        border: none;
        box-shadow: none !important;
        filter: none !important;
    }
    .navToggler .stroke {
        border: 1.5px solid var(--lightblue);
        border-radius: 5px;
        background: var(--lightblue);
        transition: .3s all ease;
    }
    .navToggler.active .stroke {
        border-color: #FFF;
        background: #FFF;
    }
    .navToggler.active .stroke:first-child {
        transform: rotate(45deg) translate(.5rem, .4rem);
    }
    .navToggler.active .stroke:last-child {
        transform: rotate(-45deg) translate(.5rem, -.4rem);
    }
    .navToggler.active .stroke:nth-child(2) {
        transform: translate(-2rem);
        opacity: 0;
    }
    /*.header-nav {
        
    }*/
    .header-nav-list {
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: .25em;
    }
    .header-nav-list > li {
        list-style: none;
        text-align: center;
    }
    .header-nav-list > li > a {
        display: block;
        text-transform: uppercase;
        padding: .5rem;
        border-radius: .25em;
        text-decoration: none;
        font-size: 1.5rem;
        transition: .3s all ease;
        color: var(--lightblue);
        opacity: .75;
    }
    .header-nav-list > li > a:hover,
    .header-nav-list > li > a:focus,
    .header-nav-list > li > a.router-link-active {
        outline: none;
        background: var(--bg-lit-hilit);
        color: var(--heading-color);
    }
    .header-nav-list > li > a:active {
        opacity: .9;
    }
    .header-nav-list > li > a.router-link-active {
        padding-left: 1em;
        opacity: 1;
    }


    @media screen and (max-width: 800px) {
    .header-nav-list > li > a.router-link-active {
        padding-left: .5rem;
        transform: scale(1.1);
    }

    /* Navbar */
    .navToggler {
        display: inline-flex;
    }

    .header-nav {
        height: 0;
        transition: .3s height ease;
    }
    .header-nav.open {
        height: 100%;
    }
    .header-nav ul li {
        height: 0;
        opacity: 0;
        transition: .3s all ease;
    }
    .header-nav.open ul li {
        height: 100%;
        opacity: 1;
    }
    .header-content #app-title {
        margin-bottom: 0;
        transition: .3s margin ease;
    }
    .header-content.navOpen #app-title {
        margin-bottom: 1rem;
    }
}
</style>