function calc() {
    var LP = Number(document.querySelector("#LP").value)
    var M = Number(document.querySelector("#M").value)
    var IR = Number(document.querySelector("#IR").value);
    var r = (LP + LP * IR) / M 
    document.querySelector("#result").innerHTML = r; 
            }