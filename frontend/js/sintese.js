async function salvar() {
  const descricao = document.getElementById('descricao').value;

  await fetch('http://localhost:3001/sinteses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ descricao })
  });

  carregar();
}

async function carregar() {
  const res = await fetch('http://localhost:3001/sinteses');
  const data = await res.json();

  const lista = document.getElementById('lista');
  lista.innerHTML = '';

  data.forEach(s => {
    const li = document.createElement('li');
    li.innerText = s.descricao;
    lista.appendChild(li);
  });
}

carregar();