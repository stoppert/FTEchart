var FEavailable = document.querySelector("#newFEa"),
FErequired = document.querySelector("#newFEr"),
BEavailable = document.querySelector("#newBEa"),
BErequired = document.querySelector("#newBEr"),
QAavailable = document.querySelector("#newQAa"),
QArequired = document.querySelector("#newQAr"),
TPMavailable = document.querySelector("#newTPMa"),
TPMrequired = document.querySelector("#newTPMr"),
submit = document.querySelector("#btn"),
FEgreen = 0,
BEgreen = 0,
QAgreen = 0,
TPMgreen = 0,
FEred = 0,
BEred = 0,
QAred = 0,
TPMred = 0,
FEorange = 0,
BEorange = 0,
QAorange = 0,
TPMorange = 0;

var calculateFTE = function() {
  //FE
  if (FEavailable.value < FErequired.value) {
    FEgreen = FEavailable.value;
    FEred = FErequired.value-FEavailable.value;
  } else if (FEavailable.value > FErequired.value) {
    FEgreen = FErequired.value;
    FEorange = FEavailable.value-FErequired.value;
  } else {
    FEgreen = FEavailable.value;
  }
  //BE
  if (BEavailable.value < BErequired.value) {
    BEgreen = BEavailable.value;
    BEred = BErequired.value-BEavailable.value;
  } else if (BEavailable.value > BErequired.value) {
    BEgreen = BErequired.value;
    BEorange = BEavailable.value-BErequired.value;
  } else {
    BEgreen = BEavailable.value;
  }
  //QA
  if (QAavailable.value < QArequired.value) {
    QAgreen = QAavailable.value;
    QAred = QArequired.value-QAavailable.value;
  } else if (QAavailable.value > QArequired.value) {
    QAgreen = QArequired.value;
    QAorange = QAavailable.value-QArequired.value;
  } else {
    QAgreen = QAavailable.value;
  }
  //TPM
  if (TPMavailable.value < TPMrequired.value) {
    TPMgreen = TPMavailable.value;
    TPMred = TPMrequired.value-TPMavailable.value;
  } else if (TPMavailable.value > TPMrequired.value) {
    TPMgreen = TPMrequired.value;
    TPMorange = TPMavailable.value-TPMrequired.value;
  } else {
    TPMgreen = TPMavailable.value;
  }
  buildChart();
};
submit.addEventListener("click", calculateFTE);

var buildChart = function() {
  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["FE", "BE", "QA", "TPM"],
      datasets: [{
        label: 'good',
        backgroundColor: 'rgba(163, 214, 152, 0.2)',
        data: [
          FEgreen,
          BEgreen,
          QAgreen,
          TPMgreen]
        }, {
          label: 'missing',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          data: [
            FEred,
            BEred,
            QAred,
            TPMred]
          }, {
            label: 'too much',
            backgroundColor: 'rgba(244, 188, 66, 0.2)',
            data: [
              FEorange,
              BEorange,
              QAorange,
              TPMorange]
            }]
          },
          options: {
            scales: {
              xAxes: [{
                stacked: true,
              }],
              yAxes: [{
                stacked: true
              }]
            }
          }
        });
      };
