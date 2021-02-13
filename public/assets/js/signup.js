$(document).ready(function(){

$('#signupBtn').on('click', function(event){
    event.preventDefault();

    const signUpForm = $("form.signup");
    const emailInput = $("input#email-input");
    const passwordInput = $("input#password-input")
    const firstName = $("input#first-name-input");
    const lastName = $("input#last-name-input");
    const stageName = $("input#stage-name-input");
    const genre = $("input#genre-input");
    //const passwordInput = $("input#password-input");
  
    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", event => {
      event.preventDefault();
      const user = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim(),
        first_name: firstName.val().trim(),
        last_name: lastName.val().trim(),
        stage_name: stageName.val().trim(),
        genre: genre.val().trim()
      };
  
      if (!user.email || !user.password) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(user.email, user.password, user.first_name, user.last_name, user.stage_name, user.genre);
      emailInput.val("");
      passwordInput.val("");
      firstName.val("");
      lastName.val("");
      stageName.val("");
      genre.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(email, password, firstName, lastName, stageName, genre, city) {
      $.post("/api/signup", {
        email: email,
        password: password,
        first_name: firstName,
        last_name: lastName,
        stage_name: stageName,
        genre: genre,
        city: city
      })
        .then(() => {
          window.location.replace("/members"); //not sure what to put here
          
        })
        .catch(handleLoginErr);
    }
})

})