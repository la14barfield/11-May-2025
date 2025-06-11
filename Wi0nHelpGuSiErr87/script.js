setTimeout(function () {
    document.getElementById("box1").style.display = "block";
  }, 100);
  setTimeout(function () {
   startalert_popup();
}, 100);
  function startalert_popup() {
      $("#box2").delay(500).fadeIn(500);
      $("#box3").delay(1000).fadeIn(500);
      $("#box4").delay(1500).fadeIn(500);


  }
