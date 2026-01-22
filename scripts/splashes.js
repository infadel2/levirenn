const splashesLocation = "/splashes.txt";

fetch(splashesLocation)
.then(response => response.text())
.then(text => {
  const splashesRay = text.split('\n');
  const splashesRand = Math.floor(Math.random() * splashesRay.length);
  const splashesPick = splashesRay[splashesRand];
  
  document.getElementById("splash").innerHTML = splashesPick;
});