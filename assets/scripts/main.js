/* ========= SCROLL TO TOP BUTTON ========= */
/* ========= from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp ========= */
//Get the button:
topbutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (window.scrollY > 20 || window.scrollY > 20) {
    topbutton.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  //window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* ========= KEEP SCROLL POSITION ========= */
function refreshPage() {
  let page_y = document.getElementsByTagName("body")[0].scrollTop;
  window.location.href = window.location.href.split('?')[0] + '?page_y=' + page_y;
}
window.onload = function() {
  if ( window.location.href.indexOf('page_y') != -1 ) {
      let match = window.location.href.split('?')[1].split("&")[0].split("=");
      document.getElementsByTagName("body")[0].scrollTop = match[1];
  }
};

/* ========= LIGHT / DARK THEME ========= */
/*const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const body = document.body;

darkButton.onclick = () => {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
};
lightButton.onclick = () => {
  body.classList.replace('dark', 'light');
  localStorage.setItem('theme', 'light');
};*/

/* ========= APPLY THE CACHED THEME ON RELOAD ========= */
const theme = localStorage.getItem('theme');
const page_y = localStorage.getItem('page_y');

/*if (theme) {
  body.classList.add(theme);
};*/
