<template>
  <footer class="site-footer">
    <div class="container container-left">
      <div class="columns">
        <div class="column  is-3">
          <img src="tech-guild-logo.png" />
        </div>
        <div class="column  is-2">
          <h5>About</h5>
          <p><a href="/">Home pagina</a></p>
          <p><a href="/posts">Client Stories</a></p>
          <p><a href="/posts">Tech Stories</a></p>
          <p><a href="/about">About</a></p>
          <p><a href="/posts">News</a></p>
        </div>
        <div class="column  is-2">
          <h5>Careers</h5>
          <p><a href="/careers">Culture</a></p>
          <p><a href="/careres">Freelance jobs</a></p>
          <p><a href="/careers">Permanent jobs</a></p>
          <p><a href="/careerse">Traineeship</a></p>
        </div>
        <div class="column  is-2">
          <h5>Ghent office</h5>
          <p>Contributiestraat 59</p>
          <p>9000 GENT</p>
          <p>Belgium</p>
        </div>
        <div class="column  is-2">
          <h5>Contact us</h5>
          <p>+32 9 352 02 42</p>
          <p>hello@techguild.be</p>
          <br />
          <a
            href="https://www.linkedin.com/company/frontendguild/"
            target="_blank"
          >
            <img src="linkedin-icon.png" alt="linkedin icon" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCFcV5ZWhKYj9EN9FTd_1TSw"
            target="_blank"
          >
            <img src="youtube-icon.png" alt="youtube icon" />
          </a>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <div class="container container-center">
      Frontend Guild BV &copy; {{ new Date().getFullYear() }} - All Rights
      Reserved - <a href="/privacy">Privacy Policy</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter'
}
</script>

<style scoped>
footer {
  background: #384e85;
  color: #fff;
  padding: 120px 10px;
  text-align: center;
  transition: 0.5s ease all;
}
footer a {
  color: #fff;
  text-decoration: underline;
}
.logo-wrapper {
  margin: -5px 0 0 30px;
}
p {
  font-size: 0.9rem;
}
.container-left {
  text-align: left !important;
}
@media only screen and (max-width: 768px) {
  .site-footer .container {
    text-align: center !important;
  }
}

.container-center {
  padding: 0;
}
h5 {
  font-family: 'BisonBold', Arial, Helvetica, sans-serif;
  font-size: 1.4rem;
  margin-bottom: 0.3rem;
}
</style>
