var myIndex = 0;

for (i = 0; i <= 4; i++) {
  var x = document.getElementsByClassName("mySlides" + i);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  if (i === 0 || i === 4) {
    setTimeout(carousel[i], 1500); // Change image every 2 seconds
  } else if (i === 1) {
    setTimeout(carousel[i], 1400);
  } else if (i === 2) {
    setTimeout(carousel[i], 1750);
  } else if (i === 3) {
    setTimeout(carousel[i], 1200);
  }
}
