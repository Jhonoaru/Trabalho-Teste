// proteção simples
if (!localStorage.getItem('logado')) {
  window.location.href = 'index.html';
}

async function testarBackend() {
  try {
    const res = await fetch('http://localhost:3001/test-db');
    const data = await res.json();

    document.getElementById('resultado').innerText =
      'Banco respondeu: ' + data.now;
  } catch (error) {
    document.getElementById('resultado').innerText =
      'Erro ao conectar backend';
  }
}

function logout() {
  localStorage.removeItem('logado');
  window.location.href = 'index.html';
}