var i = 0;
var txt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus eleifend massa, sit amet vulputate nulla sagittis id. In dapibus ultrices vehicula. Aliquam in metus tempus, egestas magna id, eleifend nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus eleifend massa, sit amet vulputate nulla sagittis id. ';
var speed = 20;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}