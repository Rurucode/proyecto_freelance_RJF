const mongoose = require('mongoose');
// Esquema de como seria el contenido de favoritos
const favoriteSchema = {
    title: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    url:{
        type: String,
        required: true 
    }
};
// Crear el esquema
const favoritos = mongoose.Schema(favoriteSchema);
// Crear el modelo
const Favoritos = mongoose.model('Favoritos', favoritos);

module.exports = Favoritos;