const Sequelize = require('sequelize');
//const Sequelize = require('sequelize').Sequelize;


const sequelize = new Sequelize('proyects', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'

});

//promise
sequelize
    .authenticate()
    //caso exito
    .then(() => {
        console.log('MySQL connection successful');
    })
    //caso error
    .catch((err) => {
        console.error('MySql connection error: ',err);
    });

module.exports = {
    //sequelize: sequelize
    sequelize
}