//const { response } = require("express");

$(document).ready(() => {
  //Search Results functions and requests
  //=======================================================
  $("#browseAll").on("click", function () {
    $.get("/api/artists", function () {
      console.log("getting artists");
      window.location.assign("/api/artists");
    });
  });

  //Searching by Genre
  $("form.genreSearch").on("submit", function (event) {
    event.preventDefault();

    let genre = $("input#genreSearch").val().trim();
    console.log(genre);

    $.get("/api/artists/genre/" + genre, function () {
      window.location.assign("/api/artists/genre/" + genre);
    });
  });

  //Searching by City
  $("form.citySearch").on("submit", function (event) {
    event.preventDefault();

    let city = $("input#citySearch").val().trim();
    //console.log(genre);

    $.get("/api/artists/city/" + city, function () {
      window.location.assign("/api/artists/city/" + city);
    });
  });

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
  //Blog Post Functions
  //===========================================================
  $("#newBlogBtn").on("click", function () {
    $("#blogPost").modal("show");
  });

  $("#savePostBtn").on("click", function (event) {
    event.preventDefault();
    $(this).closest("form").submit();
  });

  $("#blogForm").on("submit", function (event) {
    event.preventDefault();
    console.log("form submission");
    let title = $("input#blogPostTitle").val().trim();
    let body = $("textarea#blogPostBody").val().trim();
    let id = $(this).data("id");
    console.log(id);
    let blog = {
      title: title,
      body: body,
      ArtistId: id,
    };

    $.post("/api/artists/blog", blog, function (result) {
      console.log("result in blog 'post' query fronted");
      console.log(result);

      window.location.assign("/api/artist/" + result.ArtistId);
    });
  });
<<<<<<< Updated upstream
=======

  $(".editPostBtn").on("click", function (event) {
    event.preventDefault();
    let id = $(this).data("id");
    console.log(id);

    $("form#editBlog").attr("data-id", id);
    $("#editPost").modal("show");
  });

  $(".saveChanges").on("click", function (event) {
    event.preventDefault();
    let id = $(this).data("id");
    // $(this).closest("form").data("id", id);
    $(this).closest("form").submit();
  });

  $("#editBlog").on("submit", function (event) {
    event.preventDefault();
    console.log("made it inside edit changes button");
    let id = $(this).data("id");
    console.log(id);
    let title = $("input#editPostTitle").val().trim();
    let body = $("textarea#editPostBody").val().trim();

    let blog = {
      title: title,
      body: body,
    };
    $.ajax({
      url: "/api/artists/blog/" + id,
      method: "PUT",
      data: blog,
    }).then(function (result) {
      console.log("result in blog 'post' query fronted");
      console.log(result);
      location.reload();
      //window.location.assign("/api/artist/" + result.ArtistId);
    });
  });

  $(".deletePostBtn").on("click", function (event) {
    event.preventDefault();
    let id = $(this).data("id");
    console.log("delete button data-id = " + id);

    $("button#deleteBtn").attr("data-id", id);
    $("#confirmDelete").modal("show");
  });

  $(".deletePost").on("click", function (event) {
    event.preventDefault();
    let id = $(this).data("id");
    console.log(id);
    //$(this).closest("form").submit();

    $.ajax({
      url: "/api/artists/blog/" + id,
      method: "DELETE",
    }).then(function (result) {
      console.log("result in blog 'delete' query fronted");
      console.log(result);
      location.reload();
    });
  });

>>>>>>> Stashed changes
  //Extras Form POST Request
  //===================================================
  $("#customizeBtn").on("click", function () {
    $("#customInfo").modal("show");
  });

  $("#saveExtrasBtn").on("click", function (event) {
    event.preventDefault();
    $(this).closest("form").submit();
  });

  $("#extras").on("submit", function (event) {
    event.preventDefault();
    console.log("extras form submission");

    let github = $("input#github").val().trim();
    let twitch = $("input#twitch").val().trim();
    let favorite = $("input#favorite-mix").val().trim();
    let bio = $("textarea#bio").val().trim();
    let id = $(this).data("id");

    let extras = {
      github: github,
      twitch: twitch,
      favorite_mix: favorite,
      bio: bio,
      ArtistId: id,
    };

    $.post("/api/artists/extras", extras, function (result) {
      console.log("result in extras 'post' query fronted");
      console.log(result);

      window.location.assign("/api/artist/" + result.ArtistId);
    });
  });

<<<<<<< Updated upstream
=======
  //Mixes Post Request
  //===================================================
  $("#newMixBtn").on("click", function () {
    $("#newMixModal").modal("show");
  });

  $("#addMixBtn").on("click", function (event) {
    event.preventDefault();
    $(this).closest("form").submit();
  });

  $("#newMixForm").on("submit", function (event) {
    event.preventDefault();
    console.log("Mixes form submission");

    let url = $("input#newMixURL").val().trim();
    let name = $("input#newMixName").val().trim();

    let id = $(this).data("id");

    let mix = {
      url: url,
      name: name,
      ArtistId: id,
    };

    $.post("/api/artists/mixes", mix, function (result) {
      console.log("result in Mixes 'post' query fronted");
      console.log(result);

      window.location.assign("/api/artist/" + result.ArtistId);
    });
  });

>>>>>>> Stashed changes
  //Signup Form stuff
  //===================================================
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
        window.location.assign("/api/artist/" + response);
      })
      .catch(handleLoginErr);
  }
  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
<<<<<<< Updated upstream

  // <<------ Drum Lite ------>>
{
  var padOne = new Audio('./drums/drum-lite-sounds/kick-1.wav');
  var padTwo = new Audio('./drums/drum-lite-sounds/snare-1.wav');
  var padThree = new Audio('./drums/drum-lite-sounds/clap-1.wav');
  var padFour = new Audio('./drums/drum-lite-sounds/hat-1.wav');
  var padFive = new Audio('./drums/drum-lite-sounds/kick-2.wav');
  var padSix = new Audio('./drums/drum-lite-sounds/snare-2.wav');
  var padSeven = new Audio('./drums/drum-lite-sounds/clap-2.wav');
  var padEight = new Audio('./drums/drum-lite-sounds/hat-2.wav');
  var padNine = new Audio('./drums/drum-lite-sounds/kick-3.wav');
  var padTen = new Audio('./drums/drum-lite-sounds/snare-3.wav');
  var padEleven = new Audio('./drums/drum-lite-sounds/clap-3.wav');
  var padTwelve = new Audio('./drums/drum-lite-sounds/hat-3.wav');
  
  $(window).keydown(function(e) {
  var code = e.keyCode;
  var kc = String.fromCharCode(e.keyCode);
  $("div[data-code='"+code+"']").addClass("active")
  console.log(code);
  
  switch(kc) {
      case "Q":
      padOne.load();
      padOne.play();
      break;
      case "W":
      padTwo.load();
      padTwo.play();
      break;
      case "E":
      padThree.load();
      padThree.play();
      break;
      case "R":
      padFour.load();
      padFour.play();
      break;
      case "A":
      padFive.load();
      padFive.play();
      break;
      case "S":
      padSix.load();
      padSix.play();
      break;
      case "D":
      padSeven.load();
      padSeven.play();
      break;
      case "F":
      padEight.load();
      padEight.play();
      break;
      case "Z":
      padNine.load();
      padNine.play();
      break;
      case "X":
      padTen.load();
      padTen.play();
      break;
      case "C":
      padEleven.load();
      padEleven.play();
      break;
      case "V":
      padTwelve.load();
      padTwelve.play();
      break;
      default:
  }
  });
    
      $(window).keyup(function(e) { 
        var code = e.keyCode;
        $("div[data-code='"+code+"']").removeClass("active");
      });
    
    };
=======
>>>>>>> Stashed changes
});
