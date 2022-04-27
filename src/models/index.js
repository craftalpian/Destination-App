const { DataTypes, Sequelize } = require('sequelize');

const SequelizeModel = new Sequelize(
    'destination_app',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        timezone: '+07:00',
    },
);

const Destinations = SequelizeModel.define('destinations', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING,
    },
    location: {
        type: DataTypes.STRING,
    },
    website_url: {
        type: DataTypes.STRING,
    },
    instagram_url: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.TEXT,
    },
    status: {
        type: DataTypes.INTEGER,
    },
    created_at: {
        type: DataTypes.STRING,
    },
    updated_at: {
        type: DataTypes.STRING,
    },
}, {
    underscored: true,
    freezeTableName: true,
});

module.exports = {
    Destinations,
}