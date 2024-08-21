const expres = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
const { config } = require('dotenv');
config();

const bookRoutes = require("./routes/book.routes");

// Usamos expres para los middlewares
const app = expres();
app.use(bodyParse.json()); // Parseador de Bodys

//Acá conectaremos la base de datos
mongoose.connect(process.env.MONGO_URL,{
    dbName: process.env.MONGO_DB_NAME
})

const db = mongoose.connection;
app.use('/books', bookRoutes);

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
