let body = document.body;
let back = document.querySelector('.aboutProject');
let main = document.querySelector('.container_Johanna');

back.style.backgroundColor = "rgb(243, 169, 74)";
main.style.backgroundColor = "rgb(243, 169, 74)";


function transformScroll(event) {
    if (!event.deltaY) {
      return;
    }
  
    event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
    event.preventDefault();
  }
  
  var element = document.scrollingElement || document.documentElement;
  element.addEventListener('wheel', transformScroll);

  function myFunction() {
    var x = document.getElementById("b2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


