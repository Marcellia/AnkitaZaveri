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
var j = 0;
var txt = "Hello! My name is";
var myName = "Ankita Zaveri.";
var speed = 200;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typeEffect").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    console.log(i);
  }
}

let nameWriter = () => {
  document.getElementById("secondCursor").innerHTML = "|";
  document.getElementById("blinkingCursor").classList.add("hide");
  if (j < myName.length) {
    document.getElementById("nameEffect").innerHTML += myName.charAt(j);
    j++;
    setTimeout(nameWriter, speed);
    console.log(j);
  }
  console.log("exit");
};

setTimeout(typeWriter, 1000);

setTimeout(nameWriter, 5000);
