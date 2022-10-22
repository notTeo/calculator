function getInput(value) {
    if(input.innerHTML === "c"){
        input.innerHTML = ''
    }
    input.innerHTML += value
}

function getPrev(){
    if(input.innerHTML === "c"){
        input.innerHTML = ''
    }
    if(eval( prev.innerHTML < 0)){
        prev.innerHTML = "(" + prev.innerHTML + ")"
    }
    input.innerHTML += prev.innerHTML
}

function getOperator(value) {
    if(input.innerHTML === "c"){
        input.innerHTML = ''
    }
    if(input.innerHTML.slice(-1) !== "+" && input.innerHTML.slice(-1) !== "-"  && input.innerHTML.slice(-1) !== "*" && input.innerHTML.slice(-1) !== "/" && input.innerHTML.slice(-1) !== "."){
        input.innerHTML += value
    }
}

function clearAll() {
    if(input.innerHTML != ""){
        input.innerHTML = "c"
    }
}

function equal() {
    output.innerHTML =  eval(input.innerHTML)
    input.innerHTML = ""
    setTimeout(function(){
        prev.innerHTML = output.innerHTML
        output.innerHTML = ""
    },4000)
}


let input = document.getElementById('input')
let output = document.getElementById('output')
let prev = document.getElementById('prev')

