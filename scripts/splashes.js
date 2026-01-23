const splashesLocation = "/splashes.txt";
  
fetch(splashesLocation)
.then(response => response.text())
.then(text => {
  const splashesRay = text.split('\n');
  const splashesRand = Math.floor(Math.random() * splashesRay.length);
  const splashesPick = splashesRay[splashesRand];
  
  document.getElementById("splash").innerHTML = splashesPick;
})
.catch(error => {
  console.error("An error occured. Fallback splash will be displayed instead.\nE:", error);
  document.getElementById("splash").innerHTML = "Sounds at Work!";
});