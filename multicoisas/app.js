const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const produtosRoutes = require('./api/routes/produtosRoutes');
const estoquesRoutes = require('./api/routes/estoquesRoutes');
const categoriasRoutes = require('./api/routes/categoriasRoutes');
const clientesRoutes = require('./api/routes/clientesRoutes');
const vendasRoutes = require('./api/routes/vendasRoutes');


app.listen(8080);

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/Produto', produtosRoutes);
app.use('/Estoque', estoquesRoutes);
app.use('/Categoria', categoriasRoutes);
app.use('/Cliente', clientesRoutes);
app.use('/Venda', vendasRoutes);



