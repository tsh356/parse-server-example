
Parse.Cloud.define("sendEmail", function(request, response) {
 
  var sendgrid = require("sendgrid");
  sendgrid.initialize("tshubbard", "wd3tjcswd");
  
  var toEmail = request.params.toEmail;
  var fromEmail = request.params.fromEmail;
  var fromName = request.params.fromName;
  var text = request.params.text;
  var subject = request.params.subject;
  
  sendgrid.sendEmail({
   to: toEmail,
   from: fromEmail,
   fromname: fromName,
   subject: subject,
   text: text
  }, {
     success: function(httpResponse) {
       console.log(httpResponse);
       response.success("Email sent with success.");
    },
     error: function(httpResponse) {
       console.error(httpResponse);
       response.error("An error ocurred.");
    }
  });
 
});
