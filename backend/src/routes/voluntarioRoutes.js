const express = require('express');
const router = express.Router();
const pool = require('../db');

// GET - listar voluntários
router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM voluntario');
  res.json(result.rows);
});

// DELETE - remover voluntário
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  await pool.query('DELETE FROM voluntario WHERE id = $1', [id]);

  res.json({ message: 'Voluntário removido' });
});

// POST - criar voluntário
router.post('/', async (req, res) => {
  const { nome, email, telefone, cpf } = req.body;

  const result = await pool.query(
    `INSERT INTO voluntario (nome, email, telefone, cpf)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [nome, email, telefone, cpf]
  );

  res.json(result.rows[0]);
});

// UPDATE - editar voluntário
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, email, telefone, cpf } = req.body;

  const result = await pool.query(
    `UPDATE voluntario 
     SET nome=$1, email=$2, telefone=$3, cpf=$4
     WHERE id=$5
     RETURNING *`,
    [nome, email, telefone, cpf, id]
  );

  res.json(result.rows[0]);
});

module.exports = router;