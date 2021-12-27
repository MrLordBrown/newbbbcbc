var wrapit = document.getElementsByClassName('wrapper');

for (var i = 0; i < wrapit.length; i++) {
  wrapit[i].addEventListener('click', wrappy);
}
function wrappy() {
  var w = this.style.zindex;
  if (w == 0) {
    w = 10;
  } else {
    w = 0;
  }
  this.classList.toggle('open');
}
