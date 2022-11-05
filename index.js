const output = document.getElementById("output")
const input = document.getElementById("input");
const clear = document.getElementById("clear")

var value = "";

function display(num){
    value += num;
    input.value = value;
}

function clearOutput(){
    value = "";
    input.value = value;
}

function equals(){
    console.log(value);
    if (value !== "") {
        var temp = eval(value.toString());
        console.log(temp);
        clearOutput();
        input.value = temp;
    }
}

document.querySelector(".js-form")?.addEventListener('submit', e => {
    e.preventDefault();
    console.log("Enter")
    value = e.currentTarget.input.value;
    equals();
});

