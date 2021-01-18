<template>
  <div class="footer-content">
    <br/>
    <section class="share">
        <header>
            <h3>Share</h3>
        </header>
        <main>
            <div
                class="fb-share-button"
                data-href="https://simpledrawing.netlify.app/"
                data-layout="button"
                data-size="large"
                title="Share Simple Drawing on Facebook"
            >
                <a
                    target="_blank"
                    title="Share Simple Drawing on Twitter"
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsimpledrawing.netlify.app%2F&amp;src=sdkpreparse"
                    class="fb-xfbml-parse-ignore"
                >Share</a>
            </div>
            <div class="twitter" title="Share Simple Drawing on Twitter">
                <a class="twitter-share-button"
                    title="Share Simple Drawing on Twitter"
                    target="_blank"
                    href="https://twitter.com/intent/tweet"
                    data-size="large"
                >
                    Tweet
                </a>
            </div>
        </main>
    </section>
    <section class="author-section">
        <address>
            <a
                href="https://www.linkedin.com/in/b748b01b7/"
                title="LinkedIn profile"
                target="_blank"
            >
                Contact <em>Simple Drawing</em>'s developer
            </a>
        </address>
        <small id="copyright">&copy; Copyright 2021, Simple Drawing</small>
    </section>
    <br/>
  </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
h3 {
    color: #FFF;
}
.footer-content {
    color: #FFF;
    text-align: right;
}

.share {
    border-radius: 2px;
}
.share h3 {
    padding-top: 1rem;
    text-decoration: overline;
    text-align: center;
}
.share main {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 1rem;
    padding: .5rem 1rem;
    padding-bottom: 1rem;
    margin: .25rem auto;
    max-width: 500px;
}

.author-section {
    padding: 1rem 0;
}
#copyright {
    display: inline-block;
    margin: 0 auto;
}
address {
    display: block;
    margin: 1rem 0;
}
a {
    color: var(--lightblue);
    transition: all ease .2s;
}
a:hover, a:focus {
    color: #FFF;
    text-decoration: none;
}
a:active {
    color: var(--crimson);
}


@media screen and (max-width: 800px) {
    .share {
        border-radius: 0;
    }
    .author-section {
        margin-right: 1rem;
    }
}
</style>