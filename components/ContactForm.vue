<template>
  <form name="contact" method="POST" data-netlify="true">
    <!-- First name -->
    <div class="field">
      <label class="label is-medium">Name</label>
      <div class="control has-icons-left">
        <input class="input is-medium" type="text" name="name" />
        <span class="icon is-small is-left">
          <font-awesome-icon icon="user" />
        </span>
      </div>
    </div>
    <!-- Email -->
    <div class="field">
      <label class="label is-medium">Email</label>
      <div class="control has-icons-left">
        <input class="input is-medium" type="email" name="email" />
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
