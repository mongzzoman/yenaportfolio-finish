window.addEventListener("click", onClick);

function onClick(e) {
  let circle = document.createElement("main");
  let radius = Math.floor(Math.random() * 150 + 50);

  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  let o = Math.floor(Math.random() * 50 + 50);

  circle.style.position = "absolute";
  circle.style.width = radius + "px";
  circle.style.height = radius + "px";

  circle.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  circle.style.opacity = o + "%";
  circle.style.left = e.pageX - radius * 0.5 + "px";
  circle.style.top = e.pageY - radius * 0.5 + "px";
  circle.style.transform = "scale(0, 0)";
  gsap.to(circle, { scale: 1, ease: "back.out(1.7)", duration: 0.5 });
  document.body.appendChild(circle);
}
