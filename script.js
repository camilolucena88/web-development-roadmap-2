function addOne(){
    let domValue = document.getElementById("paragraph").innerText;
    this.sum(domValue);
    this.showResponse("Successfully added");
}
function showResponse(value) {
    document.getElementById("success").innerText = value;
    this.state("show");
    setTimeout(state,1000,"hidden");
}

function state(status) {
    document.getElementById("success").className = status;
}
function sum(value) {
    let newValue =  parseInt(value) + 1;
    console.log(newValue)
    document.getElementById("paragraph").innerText = newValue;
}
function clearScreen() {
    document.getElementById("paragraph").innerText = "0";
}
function getValueFromInput() {
    if(document.getElementById("input-form").value.length == 0){
        this.showResponse("Failed. Add a value");
        return false;
    }
    this.add(document.getElementById("input-form").value);
}
function add(value) {
    let domValue = document.getElementById("paragraph").innerText;
    let newValue =  parseInt(value) + parseInt(domValue);
    document.getElementById("paragraph").innerText = newValue;
}