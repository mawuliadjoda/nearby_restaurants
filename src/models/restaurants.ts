import {DataTypes, sequelize} from "../utils/database";
import {Model} from "sequelize";


// const Restaurant = sequelize.define("restaurants", {
//         id: {
//             type: DataTypes.BIGINT,
//             primaryKey: true,
//         },
//         name: {
//             type: DataTypes.TEXT,
//             allowNull: false,
//             unique: true,
//         },
//         location: {
//             type: DataTypes.GEOGRAPHY('POINT'),
//             allowNull: false,
//         }
//     },
//     {
//         timestamps: false  // Désactive les colonnes createdAt et updatedAt
//     });


class Restaurant extends Model {
    public id!: number;
    public name!: string;
    public location!: any; // Peut être adapté si tu utilises `GEOGRAPHY`
}

// Initialisation du modèle
Restaurant.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.GEOGRAPHY("POINT"),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Restaurant",
        schema: process.env.DB_SCHEMA, // Ajoute le schema si besoin
        tableName: "restaurants",
        timestamps: false,
    }
);


export default Restaurant;