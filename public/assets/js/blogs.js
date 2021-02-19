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

$("#editPostBtn").on("click", function (event) {
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

$("#deletePostBtn").on("click", function (event) {
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
