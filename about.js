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
