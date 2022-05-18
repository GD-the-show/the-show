let body = document.body;
let back = document.querySelector('.people');
let main = document.querySelector('.container');

let Shakkum= document.querySelector('.Shakkum');

Shakkum.addEventListener('mouseover', function(){
    back.style.backgroundColor = "rgb(176, 228, 250)";
    main.style.backgroundColor = "rgb(176, 228, 250)";
})
Shakkum.addEventListener('mouseout', function(){
  back.style.backgroundColor = "white";
  main.style.backgroundColor = "white";
})

let Sasha= document.querySelector('.Danilov');

Sasha.addEventListener('mouseover', function(){
    back.style.backgroundColor = "rgb(246, 229, 200)";
    main.style.backgroundColor = "rgb(246, 229, 200)";
})
Sasha.addEventListener('mouseout', function(){
  back.style.backgroundColor = "white";
  main.style.backgroundColor = "white";
})

let Nastya= document.querySelector('.Nastya');

Nastya.addEventListener('mouseover', function(){
    back.style.backgroundColor = "rgb(220, 234, 206)";
    main.style.backgroundColor = "rgb(220, 234, 206)";
})
Nastya.addEventListener('mouseout', function(){
  back.style.backgroundColor = "white";
  main.style.backgroundColor = "white";
})

let Dzhul= document.querySelector('.Dzhul');

Dzhul.addEventListener('mouseover', function(){
    back.style.backgroundColor = "rgb(186, 183, 210)";
    main.style.backgroundColor = "rgb(186, 183, 210)";
})
Dzhul.addEventListener('mouseout', function(){
  back.style.backgroundColor = "white";
  main.style.backgroundColor = "white";
})

let Katya= document.querySelector('.Katya');

Katya.addEventListener('mouseover', function(){
    back.style.backgroundColor = "rgb(248, 224, 117)";
    main.style.backgroundColor = "rgb(248, 224, 117)";
})
Katya.addEventListener('mouseout', function(){
  back.style.backgroundColor = "white";
  main.style.backgroundColor = "white";
})

let Asya= document.querySelector('.Asya');

Asya.addEventListener('mouseover', function(){
    back.style.backgroundColor = "rgb(98, 186, 206)";
    main.style.backgroundColor = "rgb(98, 186, 206)";
})
Asya.addEventListener('mouseout', function(){
  back.style.backgroundColor = "white";
  main.style.backgroundColor = "white";
})

let Hy= document.querySelector('.Hy');

Hy.addEventListener('mouseover', function(){
    back.style.backgroundColor = "rgb(154, 198, 86)";
    main.style.backgroundColor = "rgb(154, 198, 86)";
})
Hy.addEventListener('mouseout', function(){
  back.style.backgroundColor = "white";
  main.style.backgroundColor = "white";
})

let Johanna= document.querySelector('.Johanna');

Johanna.addEventListener('mouseover', function(){
    back.style.backgroundColor = "rgb(245, 204, 155)";
    main.style.backgroundColor = "rgb(245, 204, 155)";
})
Johanna.addEventListener('mouseout', function(){
  back.style.backgroundColor = "white";
  main.style.backgroundColor = "white";
})

let Mar= document.querySelector('.Mar');

Mar.addEventListener('mouseover', function(){
    back.style.backgroundColor = "rgb(234, 173, 189)";
    main.style.backgroundColor = "rgb(234, 173, 189)";
})
Mar.addEventListener('mouseout', function(){
  back.style.backgroundColor = "white";
  main.style.backgroundColor = "white";
})

let Kris= document.querySelector('.Kris');

Kris.addEventListener('mouseover', function(){
    back.style.backgroundColor = "rgb(243, 169, 74)";
    main.style.backgroundColor = "rgb(243, 169, 74)";
})
Kris.addEventListener('mouseout', function(){
  back.style.backgroundColor = "white";
  main.style.backgroundColor = "white";
})

let Marina= document.querySelector('.Marina');

Marina.addEventListener('mouseover', function(){
    back.style.backgroundColor = "rgb(190, 78, 74)";
    main.style.backgroundColor = "rgb(190, 78, 74)";
})
Marina.addEventListener('mouseout', function(){
  back.style.backgroundColor = "white";
  main.style.backgroundColor = "white";
})

let Nat= document.querySelector('.Nat');

Nat.addEventListener('mouseover', function(){
    back.style.backgroundColor = "rgb(183, 215, 171)";
    main.style.backgroundColor = "rgb(183, 215, 171)";
})
Nat.addEventListener('mouseout', function(){
  back.style.backgroundColor = "white";
  main.style.backgroundColor = "white";
})

let Naz= document.querySelector('.Naz');

Naz.addEventListener('mouseover', function(){
    back.style.backgroundColor = "rgb(248, 238, 178)";
    main.style.backgroundColor = "rgb(248, 238, 178)";
})
Naz.addEventListener('mouseout', function(){
  back.style.backgroundColor = "white";
  main.style.backgroundColor = "white";
})

let Pol= document.querySelector('.Pol');

Pol.addEventListener('mouseover', function(){
    back.style.backgroundColor = "rgb(206, 204, 198)";
    main.style.backgroundColor = "rgb(206, 204, 198)";
})
Pol.addEventListener('mouseout', function(){
  back.style.backgroundColor = "white";
  main.style.backgroundColor = "white";
})

let Vas= document.querySelector('.Vas');

Vas.addEventListener('mouseover', function(){
    back.style.backgroundColor = "rgb(246, 193, 74)";
    main.style.backgroundColor = "rgb(246, 193, 74)";
})
Vas.addEventListener('mouseout', function(){
  back.style.backgroundColor = "white";
  main.style.backgroundColor = "white";
})

// window.screen.width > 600

// if (window.screen.width > 1000) {

    function transformScroll(event) {
      if (!event.deltaY) {
        return;
      }
    
      event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
      event.preventDefault();
    }
    
    var element = document.scrollingElement || document.documentElement;
    element.addEventListener('wheel', transformScroll);
// }

function myFunction() {
    var x = document.getElementById("b2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}









