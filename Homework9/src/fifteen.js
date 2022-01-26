$(function () {
  $(document).ready(function () {
    const divs = $("#puzzlearea").find("div");

    // initialize each piece
    for (let i = 0; i < divs.length; i++) {
      const div = divs[i];

      // calculate x and y for this piece
      const x = (i % 4) * 100;
      const y = Math.floor(i / 4) * 100;

      // set basic style and background
      div.className = "puzzlepiece";
      div.style.left = x + "px";
      div.style.top = y + "px";
      div.style.backgroundImage = 'url("../images/background.jpg")';
      div.style.backgroundPosition = -x + "px " + -y + "px";

      // store x and y for later
      div.x = x;
      div.y = y;
    }
  });

  $(document).on("click", ".puzzlepiece", function (event) {
    move(event.target);
  });

  $("#shufflebutton").click(function () {
    for (var j = 0; j < Math.random() * 100; j++) {
        $(".puzzlepiece").click();
      }
  });


  $(".puzzlepiece").hover(function(){
    $(this).css("background-color", "red");
    }, function(){
    $(this).css("background-color", "white");
  });

  function move(target) {
    let left = parseInt($(target).position().left);

    if (left % 100 != 0) {
      left++;
    }

    let top = parseInt($(target).position().top);

    if (top % 100 != 0) {
      top++;
    }

    let posX = left;
    let posY = top - 100;

    if (checkPlace(posX, posY, target)) {
      return;
    }
    posX = left;
    posY = top + 100;

    if (checkPlace(posX, posY, target)) {
      return;
    }

    posX = left - 100;
    posY = top;

    if (checkPlace(posX, posY, target)) {
      return;
    }

    posX = left + 100;
    posY = top;

    if (checkPlace(posX, posY, target)) {
      return;
    }

  }

  function checkPlace(checkLeft, checkTop, target) {
    let temp = $(".puzzlepiece").filter(function () {
      return (
        $(this).css("left") === checkLeft + "px" &&
        $(this).css("top") === checkTop + "px"
      );
    });

    let checkElement = true;
    if (temp.length == 1) checkElement = false;
    if (
      checkTop >= 0 &&
      checkLeft <= 300 &&
      checkLeft >= 0 &&
      checkTop <= 300 &&
      checkElement
    ) {
      $(target).css("left", checkLeft + "px");
      $(target).css("top", checkTop + "px");
      return true;
    }

    return false;
  }
});
