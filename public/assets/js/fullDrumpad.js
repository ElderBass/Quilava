// <<------ Drum Emulator ------>>

var kitOnePadOne = new Audio("/assets/drum-sounds/kick-1.wav");
var kitOnePadTwo = new Audio("/assets/drum-sounds/snare-1.wav");
var kitOnePadThree = new Audio("/assets/drum-sounds/clap-1.wav");
var kitOnePadFour = new Audio("/assets/drum-sounds/hat-1.wav");
var kitOnePadFive = new Audio("/assets/drum-sounds/kick-2.wav");
var kitOnePadSix = new Audio("/assets/drum-sounds/snare-2.wav");
var kitOnePadSeven = new Audio("/assets/drum-sounds/clap-2.wav");

var kitTwoPadOne = new Audio("/assets/drum-sounds/hat-2.wav");
var kitTwoPadTwo = new Audio("/assets/drum-sounds/kick-3.wav");
var kitTwoPadThree = new Audio("/assets/drum-sounds/snare-3.wav");
var kitTwoPadFour = new Audio("/assets/drum-sounds/clap-3.wav");
var kitTwoPadFive = new Audio("/assets/drum-sounds/hat-3.wav");
var kitTwoPadSix = new Audio("/assets/drum-sounds/hat-3.wav");
var kitTwoPadSeven = new Audio("/assets/drum-sounds/hat-3.wav");

var kitThreePadOne = new Audio("/assets/drum-sounds/hat-2.wav");
var kitThreePadTwo = new Audio("/assets/drum-sounds/hat-2.wav");
var kitThreePadThree = new Audio("/assets/drum-sounds/hat-2.wav");
var kitThreePadFour = new Audio("/assets/drum-sounds/hat-2.wav");
var kitThreePadFive = new Audio("/assets/drum-sounds/hat-2.wav");
var kitThreePadSix = new Audio("/assets/drum-sounds/hat-2.wav");
var kitThreePadSeven = new Audio("/assets/drum-sounds/hat-2.wav");

var kitFourPadOne = new Audio("/assets/drum-sounds/hat-2.wav");
var kitFourPadTwo = new Audio("/assets/drum-sounds/hat-2.wav");
var kitFourPadThree = new Audio("/assets/drum-sounds/hat-2.wav");
var kitFourPadFour = new Audio("/assets/drum-sounds/hat-2.wav");
var kitFourPadFive = new Audio("/assets/drum-sounds/hat-2.wav");
var kitFourPadSix = new Audio("/assets/drum-sounds/hat-2.wav");
var kitFourPadSeven = new Audio("/assets/drum-sounds/hat-2.wav");





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
        kitTwoPadOne.load();
        kitTwoPadOne.play();
        break;
      case "W":
        kitTwoPadTwo.load();
        kitTwoPadTwo.play();
        break;
      case "E":
        kitTwoPadThree.load();
        kitTwoPadThree.play();
        break;
      case "R":
        kitTwoPadFour.load();
        kitTwoPadFour.play();
        break;
      case "A":
        kitThreePadOne.load();
        kitThreePadOne.play();
        break;
      case "S":
        kitThreePadTwo.load();
        kitThreePadTwo.play();
        break;
      case "D":
        kitThreePadThree.load();
        kitThreePadThree.play();
        break;
      case "F":
        kitThreePadFour.load();
        kitThreePadFour.play();
        break;
      case "Z":
        kitFourPadOne.load();
        kitFourPadOne.play();
        break;
      case "X":
        kitFourPadTwo.load();
        kitFourPadTwo.play();
        break;
      case "C":
        kitFourPadThree.load();
        kitFourPadThree.play();
        break;
      case "V":
        kitFourPadFour.load();
        kitFourPadFour.play();
        break;
      default:
    }
  }
});
$(window).keyup(function (e) {
  var code = e.keyCode;
  $("div[data-code='" + code + "']").removeClass("active");
});

// <<------ Drum Emulator End ------>>
