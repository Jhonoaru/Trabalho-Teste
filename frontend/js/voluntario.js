async function carregarVoluntarios() {
  const res = await fetch('http://localhost:3001/voluntarios');
  const data = await res.json();

  const lista = document.getElementById('lista');
  lista.innerHTML = '';

  data.forEach(v => {
    const li = document.createElement('li');
    li.innerText = `${v.nome} - ${v.email}`;
    li.innerHTML = `
    ${v.nome} - ${v.email}
    <button onclick="editar(${v.id}, '${v.nome}', '${v.email}', '${v.telefone}', '${v.cpf}')">Editar</button>
    <button onclick="remover(${v.id})">Excluir</button>
  `;
    lista.appendChild(li);
  });
}

async function cadastrar() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const cpf = document.getElementById('cpf').value;

  await fetch('http://localhost:3001/voluntarios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nome, email, telefone, cpf })
  });

  carregarVoluntarios();
}

async function remover(id) {
  await fetch(`http://localhost:3001/voluntarios/${id}`, {
    method: 'DELETE'
  });

  carregarVoluntarios();
}

async function editar(id, nome, email, telefone, cpf) {
  const novoNome = prompt('Nome:', nome);
  const novoEmail = prompt('Email:', email);
  const novoTelefone = prompt('Telefone:', telefone);
  const novoCpf = prompt('CPF:', cpf);

  await fetch(`http://localhost:3001/voluntarios/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome: novoNome,
      email: novoEmail,
      telefone: novoTelefone,
      cpf: novoCpf
    })
  });

  carregarVoluntarios();
}

// carregar ao abrir
carregarVoluntarios();