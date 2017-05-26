// parameters: service_id, template_id, template_parameters

document.getElementById('submit').onclick = function () {
  var email_email = document.getElementById('email-email').value;
  var email_name = document.getElementById('email-name').value;
  var email_message = document.getElementById('email-message').value;

  console.log('[*] Sending email...');
  emailjs.send("barsky.masha@gmail.com","template_EygMzjzV",
  {
    email: email_email,
    name: email_name,
    message: email_message
  })
  .then(function(response) {
     console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
  }, function(err) {
     console.log("FAILED. error=", err);
  });
  console.log('[*] Email sent.');
  alert ("Email succesfully sent. Thank you!");


}
