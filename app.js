// we declare a new global variable containing an array that represents the ballons map
const color = [
  "green",
  "red",
  "violet",
  "black",
  "yellow",
  "purple",
  "grey",
  "gray",
  "brown",
  "blue",
  "pink",
  "orange",
];

let start = ""
// you have to add more colors into the ballonsMap array
let ballonsAlive = 20;
//generando de forma dinamica los colores
for (let i = 0; i < 20; i++) {
  const randomColor = color[Math.floor(Math.random() * color.length)];
  let ballon = document.createElement("div");
  ballon.classList.add("balloon", "balloon");
  ballon.style.background = randomColor;
  ballon.id = i;

  // Agregar EventListener a cada ballon:
  ballon.addEventListener("click", (e) => {
    if(ballonsAlive===20){
        start = Date.now()
    }
    ballon.style.visibility = "hidden";
    ballonsAlive--;
    render();
  });

  // Agregar cada ballon a la lista de ballons:
  document.querySelector("#balloon-map").appendChild(ballon);
}

const render = () => {
  document.querySelector("#balloon-count").innerHTML = ballonsAlive; // <-- render the balloon count into the DOM

  if (ballonsAlive == 0) {
    console.log((Date.now() - start)/1000)
    document.querySelector("#balloon-map").innerHTML =
      `<h3 class="win">Tiempo: ${(Date.now() - start)/1000} segundos</h3><h1 class='win'>You balloon serial popper!</h1><h1 class='win'>Play again!</h1>`;
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  } // <--- reload website when no more balloons are left
};

// this makes the "render" function trigger when the website starts existing
window.onload = render();
