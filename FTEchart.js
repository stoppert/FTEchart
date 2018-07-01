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
  FTEinput.push({valueFEa: FEavailable.value, valueFEr: FErequired.value, valueBEa: BEavailable.value, valueBEr: BErequired.value,
    valueQAa: QAavailable.value, valueQAr: QArequired.value, valueTPMa: TPMavailable.value, valueTPMr: TPMrequired.value});
    console.log(FTEinput.valueFEa);
    buildChart();
  };
  submit.addEventListener("click", buildObject);

  var calculateFTE = function() {
    //für jede Säule ausrechnen, welcher Wert größer ist
  };

  var buildChart = function() {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["FE", "BE", "QA", "TPM"],
        datasets: [{
          label: 'Available',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          data: [
            FTEinput.valueFEa,
            FTEinput.valueBEa,
            FTEinput.valueQAa,
            FTEinput.valueTPMa]
        }, {
          label: 'Required',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          data: [
            FTEinput.valueFEr,
            FTEinput.valueBEr,
            FTEinput.valueQAr,
            FTEinput.valueTPMr]
        }]
      },
      options: {
        scales: {
          yAxes: [{
            stacked: true
          }]
        }
      }
    });
    console.log(FTEinput.valueFEa);
  };
