document.getElementById("bars").addEventListener("click", () => {
    document.getElementById("nav").classList.toggle("nav-show");
})

document.getElementById("body").addEventListener("click", (e) => {
    if (e.target.id != "bars"){
        document.getElementById("nav").classList.remove("nav-show");
    }
}) 
document.getElementById("body").addEventListener("mousemove", (e) => {
    if(e.target.id != "bars"){
        document.getElementById("nav").classList.remove("nav-show");
    }
})