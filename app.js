let body = document.body;

function transformScroll(event) {
    if (!event.deltaY) {
      return;
    }
  
    event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
    event.preventDefault();
  }
  
  var element = document.scrollingElement || document.documentElement;
  element.addEventListener('wheel', transformScroll);

//   if ( $(window).width() > 900 ) {
//     function transformScroll(event) {
//         if (!event.deltaY) {
//           return;
//         }
      
//         event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
//         event.preventDefault();
//       }
      
//       var element = document.scrollingElement || document.documentElement;
//       element.addEventListener('wheel', transformScroll);
//     }

