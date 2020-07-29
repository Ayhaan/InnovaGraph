// home
var icon = document.querySelectorAll('.down')[0];
// icon.className = "d-none"


// 
// addEventListener("scroll", () => {
//     var currentScroll = document.body.scrollTop || document.documentElement.scrollTop;
//     if (currentScroll >= "350") {

        
//     } else{

//     }

// });
window.onscroll = () => {scrollRotate()};

function scrollRotate() {
  var navimg = document.getElementById("imgblack");
  navimg.style.transform = "rotate("+ (window.pageYOffset/25) + "deg)"
}



