const map = L.map('map').setView([-23.55, -46.63], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

const niveisChuva = {
    leve: { raio: 300, pontos: 8 },
    moderado: { raio: 500, pontos: 16 },
    intenso: { raio: 800, pontos: 32 }
};
let nivelAtual = 'leve';

// Controle de nível de chuva
const controle = L.control({ position: 'topright' });
controle.onAdd = function () {
    const div = L.DomUtil.create('div', 'controle-chuva');
    div.innerHTML = `
        <label>Nível de chuva:</label>
        <select id="nivel-chuva">
            <option value="leve">Leve</option>
            <option value="moderado">Moderado</option>
            <option value="intenso">Intenso</option>
        </select>
    `;
    return div;
};
controle.addTo(map);
document.addEventListener('change', (e) => {
    if (e.target && e.target.id === 'nivel-chuva') {
        nivelAtual = e.target.value;
    }
});

// Função para gerar pontos fictícios dentro do raio
function gerarPontosFicticios(centro, raio, quantidade) {
    const pontos = [];
    for (let i = 0; i < quantidade; i++) {
        const angulo = Math.random() * 2 * Math.PI;
        const distancia = Math.random() * raio * 0.95;
        const dx = (distancia * Math.cos(angulo)) / 111320;
        const dy = (distancia * Math.sin(angulo)) / 110540;
        pontos.push([
            centro.lat + dy,
            centro.lng + dx
        ]);
    }
    return pontos;
}

map.on('click', function (e) {
    // Remove círculos e marcadores antigos
    map.eachLayer(layer => {
        if (layer instanceof L.Circle || layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });

    const { raio, pontos } = niveisChuva[nivelAtual];

    // Círculo da área de simulação
    const circle = L.circle(e.latlng, {
        color: '#1565c0',
        fillColor: '#42a5f5',
        fillOpacity: 0.3,
        radius: raio
    }).addTo(map);

    // Gera pontos fictícios de alagamento
    const pontosAlagamento = gerarPontosFicticios(e.latlng, raio, pontos);

    pontosAlagamento.forEach(([lat, lng]) => {
        L.marker([lat, lng], {
            icon: L.icon({
                iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
                iconSize: [24, 24]
            })
        })
            .addTo(map)
            .bindPopup(`<strong>Ponto de possível alagamento</strong><br>Nível: ${nivelAtual}`);
    });

    circle.bindPopup(`
        <strong>Simulação de Enchente (${nivelAtual.charAt(0).toUpperCase() + nivelAtual.slice(1)})</strong><br>
        Foram gerados <b>${pontos}</b> pontos fictícios de possível alagamento nesta área.<br>
        <em>Resultados meramente ilustrativos.</em>
    `).openPopup();
});