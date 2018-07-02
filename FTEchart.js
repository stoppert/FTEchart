var submit = document.querySelector("#btn");
var data = {
    fe: {
        available: document.querySelector("#newFEa"),
        required: document.querySelector("#newFEr"),
    },
    be: {
        available: document.querySelector("#newBEa"),
        required: document.querySelector("#newBEr"),
    },
    qa: {
        available: document.querySelector("#newQAa"),
        required: document.querySelector("#newQAr"),
    },
    tpm: {
        available: document.querySelector("#newTPMa"),
        required: document.querySelector("#newTPMr"),
    },
};

submit.addEventListener("click", function() {
    var calc = {};

    for (var g in data) {
        var e = data[g],
            available = parseFloat(e.available.value.replace(",", ".")),
            required = parseFloat(e.required.value.replace(",", "."));

        var good = 0,
            missing = 0,
            too_much = 0;

        if (available < required) {
            good = available;
            missing = required - available;
        } else if (available > required) {
            good = required;
            too_much = available - required;
        } else {
            good = available;
        }

        calc[g] = {
            good: good,
            missing: missing,
            too_much: too_much,
        };
    }

    buildChart(calc);
});

var toArray = function(key, data) {
    var arr = [];

    for (var g in data) {
        arr.push(data[g][key]);
    }

    return arr;
};

var buildChart = function(calc) {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["FE", "BE", "QA", "TPM"],
            datasets: [
                {
                    label: "good",
                    backgroundColor: "rgba(163, 214, 152, 0.2)",
                    data: toArray("good", calc),
                },
                {
                    label: "missing",
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    data: toArray("missing", calc),
                },
                {
                    label: "too much",
                    backgroundColor: "rgba(244, 188, 66, 0.2)",
                    data: toArray("too_much", calc),
                },
            ],
        },
        options: {
            scales: {
                xAxes: [
                    {
                        stacked: true,
                    },
                ],
                yAxes: [
                    {
                        stacked: true,
                    },
                ],
            },
        },
    });
};
