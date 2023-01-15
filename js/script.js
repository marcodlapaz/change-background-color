function changeColor(color) {
  document.body.style.background = color;

  //   Mark as active selected color
  document.querySelectorAll("span").forEach(function (item) {
    item.classList.remove("active");
  });

  event.target.classList.add("active");
}
