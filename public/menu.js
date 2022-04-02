
/* let subNav = document.querySelector(".subNav");
let more = document.querySelector(".more");
more.addEventListener("click",function(){
    subNav.style.display = "block";  
})
more.onclick = function() {
    subNav.style.display = "none";
} */

$(document).ready(function () {
    $(".more").click(function () {
        $(".subNav").slideToggle(1000)
    })
})