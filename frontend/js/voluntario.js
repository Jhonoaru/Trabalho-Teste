async function carregarVoluntarios() {
  const res = await fetch('http://localhost:3001/voluntarios');
  const data = await res.json();

  const lista = document.getElementById('lista');
  lista.innerHTML = '';

  data.forEach(v => {
  const tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${v.nome}</td>
    <td>${v.email}</td>
    <td>${v.telefone}</td>
    <td>
      <button onclick="editar(${v.id}, '${v.nome}', '${v.email}', '${v.telefone}', '${v.cpf}')">Editar</button>
      <button onclick="remover(${v.id})">Excluir</button>
    </td>
  `;

  lista.appendChild(tr);
});
}

async function cadastrar() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const cpf = document.getElementById('cpf').value;
  const sintese_id = document.getElementById('sintese').value;

  await fetch('http://localhost:3001/voluntarios', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    nome,
    email,
    telefone,
    cpf,
    sintese_id
  })
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

async function carregarSinteses() {
  const res = await fetch('http://localhost:3001/sinteses');
  const data = await res.json();

  const select = document.getElementById('sintese');
  select.innerHTML = '';

  data.forEach(s => {
    const option = document.createElement('option');
    option.value = s.id;
    option.text = s.descricao;
    select.appendChild(option);
  });
}

// carregar ao abrir
carregarVoluntarios();
carregarSinteses();