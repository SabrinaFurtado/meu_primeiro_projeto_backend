const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: " Sabrina Furtado",
        imagem: "C:\Users\sabri\OneDrive\Imagens\fotos\eu.jpg",
        minibio: "Desenvolvedora Full Stack",
    },
    {
        nome: "Iana Chan",
        imagem: "",
        minibio: "Fundadora da Programaria",
    },
    {
        nome: 'Luana Pimentel',
        imagem: '',
        minibio: 'Senior Staff Software Engineer',
    }
]

function mostraMulheres(request, response){

}


function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)