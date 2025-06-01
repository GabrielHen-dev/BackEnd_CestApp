const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./src/routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("Conexao com o banco de dados", {
    
  serverSelectionTimeoutMS: 5000, // Tempo máximo de espera para conectar ao servidor
  socketTimeoutMS: 45000, // Tempo máximo de espera para operações
})

.then(() => console.log("Conectado ao MongoDB com sucesso!"))
.catch((err) => console.log("Conectado ao MongoDB com sucesso!", err));

app.get('/health', (req, res) => {
    res.status(200).json({ status: 200, message: 'Servidor ativo!' });
  });
  
  app.use('/api', userRoutes);
  
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
