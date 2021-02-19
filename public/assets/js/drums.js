$(document).ready(() => {
  // <<------ Drum Emulator ------>>

q

  $("body").on("keydown", function (e) {
    if ($("#checkbox").is(":checked") == false) {
      e.stopImmediatePropagation();
    } else {
      var code = e.keyCode;
      var kc = String.fromCharCode(e.keyCode);
      $("div[data-code='" + code + "']").addClass("active");
      console.log(code);

      switch (kc) {
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
    }
  });
  $(window).keyup(function (e) {
    var code = e.keyCode;
    $("div[data-code='" + code + "']").removeClass("active");
  });
});
// <<------ Drum Emulator End ------>>
