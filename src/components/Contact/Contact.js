import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { useForm } from 'react-hook-form'
import './Contact.css'

const Contact = () => {
  const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_jq01mrl';
   const templateID = 'template_e3ko26f';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
  return (
    <form id="form">
  <div class="field">
    <label for="subject">subject</label>
    <input type="text" name="subject" id="subject"/>
  </div>
  <div class="field">
    <label for="firstname">firstname</label>
    <input type="text" name="firstname" id="firstname"/>
  </div>
  <div class="field">
    <label for="lastname">lastname</label>
    <input type="text" name="lastname" id="lastname"/>
  </div>
  <div class="field">
    <label for="email">email</label>
    <input type="text" name="email" id="email"/>
  </div>
  <div class="field">
    <label for="phone">phone</label>
    <input type="text" name="phone" id="phone"/>
  </div>
  <div class="field">
    <label for="message">message</label>
    <input type="text" name="message" id="message"/>
  </div>
  <div class="field">
    <label for="reply_to">reply_to</label>
    <input type="text" name="reply_to" id="reply_to"/>
  </div>

  <input type="submit" id="button" value="Send Email" />
</form>

  )
}

export default Contact