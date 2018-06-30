var FEavailable = document.querySelector("#newFEa"),
FErequired = document.querySelector("#newFEr"),
BEavailable = document.querySelector("#newBEa"),
BErequired = document.querySelector("#newBEr"),
QAavailable = document.querySelector("#newQAa"),
QArequired = document.querySelector("#newQAr"),
TPMavailable = document.querySelector("#newTPMa"),
TPMrequired = document.querySelector("#newTPMr"),
submit = document.querySelector("#btn"),
FTEinput = [];

var buildObject = function() {
  //FTEinput.push({valueFEa: FEavailable.value}); ??
  console.log(FEavailable.value);
  //alle Inputs in ein Objekt schreiben
};

submit.addEventListener("click", buildObject);

var calculateFTE = function() {
  //für jede Säule ausrechnen, welcher Wert größer ist
};

var buildChart = function() {
  //irgendwie mit Chartjs etwas bauen
};
