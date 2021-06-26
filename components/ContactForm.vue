<template>
  <form name="contact" method="POST" data-netlify="true">
    <!-- First name -->
    <div class="field">
      <label class="label is-medium">Name</label>
      <div class="control has-icons-left">
        <input class="input is-medium" type="text" name="name" required />
        <span class="icon is-small is-left">
          <font-awesome-icon icon="user" />
        </span>
      </div>
    </div>
    <!-- Email -->
    <div class="field">
      <label class="label is-medium">Email</label>
      <div class="control has-icons-left">
        <input class="input is-medium" type="email" name="email" required />
        <span class="icon is-small is-left">
          <font-awesome-icon icon="envelope" />
        </span>
      </div>
    </div>
    <!-- Message -->
    <div class="field">
      <label class="label is-medium">Your message</label>
      <div class="control">
        <textarea
          class="textarea"
          name="message"
          placeholder="Please tell us how can we help you."
          rows="8"
          required
        ></textarea>
      </div>
    </div>
    <div class="control">
      <button class="button btn-call-to-action" type="submit">
        Contact Us
      </button>
    </div>
  </form>
</template>
<style>
.btn-call-to-action {
  background-color: #2ecb6e;
  border: 0;
  color: #ffffff;
  font-weight: bold;
  padding: 1.5em;
  font-size: 1em;
}
.btn-call-to-action:hover {
  background-color: #32966b;
  color: #ffffff;
}
</style>
