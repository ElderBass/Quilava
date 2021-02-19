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
    console.log("inside put request response for extras");
    console.log(result);
    location.reload();
  });
});
