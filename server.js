const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./src/routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("Login Banco", {
    
  serverSelectionTimeoutMS: 5000, 
  socketTimeoutMS: 15000, 
})

.then(() => console.log("Conectado ao MongoDB com sucesso!"))
.catch((err) => console.log("Erro ao tentar conectar ao MongoDB!", err));

app.get('/health', (req, res) => {
    res.status(200).json({ status: 200, message: 'Servidor ativo!' });
  });
  
  app.use('/api', userRoutes);
  
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
