const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  dataNasc: { type: String, required: true },
  email: { type: String, required: true },
  telefone: { type: String, required: true },
  cpf: { type: String, required: true },
  endereco: { type: String, required: true },
  cep: { type: String, required: true },
  cidade: { type: String, required: true },
  bairro: { type: String, required: true },
  genero: { type: String, required: true },
  provedorF: { type: String, required: true },
  renda: { type: String, required: true },
  qtPessoasC: { type: String, required: true },
  programaGov: { type: String, required: true },
  nomeGov: { type: String, required: false }

}, {
  timestamps: true
});

module.exports = mongoose.model('Users', userSchema);