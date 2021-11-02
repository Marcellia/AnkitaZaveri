let count = 0;
const increment = () => {
  for (let i = 0; i < 100; i++) {
    document.querySelector(".gradient").style.width = `${count}%`;
    count++;

    console.log(count);
  }

  count = 0;
};

increment();
document.getElementById("projects").addEventListener("click", increment);

var i = 0;
var txt = "Hello! My name is...";
var speed = 200;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typeEffect").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
