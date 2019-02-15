<template>
  <div class="contact-container">
    <h2><i>CONTACT US</i></h2><br>
    <h4> If you a question about your order or need<br>
    any general information oue customer service<br>
    team will bw happy to assist you </h4>
    <br>
    <form @submit.prevent="validateBeforeSubmit">
      <div>
        <label for="fname">FULL NAME *</label>
        <input v-validate="'required|alpha'" type="text" id="fname"  placeholder="e.g. Visitor Visitorsen" name="fullname" v-model="fullname">
        <span v-show="errors.has('fullname')" style="color:orange"> {{errors.first('fullname') }}</span>
      </div>
      <br>
      <div>
        <label for="email">EMAIL *</label>
        <input v-validate="'required|email'" type="text" id="email"  placeholder="e.g.visitor@visitorsen.dk" name="email" v-model="email">
        <span v-show="errors.has('email')" style="color:orange">{{ errors.first('email') }}</span>
      </div>
      <br>
        <div>
        <label for="company">COMPANY (optional)</label>
        <input type="text" id="company" placeholder="e.g.Visitorsen ApS" name="company" v-model="company">
      </div>
      <br>
        <div>
        <label for="subject">SUBJECT *</label>
        <input v-validate="'required|alpha'" type="text" id="subject"  placeholder="e.g. I need some new surfboards. Help me!" name="subject" v-model="subject">
        <span v-show="errors.has('subject')" style="color:orange">{{ errors.first('subject') }}</span>
      </div>
      <br>
      <div>
        <label for="message">MESSAGE</label>
        <textarea id="message" placeholder="Lorem ipsum dol..." style="height:200px" name="message"></textarea>
      </div>
      <br>
      <input type="submit" value="SEND">
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data: () => ({
    fullname: '',
    email: '',
    subject: ''
  }),
  methods: {
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          alert('Message sent. We will definitely hook you up with some nice new gear')
          return
        }
        alert('Please recheck the contents of the form!')
      })
    }
  }
}
</script>
