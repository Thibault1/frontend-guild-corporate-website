<template>
  <form>
    <!-- First name -->
    <div class="field">
      <label class="label is-medium">First name</label>
      <div class="control has-icons-left">
        <input class="input is-medium" type="text" />
        <span class="icon is-small is-left">
          <font-awesome-icon icon="user" />
        </span>
      </div>
    </div>
    <!-- Last name -->
    <div class="field">
      <label class="label is-medium">Last name</label>
      <div class="control has-icons-left">
        <input class="input is-medium" type="text" />
        <span class="icon is-small is-left">
          <font-awesome-icon icon="user" />
        </span>
      </div>
    </div>
    <!-- Email -->
    <div class="field">
      <label class="label is-medium">Email</label>
      <div class="control has-icons-left">
        <input class="input is-medium" type="email" />
        <span class="icon is-small is-left">
          <font-awesome-icon icon="envelope" />
        </span>
      </div>
    </div>
    <!-- Subject -->
    <div class="field">
      <label class="label is-medium">Subject</label>
      <div class="control has-icons-left">
        <input class="input is-medium" type="email" />
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
          placeholder="Please tell us how can we help you."
          rows="8"
        ></textarea>
      </div>
    </div>
    <div class="control">
      <button class="button is-primary">
        Contact Us
      </button>
    </div>
  </form>
</template>
