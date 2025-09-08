// ====================
// Gráfico de Barras
// ====================
const ctxBarras = document.getElementById("graficoBarras");
new Chart(ctxBarras, {
    type: "bar",
    data: {
        labels: ["Educación", "Salud", "Tecnología", "Comercio", "Arte"],
        datasets: [{
            label: "Capacidad de Emprendimiento Femenino",
            data: [45, 30, 25, 20, 35],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: { display: true, text: "Capacidad de emprendimiento femenino" }
        }
    }
});

// ====================
// Gráfico de Torta
// ====================
const ctxTorta = document.getElementById("graficoTorta");
new Chart(ctxTorta, {
    type: "pie",
    data: {
        labels: ["Tecnológico", "Social", "Cultural", "Ambiental", "Comercial"],
        datasets: [{
            label: "Tipos de emprendimiento en Colombia",
            data: [30, 25, 20, 15, 10],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: "right" },
            title: { display: true, text: "Tipos de emprendimiento en Colombia" }
        }
    }
});

// ====================
// Gráfico de Líneas
// ====================
const ctxLineas = document.getElementById("graficoLineas");
new Chart(ctxLineas, {
    type: "line",
    data: {
        labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
        datasets: [{
            label: "Innovación en el mundo",
            data: [10, 15, 20, 25, 30, 40],
            fill: false,
            borderColor: "#36A2EB",
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: { display: true, text: "Tendencia de innovación en el mundo" }
        }
    }
});

// ====================
// Gráfico de Área
// ====================
const ctxArea = document.getElementById("graficoArea");
new Chart(ctxArea, {
    type: "line",
    data: {
        labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
        datasets: [
            {
                label: "Emprendimiento",
                data: [20, 25, 30, 35, 40, 45],
                fill: true,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "#FF6384",
                tension: 0.3
            },
            {
                label: "Innovación",
                data: [15, 20, 25, 30, 35, 50],
                fill: true,
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "#36A2EB",
                tension: 0.3
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: { display: true, text: "Comparación entre emprendimiento e innovación" }
        }
    }
});


