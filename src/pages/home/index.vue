<template>
  <article class="home-page" key="landing">
    <h2 class="welcome">Welcome to <strong>Simple Drawing</strong> !</h2>
    <p>a small app that lets you create very simple drawings directly within your web browser.</p>
    <animated-pen
      className="app-logo"
    ></animated-pen>
    <router-link
      class="btn get-started-btn"
      to="/draw"
    >Get started</router-link>
  </article>
</template>

<script>
import animatedPen from '../../components/svg/animated-pen'

export default {
    name: 'Home',
    components: {
      'animated-pen': animatedPen
    }
}
</script>

<style scoped>
  .home-page {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .welcome {
    text-align: center;
  }
  .get-started-btn {
    background: var(--crimson);
    color: #FFF;
    text-decoration: none;
    font-size: 2rem;
    padding: .25em .5em;
    margin-bottom: 1rem;
    border-radius: 999px;
    border-color: var(--crimson);
  }
  .get-started-btn:hover {
    color: var(--crimson);
    background: #FFF;
    border-color: var(--heading-color);
  }

  /* App logo */
  .app-logo {
    height: 250px;
  }
</style>