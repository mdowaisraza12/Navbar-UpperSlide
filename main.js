document.getElementById("nav").addEventListener("mouseover", () => {
    document.getElementById("nav").style.rotate = "45deg"
})
document.getElementById("nav").addEventListener("mouseleave", () => {
    document.getElementById("nav").style.rotate = "0deg"
})
// document.getElementById("nav").addEventListener("click", () => {
//     document.getElementById("nava").style.height="100vh"
// })
// document.getElementById("nav").addEventListener("dblclick", () => {
//     document.getElementById("nava").style.height="0vh"
// })

document.getElementById("cta").addEventListener("mouseenter", () => {
    document.getElementById("hero").style.backgroundColor = "burlywood"
})

document.getElementById("cta").addEventListener("mouseleave", () => {
    document.getElementById("hero").style.backgroundColor = "white"
})

