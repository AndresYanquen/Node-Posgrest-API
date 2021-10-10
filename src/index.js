const express = require("express");
const app = express();

//middleware: Funciones antes de que se procesen las rutas

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use(require("./routes/index.js"));

const n_port = 3001;
app.listen(n_port);
console.log(`Server on port: ${n_port}`);
