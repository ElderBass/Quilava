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
  let id = $(this).data("id");

  let mix = {
    url: url,
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
