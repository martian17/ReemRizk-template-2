let header = document.getElementById("nav-header");
header.querySelector(".burger").addEventListener("click",(e)=>{
    e.preventDefault();
    e.stopPropagation();
    header.classList.toggle("expanded");
});
window.addEventListener("click",()=>{
    header.classList.remove("expanded");
});