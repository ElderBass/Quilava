

$(document).ready(() => {
    // Getting references to our form and inputs
    const loginForm = $("form.login");
    const emailInput = $("input#login-email");
    const passwordInput = $("input#login-password");
 
    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", event => {
      event.preventDefault();
      const userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };

      if (!userData.email || !userData.password) {
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      loginUser(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
    });
  
    // loginUser does a post to our "api/login" route and if successful, redirects us to our profile page
    function loginUser(email, password) {
      $.post("/login", {
        email: email,
        password: password
      })
        .then((response) => {
          console.log(response);
          window.location.assign("/id/"+response.id)
          
        })
        .catch(err => {
          console.log(err);
        });
    }
  });
  