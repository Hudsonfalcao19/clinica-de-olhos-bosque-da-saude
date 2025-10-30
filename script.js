const pixBtn = document.getElementById("pixBtn");
const modal = document.getElementById("pixModal");
const closeBtn = document.querySelector(".close");
const copyBtns = document.querySelectorAll(".copyBtn");

// Abrir modal
pixBtn.onclick = () => {
  modal.style.display = "block";
};

// Fechar modal
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Fechar clicando fora
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Ampliar QR Code WiFi
const wifiQRCode = document.querySelector('.wifi-img');
if (wifiQRCode) {
  wifiQRCode.addEventListener('click', () => {
    ampliarQRCodeWiFi(wifiQRCode);
  });
}

function ampliarQRCodeWiFi(qrElement) {
  const modal = document.createElement('div');
  modal.className = 'wifi-qr-modal';
  modal.innerHTML = `
    <div class="wifi-qr-content">
      <span class="close-wifi-qr">&times;</span>
      <h3>📶 QR Code WiFi</h3>
      <div class="wifi-qr-amplified">
        <img src="${qrElement.src}" alt="QR Code WiFi Ampliado">
      </div>
      <p><strong>Rede:</strong> Clínica de Olhos </p>
      <p><strong>Senha:</strong> 2F8A144F61</p>
      <p class="scan-instruction">📱 <em>Escaneie com a câmera do seu celular</em></p>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Fechar modal
  const closeBtn = modal.querySelector('.close-wifi-qr');
  closeBtn.onclick = () => modal.remove();
  
  modal.onclick = (e) => {
    if (e.target === modal) modal.remove();
  };
}

// Copiar chave Pix e senha WiFi
copyBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.key;
    navigator.clipboard.writeText(key);
    
    // Diferentes mensagens para diferentes tipos
    if (btn.classList.contains('wifi-copy')) {
      alert(`Senha WiFi copiada: ${key}`);
    } else {
      alert(`Chave copiada: ${key}`);
    }
  });
});