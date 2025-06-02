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
  provedor: { type: String, required: true },
  renda: { type: String, required: true },
  tamanhoFam: { type: String, required: true },
  outrosProgramas: { type: String, required: true },
  quaisProgramas: { type: String},
  estadoUser: { type: String, required: true },
  funcionario: { type: String}

}, {
  timestamps: true
});

module.exports = mongoose.model('Users', userSchema);