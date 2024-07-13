//---------------------------------------------------------------------------------------------------------------------------------------
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 450) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//---------------------------------------------------------------------------------------------------------------------------------------
let switches = document.getElementsByClassName('switch');
let style = localStorage.getItem('style');

if (style == null) {
  setTheme('light');
} else {
  setTheme(style);
}

for (let i of switches) {
  i.addEventListener('click', function () {
    let theme = this.dataset.theme;
    setTheme(theme);
  });
}
//---------------------------------------------------------------------------------------------------------------------------------------
function setTheme(theme) {
  if (theme == 'light') {
    document.getElementById('switcher-id').href = 'themes/light.css';
  } else if (theme == 'dark') {
    document.getElementById('switcher-id').href = 'themes/dark.css';
  }
  localStorage.setItem('style', theme);
}
//---------------------------------------------------------------------------------------------------------------------------------------
var skewed = document.querySelector('.skewed')
window.addEventListener('scroll', function(){
  var value = -10 + window.scrollY/60;
  skewed.style.transform = "skewY("+ value +"deg)"
})
//---------------------------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
  let views = localStorage.getItem("viewsCount");

  if (views === null) {
      views = 1;
  } else {
      views = parseInt(views) + 1;
  }

  document.getElementById("view-counter").textContent = views;
  localStorage.setItem("viewsCount", views);
});
//---------------------------------------------------------------------------------------------------------------------------------------
function myFunction1() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("drisnja2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
    
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Text hide"; 
    moreText.style.display = "inline";
  }
}
//---------------------------------------------------------------------------------------------------------------------------------------
var canvas = document.getElementById("my-canvas1");
var context = canvas.getContext("2d");
context.fillStyle = "white";
context.font = "bold 15px Arial";
context.textAlign = 'center';
context.textBaseline = 'middle';
context.fillText("New", (canvas.width / 2), (canvas.height / 2));
//---------------------------------------------------------------------------------------------------------------------------------------