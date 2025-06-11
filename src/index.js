import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
// import { } from './middleware.js';
import { pets } from './dados.js';
import { randomUUID } from 'crypto'; 
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Listar pets
app.get('/pets', (req, res) => {
  try {
    const { nome, raca, idade, nomeTutor } = req.query;

    let dados = pets;

    res.status(200).send({
            ok: true,
            mensagem: "Pets listados com sucesso",
            dados
    });
  } catch (error) {
    console.log(error);
        res.status(500).send({
            ok: false,
            mensagem: "Erro ao listar pets",
            erro: error.message
        });
  }
});

// Criar pet
app.post("/pets", (req, res) => {
  try {
    const { nome, raca, idade, nomeTutor } = req.body;

    if (!nome || !raca || !idade || !nomeTutor) {
      return res.status(400).send({
        ok: false,
        mensagem: "Todos os campos são obrigatórios"
      });
    }

    const novoPet = {
      id: crypto.randomUUID(),
      nome,
      raca,
      idade,
      nomeTutor
    };

    pets.push(novoPet);

    res.status(201).send({
      ok: true,
      mensagem: "Pet cadastrado com sucesso",
      dados: novoPet
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      ok: false,
      mensagem: "Erro ao cadastrar pet",
      erro: error.message
    });
  }
})

// Obter pet por ID
app.get("/pets/:id", (req, res) => {
  try {
      const id = req.params.id;

      const pet = pets.find(p => p.id === id);

      if (!pet) {
          return res.status(404).send({
              ok: false,
              mensagem: "Pet não encontrado"
          });
      }

      res.status(200).send({
          ok: true,
          mensagem: "Pet encontrado com sucesso",
          dados: pet
      });
  } catch (error) {
    res.status(500).send({
      ok: false,
      mensagem: "Pet não encontrado",
      erro: error.message
    });
  }
});

// Atualizar pet
app.put("/pets/:id", (req, res) => {
  try {
    const id = req.params.id;
    const { nome, raca, idade, nomeTutor } = req.body;

    const petIndex = pets.findIndex(p => p.id === id);

    if (petIndex === -1) {
      return res.status(404).send({
        ok: false,
        mensagem: "Pet não encontrado"
      });
    }

    if (!nome || !raca || !idade || !nomeTutor) {
      return res.status(400).send({
        ok: false,
        mensagem: "Todos os campos são obrigatórios"
      });
    }

    pets[petIndex] = { id, nome, raca, idade, nomeTutor };

    res.status(200).send({
      ok: true,
      mensagem: "Pet atualizado com sucesso",
      dados: pets[petIndex]
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      ok: false,
      mensagem: "Erro ao atualizar pet",
      erro: error.message
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});