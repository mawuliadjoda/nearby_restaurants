import {DataTypes, Sequelize} from 'sequelize';

// const sequelize = new Sequelize(
//     process.env.PG_DB,
//     process.env.PG_USER,
//     process.env.PG_PASSWORD,
//     {
//         host: process.env.PG_HOST,
//         dialect: 'postgres',
//     }
// );
//
// module.exports = sequelize;

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,schema: process.env.DB_SCHEMA,
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

async function connectDB() {
    try {
        await sequelize.authenticate();
        console.log("✅ Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}


export { connectDB, sequelize, Sequelize, DataTypes };