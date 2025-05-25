async function mostrarIP() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    const ip = data.ip;

    const overlay = document.getElementById('overlay');
    overlay.textContent = `Clique para acessar! Seja bem vindo ${ip}`;
  } catch (error) {
    console.error('Erro ao obter IP:', error);
  }
}

window.addEventListener('load', () => {
  mostrarIP();
});
