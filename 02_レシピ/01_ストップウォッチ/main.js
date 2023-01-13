const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUP = function() {
    count += 1
    console.log(count)
    display.textContent = count / 100
}

let id = null

button.onclick = function() {
    if(id === null){
        id = setInterval(countUP, 10)
        button.textContent = "stop"
    }else{
        clearInterval(id)
        id = null
        button.textContent = "start"
    }
}