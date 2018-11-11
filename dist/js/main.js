window.addEventListener("scroll", function(e) {
  var nav = document.getElementsByClassName("menu");
  console.log(nav[0].classList);
  if (
    document.documentElement.scrollTop ||
    document.body.scrollTop > window.innerHeight
  ) {
    console.log("Hi");
    nav[0].classList.add("opaque");
  } else {
    nav[0].classList.remove("opaque");
  }
});
