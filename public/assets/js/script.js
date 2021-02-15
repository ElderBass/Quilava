$(document).ready(() => {
  $("#browseAll").on("click", function () {
    $.get("/api/artists", function () {
      console.log("getting artists");
      window.location.assign("/api/artists");
    });
  });

  $("form.genreSearch").on("submit", function (event) {
    event.preventDefault();

    let genre = $("input#genreSearch").val().trim();
    console.log(genre);

    $.get("/api/artists/genre/" + genre, function () {
      window.location.assign("/api/artists/genre/" + genre);
    });
  });

  $("form.citySearch").on("submit", function (event) {
    event.preventDefault();

    let city = $("input#citySearch").val().trim();
    //console.log(genre);

    $.get("/api/artists/city/" + city, function () {
      window.location.assign("/api/artists/city/" + city);
    });
  });

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
      //renderFeed(result, event);
      console.log("result in blog 'post' query fronted");
      console.log(result);
      //renderFeed(result);
     // location.reload();
     window.location.assign("/api/artist/" + result.ArtistId);
    });
  });

  //   $.get("/api/artists/blog", function (results) {
  //     // event.preventDefault();
  //    // renderFeed(results);
  //     location.reload();
  //   });
  //this disappears right away and I'm not sure why
  function renderFeed(data) {
    let post = $("<div>");
    post.attr("class", "container");
    post.attr("style", "border: solid, 3px, black");
    //console.log(data);
    for (let i = 0; i < data.length; i++) {
      let title = $("<h4>");
      title.text(data[i].title);

      let body = $("<p>");
      body.text(data[i].body);

      post.append(title, body);

      console.log(post);
      //prepend doesn't do shit here. Don't know why
      $("#blogFeed").prepend(post);
    }
  }

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
});
