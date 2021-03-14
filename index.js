var name=prompt("Please enter your name: ")
var green = new Audio("green.mp3");
var blue = new Audio("blue.mp3");
var red = new Audio("red.mp3");
var yellow = new Audio("yellow.mp3");
var wrong = new Audio("wrong.mp3");
var color = ["blue", "green", "red", "yellow"];
var z;
var k = -1;
var p = [];
var mp = [];
var i = 0;
$("h1").html("Hi "+name);
// firstclick
document.querySelector("#start").addEventListener("click", function() {
  $("h1").html("LEVEL 1")
  z = Math.floor(Math.random() * 4);
  $("#" + color[z]).fadeOut(250).fadeIn(250);
  sound(z);
  p.push(color[z]);
  $("#start").addClass("visibility");
})

// firstclickends
// getting input
$(".btn").on('click', function() {

  mp.push(this.getAttribute("id"));
  k++;
  var z = this.classList;
  if (mp.length < p.length && mp[k] == p[k]) {
    z.add("pressed");
    setTimeout(function() {
      z.remove("pressed");
    }, 200)
  } else if (mp[k] != p[k]) {
    wrong.play();
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 500);
    p = [];
    mp = [];
    k = -1;
    i = 0;
    $("h1").html("GAME-OVER");
    $("#start").html("Retry");
    $("#start").removeClass("visibility");
  } else if (mp.length == p.length && mp[k] == p[k]) {
    z.add("pressed");
    setTimeout(function() {
      z.remove("pressed");
    }, 200);
    mp = [];
    k = -1;
    $("h1").html("LEVEL " + (++i));
    setTimeout(function() {
      press();
    }, 300)
  }
})

function sound(i) {
  if (i === 0) {
    blue.play();
  } else if (i === 1) {
    green.play();
  } else if (i === 2) {
    red.play();
  } else {
    yellow.play();
  }
}

function press() {
  z = Math.floor(Math.random() * 4);
  $("#" + color[z]).fadeOut(250).fadeIn(250);
  sound(z);
  p.push(color[z]);
  $("#start").addClass("visibility");
}

function soundOp(z) {
  switch (z) {
    case "blue":
      blue.play();
      break;
    case "green":
      green.play();
      break;
    case "yellow":
      yellow.play();
      break;
    case "red":
      red.play();
      break;
    default:

  }
}
