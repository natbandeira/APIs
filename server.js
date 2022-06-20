const express = require ('express');
const app = express ();

app.listen(3000, function(){ // start no servidor. callback function para verificar.
    console.log("Tá rodando");
})