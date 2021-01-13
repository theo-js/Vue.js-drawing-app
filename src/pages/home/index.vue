<template>
  <article class="home-page">
    <h2 class="welcome">Welcome to <strong>Simple Drawing</strong> !</h2>
    <p>a small app that lets you make very simple drawings directly within your web browser.</p>
    <br/>
    <router-link
      class="btn get-started-btn"
      to="/draw"
    >Get started</router-link>
  </article>
</template>

<script>
export default {
    name: 'Home'
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
    font-size: 1.5rem;
    padding: .25em .5em;
    border-radius: .5em;
    border-color: var(--crimson);
  }
  .get-started-btn:hover {
    color: var(--crimson);
    background: #FFF;
    border-color: var(--heading-color);
  }
</style>