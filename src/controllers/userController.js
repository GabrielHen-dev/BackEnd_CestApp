const userService = require('../services/userService');

const createUser = async (req, res) => {
  try {
    const { nome, email, endereco, telefone, cpf, cep, cidade, bairro, genero, provedorF, renda, qtPessoasC, programaGov, nomeGov } = req.body;

    if (!nome || !email || !telefone  || !endereco || !cpf ||  !cep ||  !cidade ||  !bairro || !genero ||  !provedorF || !renda || !qtPessoasC || !programaGov || !nomeGov) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    const user = await userService.createUser(req.body);
    res.status(201).json({ message: 'Usuário cadastrado com sucesso.' });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const listUser = async (req, res) => {
  try {
    const student = await userService.listUser();
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params; 
    const dadosAtualizados = req.body; 

    const aluno = await userService.searchUserbyId(id);
    if (!aluno) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    await userService.updateUser(id, dadosAtualizados);
    res.json({ message: "Usuário atualizado com sucesso." });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params; 

    const aluno = await userService.searchUserbyId(id);
    if (!aluno) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    await userService.deleteUser(id);
    res.json({ message: "Usuário removido com sucesso." });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createUser, listUser, updateUser, deleteUser};