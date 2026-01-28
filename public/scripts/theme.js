//const urlParams = new URLSearchParams(window.location.search);

if (urlParams.has('watercolor')) {
  const style = document.createElement('link');
  style.href = "styles/index/watercolor.css";
  style.rel = "stylesheet";
  style.type = "text/css";
  style.media = "all";
  
  document.body.appendChild(style);
}