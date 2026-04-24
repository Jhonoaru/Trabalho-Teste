function login() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  // login fake (só teste)
  if (email === 'admin' && senha === '123') {
    localStorage.setItem('logado', 'true');
    window.location.href = 'dashboard.html';
  } else {
    document.getElementById('erro').innerText = 'Login inválido';
  }
}