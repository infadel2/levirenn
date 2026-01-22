// google.com how normal again stop now

const current = document.location.host;
const target_nw = 'https://leviathan.nekoweb.org';
const target_nc = 'https://levirenn.neocities.org';

document.getElementById("domain").innerHTML = current;

if (location.hostname == "leviathan.nekoweb.org") {
  document.getElementById("switch-link").setAttribute('href', target_nc);
  document.getElementById("follow").setAttribute('style', 'display: inline !important');
  // https://neocities.org/site/levirenn?event_id=5211517
} else {
  document.getElementById("domain").innerHTML = "localhost";
}

//if (location.hostname != "localhost") {
//  document.getElementById("switch").setAttribute('style', 'display: inline !important');
//}