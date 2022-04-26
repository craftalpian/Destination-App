const Sequelize = require("sequelize")

const sequelize = new Sequelize('destination_app', 'root', '', {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql'
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log("Connected");
        const [results, metadata] = await sequelize.querry("SELECT * FROM destination");
        console.log(results);
    } catch (err) {
        console.log("Can't connect to database!");
    }
}

testConnection();