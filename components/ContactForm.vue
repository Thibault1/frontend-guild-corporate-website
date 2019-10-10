<template>
  <form
    name="contact"
    method="POST"
    netlify-honeypot="bot-field"
    data-netlify="true"
    enctype="multipart/form-data"
  >
    <!-- First name -->
    <div class="field">
      <label class="label is-medium">First name *</label>
      <div class="control has-icons-left">
        <input class="input is-medium" type="text" name="firstname" required />
        <span class="icon is-small is-left">
          <font-awesome-icon icon="user" />
        </span>
      </div>
    </div>
    <!-- Last name -->
    <div class="field">
      <label class="label is-medium">Last name *</label>
      <div class="control has-icons-left">
        <input class="input is-medium" type="text" name="lastname" required />
        <span class="icon is-small is-left">
          <font-awesome-icon icon="user" />
        </span>
      </div>
    </div>
    <!-- Email -->
    <div class="field">
      <label class="label is-medium">Email *</label>
      <div class="control has-icons-left">
        <input class="input is-medium" type="email" name="email" required />
        <span class="icon is-small is-left">
          <font-awesome-icon icon="envelope" />
        </span>
      </div>
    </div>
    <!-- CV -->
    <div class="field">
      <label class="label is-medium">CV</label>
      <div class="control has-icons-left">
        <input class="input is-medium" type="file" name="cv" />
        <span class="icon is-small is-left">
          <font-awesome-icon icon="briefcase" />
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
        ></textarea>
      </div>
    </div>
    <div class="control">
      <button class="button is-primary" type="submit">
        Contact Us
      </button>
    </div>
  </form>
</template>
