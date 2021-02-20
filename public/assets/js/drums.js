  $(document).ready(() => {

//Lite Drum Sounds
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

//Full Drum Sounds
var kitOnePadOne = new Audio("/assets/drum-main-sounds/kit1/kick-1.wav");
var kitOnePadTwo = new Audio("/assets/drum-main-sounds/kit1/snare-1.wav");
var kitOnePadThree = new Audio("/assets/drum-main-sounds/kit1/closed-hat-1.wav");
var kitOnePadFour = new Audio("/assets/drum-main-sounds/kit1/open-hat-1.wav");
var kitOnePadFive = new Audio("/assets/drum-main-sounds/kit1/clap-1.wav");
var kitOnePadSix = new Audio("/assets/drum-main-sounds/kit1/perc-1-a.wav");
var kitOnePadSeven = new Audio("/assets/drum-main-sounds/kit1/perc-1-b.wav");
var kitTwoPadOne = new Audio("/assets/drum-main-sounds/kit2/kick-2.wav");
var kitTwoPadTwo = new Audio("/assets/drum-main-sounds/kit2/snare-2.wav");
var kitTwoPadThree = new Audio("/assets/drum-main-sounds/kit2/closed-hat-2.wav");
var kitTwoPadFour = new Audio("/assets/drum-main-sounds/kit2/open-hat-2.wav");
var kitTwoPadFive = new Audio("/assets/drum-main-sounds/kit2/clap-2.wav");
var kitTwoPadSix = new Audio("/assets/drum-main-sounds/kit2/perc-2-a.wav");
var kitTwoPadSeven = new Audio("/assets/drum-main-sounds/kit2/perc-2-b.wav");
var kitThreePadOne = new Audio("/assets/drum-main-sounds/kit3/kick-3.wav");
var kitThreePadTwo = new Audio("/assets/drum-main-sounds/kit3/snare-3.wav");
var kitThreePadThree = new Audio("/assets/drum-main-sounds/kit3/closed-hat-3.wav");
var kitThreePadFour = new Audio("/assets/drum-main-sounds/kit3/open-hat-3.wav");
var kitThreePadFive = new Audio("/assets/drum-main-sounds/kit3/clap-3.wav");
var kitThreePadSix = new Audio("/assets/drum-main-sounds/kit3/perc-3-a.wav");
var kitThreePadSeven = new Audio("/assets/drum-main-sounds/kit3/perc-3-b.wav");
var kitFourPadOne = new Audio("/assets/drum-main-sounds/kit4/kick-4.wav");
var kitFourPadTwo = new Audio("/assets/drum-main-sounds/kit4/snare-4.wav");
var kitFourPadThree = new Audio("/assets/drum-main-sounds/kit4/closed-hat-4.wav");
var kitFourPadFour = new Audio("/assets/drum-main-sounds/kit4/open-hat-4.wav");
var kitFourPadFive = new Audio("/assets/drum-main-sounds/kit4/clap-4.wav");
var kitFourPadSix = new Audio("/assets/drum-main-sounds/kit4/perc-4-a.wav");
var kitFourPadSeven = new Audio("/assets/drum-main-sounds/kit4/perc-4-b.wav");

//Determines which sounds key downs trigger based on which drum machine switch is turned on. No sounds, if neither are turned on. 

$(Window).on("keydown", function (e) {
  if ($("#checkboxlite").is(":checked") == true) {

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
    else if ($("#checkbox").is(":checked") == true) {

    var code = e.keyCode;
    var kc = String.fromCharCode(e.keyCode);
    $("div[data-code='" + code + "']").addClass("active");
    console.log(code);

    switch (kc) {
      case "1":
        kitOnePadOne.load();
        kitOnePadOne.play();
        break;
      case "2":
        kitOnePadTwo.load();
        kitOnePadTwo.play();
        break;
      case "3":
        kitOnePadThree.load();
        kitOnePadThree.play();
        break;
      case "4":
        kitOnePadFour.load();
        kitOnePadFour.play();
        break;
      case "5":
        kitOnePadFive.load();
        kitOnePadFive.play();
        break;
      case "6":
        kitOnePadSix.load();
        kitOnePadSix.play();
        break;
      case "7":
        kitOnePadSeven.load();
        kitOnePadSeven.play();
        break;
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
      case "T":
        kitTwoPadFive.load();
        kitTwoPadFive.play();
        break;
      case "Y":
        kitTwoPadSix.load();
        kitTwoPadSix.play();
        break;
      case "U":
        kitTwoPadSeven.load();
        kitTwoPadSeven.play();
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
      case "G":
        kitThreePadFive.load();
        kitThreePadFive.play();
        break;
      case "H":
        kitThreePadSix.load();
        kitThreePadSix.play();
        break;
      case "J":
        kitThreePadSeven.load();
        kitThreePadSeven.play();
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
      case "B":
        kitFourPadFive.load();
        kitFourPadFive.play();
        break;
      case "N":
        kitFourPadSix.load();
        kitFourPadSix.play();
        break;
      case "M":
        kitFourPadSeven.load();
        kitFourPadSeven.play();
        break;
    }
  }   { e.stopImmediatePropagation();
      } 
});

  $(Window).keyup(function (e) {
    var code = e.keyCode;
    $("div[data-code='" + code + "']").removeClass("active");
  });
});

