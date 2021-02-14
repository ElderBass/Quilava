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
      console.log("Result, coming from query response");
      console.log("body = "+result.body);
      console.log("title = " +result.title)
    renderFeed(result, event);
    location.reload();
    });
  });
//this disappears right away and I'm not sure why
  function renderFeed (data, event) {
    event.preventDefault();
    let post = $("<div>");
    post.attr("class", "container");
    post.attr("style", "border: solid, 3px, black");

    let title = $("<h4>");
    title.text(data.title);

    let body = $("<p>");
    body.text(data.body);

    post.append(title, body);

    console.log(post);
    $("#blogFeed").append(post);
  }
});
