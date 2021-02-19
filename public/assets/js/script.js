$(document).ready(() => {

  //Search Results functions and requests
  //=======================================================

  //Searching by Genre
  $("form.genreSearch").on("submit", function (event) {
    event.preventDefault();

    let genre = $("input#genreSearch").val().trim();

    $.get("/genre/" + genre, function () {
      window.location.assign("/genre/" + genre);
    });
  });

  //Searching by City
  $("form.citySearch").on("submit", function (event) {
    event.preventDefault();

    let city = $("input#citySearch").val().trim();

    $.get("/city/" + city, function () {
      window.location.assign("/city/" + city);
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

    let url = $("input#newPicURL").val().trim();
    let id = $(this).data("id");

    let image = {
      image: url,
    };

    $.ajax({
      url: "/artists/image",
      method: "PUT",
      data: image,
    }).then(function (result) {

      location.reload();
    });
  });
});
