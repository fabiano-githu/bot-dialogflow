const express = require("express");
const app = express();

app.use(express.json());

app.post("/webhook", (req, res) => {
  const quantidade = req.body.queryResult?.parameters?.quantidade;
  const preco = req.body.queryResult?.parameters?.preco;

  const total = quantidade * preco;

  res.json({
    fulfillmentText: `🧾 Total do pedido: R$ ${total}`
  });
});

// Render usa PORT automático
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});