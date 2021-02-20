$(document).ready(() => {

var padOne = new Audio("/assets/drum-main-sounds/kit1/kick-1.wav");
var padTwo = new Audio("/assets/drum-main-sounds/kit1/snare-1.wav");
var padThree = new Audio("/assets/drum-main-sounds/kit1/closed-hat-1.wav");
var padFour = new Audio("/assets/drum-main-sounds/kit1/clap-1.wav");
var padFive = new Audio("/assets/drum-main-sounds/kit2/kick-2.wav");
var padSix = new Audio("/assets/drum-main-sounds/kit2/snare-2.wav");
var padSeven = new Audio("/assets/drum-main-sounds/kit2/closed-hat-2.wav");
var padEight = new Audio("/assets/drum-main-sounds/kit2/clap-2.wav");
var padNine = new Audio("/assets/drum-main-sounds/kit3/kick-3.wav");
var padTen = new Audio("/assets/drum-main-sounds/kit3/snare-3.wav");
var padEleven = new Audio("/assets/drum-main-sounds/kit3/closed-hat-3.wav");
var padTwelve = new Audio("/assets/drum-main-sounds/kit3/clap-3.wav");

  $().on("keydown", function (e) {
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
