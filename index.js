// Your code goes here
function domContentLoaded(){
  document.addEventListener('DOMContentLoaded', updateDOM())
}

function updateDOM(event){
  let text = document.querySelector('#text');
  text.innerHTML='JavaScript is so cool. It lets me add text to my page programmatically.';
}
