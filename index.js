// console.log("from js file")
const heading = document.getElementById("heading-id")
const confirmButton = document.getElementById("confirm")

const inputField = document.getElementById("input-field")

const ul = document.getElementById("ul")
const red = document.getElementById("red")
const purple = document.getElementById("purple")
red.onclick = bgRed ;
// console.log(heading)
const headingClass = document.getElementsByClassName("class-heading")
// console.log(headingClass)
const  headingTag = document.getElementsByTagName("li")
// console.log(headingTag)
const selector = document.querySelectorAll("li")
// console.log(selector)
// heading.style.color = "green"
// heading.style.backgroundColor = "red"
heading.classList.add("text-red-500")
heading.classList.remove("bg-red-500")
// console.log(heading.getAttribute("id"))
// heading.setAttribute("class","text-center bg-red-500")
heading.removeAttribute("class")
// console.log(heading.classList)

inputField.addEventListener("keyup" , function (){
    console.log(inputField.value)
    if(inputField.value == "confirm"){
        confirmButton.removeAttribute("disabled")
    }
    else {
        confirmButton.setAttribute("disabled", true)
    }
})
function bgGreen(){
    ul.style.display = "flex"
       ul.style.flexDirection = "row"
    ul.style.gap  = "10px"
    ul.style.listStyle  = "none"
    heading.style.color = "red"
    document.body.style.backgroundColor = "green"
}
function bgBlue(){
    ul.style.display = "flex"
    ul.style.flexDirection = "column"
    ul.style.gap  = "10px"
    ul.style.listStyle  = "disc"
    heading.style.color = "white"
    ul.style.color = "white"
    document.body.style.backgroundColor = "blue"
}
function bgRed(){
    ul.style.display = "flex"
    ul.style.flexDirection = "column-reverse"
    ul.style.gap  = "10px"
    ul.style.listStyle  = "disc"
    heading.style.color = "white"
    ul.style.color = "white"
    document.body.style.backgroundColor = "red"
}
purple.addEventListener("click", function (){
    document.body.style.backgroundColor = "purple"
})