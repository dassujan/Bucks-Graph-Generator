// on window load
window.onload = function () {
    function getIncomeValues() {
        // get input value for januaryincome
        var januaryincome = document.getElementById("januaryIncome").value;
        // get input value for februaryincome
        var februaryincome = document.getElementById("februaryIncome").value;
        // get input value for marchincome
        var marchincome = document.getElementById("marchIncome").value;
        // get input value for aprilincome
        var aprilincome = document.getElementById("aprilIncome").value;
        // get input value for mayincome
        var mayincome = document.getElementById("mayIncome").value;
        // get input value for juneincome
        var juneincome = document.getElementById("juneIncome").value;
        // get input value for julyincome
        var julyincome = document.getElementById("julyIncome").value;
        // get input value for augustincome
        var augustincome = document.getElementById("augustIncome").value;
        // get input value for septemberincome
        var septemberincome = document.getElementById("septemberIncome").value;
        // get input value for octoberincome
        var octoberincome = document.getElementById("octoberIncome").value;
        // get input value for novemberincome
        var novemberincome = document.getElementById("novemberIncome").value;
        // get input value for decemberincome
        var decemberincome = document.getElementById("decemberIncome").value;
        return [januaryincome, februaryincome, marchincome, aprilincome, mayincome, juneincome, julyincome, augustincome, septemberincome, octoberincome, novemberincome, decemberincome];
    }
    
    function getExpenseValues() {
        // get input value for januaryexpense
        var januaryexpense = document.getElementById("januaryExpenses").value;
        // get input value for februaryexpense
        var februaryexpense = document.getElementById("februaryExpenses").value;
        // get input value for marchexpense
        var marchexpense = document.getElementById("marchExpenses").value;
        // get input value for aprilexpense
        var aprilexpense = document.getElementById("aprilExpenses").value;
        // get input value for mayexpense
        var mayexpense = document.getElementById("mayExpenses").value;
        // get input value for juneexpense
        var juneexpense = document.getElementById("juneExpenses").value;
        // get input value for julyexpense
        var julyexpense = document.getElementById("julyExpenses").value;
        // get input value for augustexpense
        var augustexpense = document.getElementById("augustExpenses").value;
        // get input value for septemberexpense
        var septemberexpense = document.getElementById("septemberExpenses").value;
        // get input value for octoberexpense
        var octoberexpense = document.getElementById("octoberExpenses").value;
        // get input value for novemberexpense
        var novemberexpense = document.getElementById("novemberExpenses").value;
        // get input value for decemberexpense
        var decemberexpense = document.getElementById("decemberExpenses").value;
        return [januaryexpense, februaryexpense, marchexpense, aprilexpense, mayexpense, juneexpense, julyexpense, augustexpense, septemberexpense, octoberexpense, novemberexpense, decemberexpense];
    }

    // red: 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 1)',
    // green: 'rgba(75, 192, 192, 0.2)', 'rgba(75, 192, 192, 1)',

    // create chart js bar chart for id myChart
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [
                {
                    label: 'Income',
                    data: getExpenseValues(),
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Expenses',
                    data: getIncomeValues(),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                },
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    // download function
    document.getElementById("download").addEventListener("click", function () {
        var canvas = document.getElementById("myChart");
        var image = canvas.toDataURL("image/png");
        var link = document.createElement('a');
        link.download = "BucksChart.png";
        link.href = image;
        link.click();
    });

    // click handler for chart-tab
    document.getElementById("chart-tab").addEventListener("click", function () {
        myChart.data.datasets[0].data = getIncomeValues();
        myChart.data.datasets[1].data = getExpenseValues();
        // update chart
        myChart.update();
    });
};