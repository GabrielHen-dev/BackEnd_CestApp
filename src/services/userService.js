const users = require('../models/users');

const createUser = async (data) => {
  try {
    const user = new users(data);
    await user.save();
    return user;
  } catch (error) {
    throw new Error('Erro ao criar usuário: ' + error.message);
  }
};

const listUser = async () => {
  try {
    return await users.find().sort(
        { createdAt: -1 });
  } catch (error) {
    throw new Error('Erro ao listar usuários: ' + error.message);
  }
};

const searchUserbyId = async (id) => {
  try {
    return await users.findById(id);
  } catch (error) {
    throw new Error('Erro ao buscar usuário: ' + error.message);
  }
};

const updateUser = async (id, dados) => {
  try {
    return await users.findByIdAndUpdate(id, dados, { new: true });
  } catch (error) {
    throw new Error('Erro ao atualizar usuário: ' + error.message);
  }
};

const deleteUser = async (id) => {
  try {
    return await users.findByIdAndDelete(id);
  } catch (error) {
    throw new Error('Erro ao deletar usuário: ' + error.message);
  }
};

const buscarcpf = async (cpf) => {
  try {
    return await users.findOne({cpf : cpf});
  } catch (error) {
    throw new Error('Erro ao deletar usuário: ' + error.message);
  }
};

module.exports = { createUser, listUser, searchUserbyId, updateUser, deleteUser, buscarcpf};