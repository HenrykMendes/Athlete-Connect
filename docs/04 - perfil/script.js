// Dados para o gráfico de Novos Usuários
const userData = {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
    datasets: [{
        label: "Quantidade de gols",
        data: [50, 80, 45, 60, 90, 100],
        backgroundColor: "rgba(7, 218, 101)",
        borderColor: "rgba(7, 218, 101)",
        borderWidth: 1
    }]
};

// Configuração do gráfico de Novos Usuários
const userConfig = {
    type: "bar",
    data: userData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    },
};

// Inicializa o gráfico de Novos Usuários
const userChart = new Chart(
    document.getElementById("userChart"),
    userConfig
);

// Dados para o gráfico de Doações
const donationData = {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
    datasets: [{
        label: "BPM",
        data: [60, 70, 80, 90, 100, 150],
        backgroundColor: "rgba(7, 218, 101)",
        borderColor: "rgba(7, 218, 101)",
        borderWidth: 1,
        fill: true,
    }]
};

// Configuração do gráfico de Doações
const donationConfig = {
    type: "line",
    data: donationData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    },
};

// Inicializa o gráfico de Doações
const donationChart = new Chart(
    document.getElementById("donationChart"),
    donationConfig
);
