// Importar librería Sequelize
const Sequelize = require('sequelize');
const Model = Sequelize.Model;

// Importar conexión a base de datos
const { sequelize } = require('./../config/db');

// Crear modelo
class Proyect extends Model {}
Proyect.init({
    //Definir campos del modelo
    postname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    story: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'proyect'
});

// Exportar modelo
module.exports = { Proyect };