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


class Product extends Model {
    public id!: number;
    public name!: string;
    public qty!: number;
    public created_at!: any;
    public updated_at!: any;
}

// Initialisation du modèle
Product.init(
    {
        id: {
            type: DataTypes.UUIDV4,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        qty: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: "Product",
        schema: process.env.DB_SCHEMA, // Ajoute le schema si besoin
        tableName: "products",
        timestamps: false,
    }
);


export default Product;