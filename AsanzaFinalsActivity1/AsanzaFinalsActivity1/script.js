console.log(document)

const inpname = document.getElementById("jsinp")
console.log(inpname)

const name1 = document.getElementById("namee")
const oneclick = document.getElementById("oneClick")


const doubleClick = document.getElementById("dblclick")
console.log(doubleClick)

doubleClick.addEventListener (
    "dblclick", function() {
        name1.style.color= "yellow"
        output.innerHTML = "You double click!"
    }
)

const output = document.getElementById("outputt")

oneclick.addEventListener (
    "click", function() {
        output.innerHTML = "You click!"
    }
)

const hold = document.getElementById("prsshld")

hold.addEventListener (
    "mousedown", function() {
        output.innerHTML = "You are press and holding left click!"
    }
)

hold.addEventListener (
    "mouseup", function() {
        output.innerHTML = "You release your finger!"
    }
)

inpname.addEventListener (
    "input", function() {
        name1.innerHTML = "" + inpname.value
    }
)
