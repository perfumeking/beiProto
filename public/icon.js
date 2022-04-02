const icon = document.querySelector('.icon');
const closeicon = document.querySelector('.closeicon');
const qnaBox = document.querySelector('.qnaBox');
icon.addEventListener("click", function () {
    qnaBox.style.display = "block";
})
closeicon.addEventListener("click", function () {
    qnaBox.style.display = "none";
})