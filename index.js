// Your code goes here
function domContentLoaded(){
    document.addEventListener("DOMContentLoaded", updateDOM,false);
};


function updateDOM(event){
  document.querySelector("#text").innerHTML = "This is really cool!"
};
