window.onload = function() {
  /* if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    document.querySelector(".nav a", ":hover").style.backgroundColor =
      "#0d171a";
  } */
  document.querySelector(".nav a").addEventListener("click", function() {
    document.querySelector(".nav a").style.backgroundColor = "#0d171a";
  });
};
