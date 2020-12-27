plotChart();

async function plotChart() {
    const data = await getData();
    const ctx = document.getElementById("chart").getContext("2d");
    const chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: data.year,
            datasets: [
                {
                    label: "Global Average Temperature",
                    backgroundColor: "rgb(255, 99, 132)",
                    borderColor: "rgb(255, 99, 132)",
                    data: data.temp,
                    fill: false,
                    borderWidth : 1.5
                },
            ],
        },
    });
}

async function getData() {
    const year = [];
    const temp = [];
    const avgTemp = 14;
    const response = await fetch("ZonAnn.Ts+dSST.csv");
    const data = await response.text();
    const table = data.split("\n").slice(1);
    table.forEach((row) => {
        const column = row.split(",");
        year.push(column[0]);
        temp.push(parseFloat(column[1]) + avgTemp);
    });

    return { year, temp };
}
