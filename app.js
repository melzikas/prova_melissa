const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res) => {

    const equipamentos = [
    {
        id: 1,
        equipamento: 'Telescópio Refletor 130mm',
        marca: 'Celestron',
        especificacao: 'Distância focal de 650 mm',
        aluno_responsavel: 'SEU NOME COMPLETO'
    },
    {
        id: 2,
        equipamento: 'Ocular Plössl',
        marca: 'Svbony',
        especificacao: 'Distância focal de 25 mm',
        aluno_responsavel: 'SEU NOME COMPLETO'
    },
    {
        id: 3,
        equipamento: 'Telescópio Refrator 80mm',
        marca: 'Sky-Watcher',
        especificacao: 'Distância focal de 400 mm',
        aluno_responsavel: 'SEU NOME COMPLETO'
    },
    {
        id: 4,
        equipamento: 'Lente Barlow',
        marca: 'Celestron',
        especificacao: 'Fator de ampliação de 2x',
        aluno_responsavel: 'SEU NOME COMPLETO'
    }
];

    res.render('catalogo', { equipamentos });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!');
});

