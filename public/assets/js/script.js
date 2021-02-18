$(document).ready(() => {
  //Search Results functions and requests
  //=======================================================
  $("#browseAll").on("click", function () {
    $.get("/artists", function () {
      console.log("getting artists");
      window.location.assign("/artists");
    });
  });

  //Searching by Genre
  $("form.genreSearch").on("submit", function (event) {
    event.preventDefault();

    let genre = $("input#genreSearch").val().trim();
    console.log(genre);

    $.get("/artists/genre/" + genre, function () {
      window.location.assign("/artists/genre/" + genre);
    });
  });

  //Searching by City
  $("form.citySearch").on("submit", function (event) {
    event.preventDefault();

    let city = $("input#citySearch").val().trim();
    //console.log(genre);

    $.get("/artists/city/" + city, function () {
      window.location.assign("/artists/city/" + city);
    });
  });

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

      window.location.assign("/user/" + result.ArtistId);
    });
  });

  $(".editPostBtn").on("click", function (event) {
    event.preventDefault();
    let id = $(this).data("id");
    console.log(id);

    $("form#editBlog").attr("data-id", id);
    $("#editPost").modal("show");
  });

  $(".saveChanges").on("click", function (event) {
    event.preventDefault();

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

    $.ajax({
      url: "/api/artists/blog/" + id,
      method: "DELETE",
    }).then(function (result) {
      console.log("result in blog 'delete' query fronted");
      console.log(result);
      location.reload();
    });
  });

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

    let bandcamp = $("input#bandcamp").val().trim();
    let twitch = $("input#twitch").val().trim();
    let discogs = $("input#discogs").val().trim();
    let bio = $("textarea#bio").val().trim();
    let id = $(this).data("id");

    let extras = {
      bandcamp: bandcamp,
      twitch: twitch,
      discogs: discogs,
      bio: bio,
      ArtistId: id,
    };

    $.post("/api/artists/extras", extras, function (result) {

      window.location.assign("/user/" + result.ArtistId);
    });
  });

  //Request for editing profile extras

  $("#remixInfoBtn").on("click", function () {
    $("#remixInfoModal").modal("show");
  });

  $("#remixExtrasBtn").on("click", function (event) {
    event.preventDefault();
    $(this).closest("form").submit();
  });

  $("#remixForm").on("submit", function (event) {
    event.preventDefault();
    console.log("extras update submission");

    let bandcamp = $("input#remix-bandcamp").val().trim();
    let twitch = $("input#remix-twitch").val().trim();
    let discogs = $("input#remix-discogs").val().trim();
    let bio = $("textarea#remixBio").val().trim();
    let id = $(this).data("id");

    let extras = {
      bandcamp: bandcamp,
      twitch: twitch,
      discogs: discogs,
      bio: bio,
      ArtistId: id,
    };

    $.ajax({
      url: "/artists/extras",
      method: "PUT",
      data: extras,
    }).then(function (result) {
      console.log("inside put request response for extras")
      console.log(result);
      location.reload();
     
    });
  });

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

      window.location.assign("/user/" + result);
    });
  });

  //Delete a Mix
  $("#newMixBtn").on("click", function () {
    $("#newMixModal").modal("show");
  });

  $("#confirmDeleteMix").on("click", function (event) {
    event.preventDefault();
    $(this).closest("form").submit();
  });

  $("#deleteMixForm").on("submit", function (event) {
    event.preventDefault();
    console.log("Mixes deletion submission");

    let url = $("input#deleteMixURL").val().trim();
    let id = $(this).data("id");

    let mix = {
      url: url,
      ArtistId: id,
    };

    $.ajax({
      url: "/delete/mix",
      method: "DELETE",
      data: mix,
    }).then(function (result) {
      console.log("result in blog 'delete' query fronted");
      console.log(result);
      location.reload();
    });
  });

  //Updating Profile Picture
  //======================================================
  $('[data-bs-toggle="tooltip"]').tooltip();

  $("#profilePic").on("click", function (event) {
    event.preventDefault();
    $("#profilePicModal").modal("show");
  });

  $("#savePictureBtn").on("click", function (event) {
    event.preventDefault();
    $(this).closest("form").submit();
  });

  $("#editPicForm").on("submit", function (event) {
    event.preventDefault();
    console.log("Profile Pic form submission");

    let url = $("input#newPicURL").val().trim();
    let id = $(this).data("id");

    let image = {
      image: url,
      //ArtistId: id,
    };

    $.ajax({
      url: "/artists/image",
      method: "PUT",
      data: image,
    }).then(function (result) {
      console.log(result);
      location.reload();
      //window.location.assign("/user/" + result);
    });
  });
});
