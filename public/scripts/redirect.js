// https://arandomsite.neocities.org/snippets/#custom-neocities-thumbnail
const urlParams = new URLSearchParams(window.location.search);

if (navigator.userAgent.includes('Screenjesus')) {
  //window.location.replace(".thumb_contain");
  //Removed because I don't need it
} else if (navigator.userAgent.includes('Android') || 
           navigator.userAgent.includes('iPhone') || 
           navigator.userAgent.includes('iPad')) {
  window.location.replace("index_mobile");
} 

/* if (location.hostname != "levirenn.neocities.org" ||
    location.hostname != "leviathan.nekoweb.org" ||
    location.hostname != "localhost") {
  // Special anti-stealing script :)
  window.location.replace("https://levirenn.neocities.org");
} */