const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: "Sabrina Furtado",
        imagem: "C:\Users\sabri\OneDrive\Imagens\fotos\eu.jpg",
        minibio: "Desenvolvedora Full Stack"

    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)