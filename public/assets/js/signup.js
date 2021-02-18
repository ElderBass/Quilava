$(document).ready(function () {
  const signUpForm = $("form.signup");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");
  const firstName = $("input#first-name-input");
  const lastName = $("input#last-name-input");
  const stageName = $("input#stage-name-input");
  const genre = $("input#genre-input");
  const city = $("input#city-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", (event) => {
    event.preventDefault();

    const user = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      first_name: firstName.val().trim(),
      last_name: lastName.val().trim(),
      stage_name: stageName.val().trim(),
      genre: genre.val().trim(),
      city: city.val().trim(),
    };


    if (!user.email || !user.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(
      user.email,
      user.password,
      user.first_name,
      user.last_name,
      user.stage_name,
      user.genre,
      user.city
    );
    emailInput.val("");
    passwordInput.val("");
    firstName.val("");
    lastName.val("");
    stageName.val("");
    genre.val("");
    city.val("");

    let profile = document.getElementById("jumpToMyProfile");
    profile.classList.remove("hide");
    profile.classList.add("nav-item");
   
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(
    email,
    password,
    firstName,
    lastName,
    stageName,
    genre,
    city
  ) {
    $.post("/api/signup", {
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
      stage_name: stageName,
      genre: genre,
      city: city,
    })
      .then((response) => {
        console.log("response from signUpUser .then");
        //this isn't working and I'm not sure why
        console.log(response)
        
        // $("#jumpToMyProfile").removeClass("hide");
       window.location.assign("/id/"+response.id)
       // window.location.assign("/api/artist/" + response.id);

            
        let profile = document.getElementById("jumpToMyProfile");
        profile.classList.remove("hide");
        profile.classList.add("nav-item");
      })
      .catch(handleLoginErr);
  }
  function handleLoginErr(err) {
    $("#alert .msg").text("Sorry but you didn't do that right.");
    $("#alert").fadeIn(500);
  }
});
