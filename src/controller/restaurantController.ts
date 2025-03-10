import Restaurant from "../models/restaurants";
import {sequelize} from "../utils/database";


// const createRestaurant = (req, res, next) => {
//     const name = req.body.name;
//     // const location = req.body.location;
//     const id = req.body.id;
//     Restaurant.create({
//         id: id,
//         name: name
//     })
//         .then(result => {
//             console.log('Created Restaurant');
//             res.status(201).json({
//                 message: 'Restaurant created successfully!',
//                 restaurant: result
//             });
//         })
//         .catch(err => {
//             console.log(err);
//         });
// }

export const createRestaurant = async (req, res) => {
    try {
        const {name, longitude, latitude} = req.body;

        const query = `
            INSERT INTO ${process.env.DB_SCHEMA}.restaurants (name, location)
            VALUES (:name, gis.st_point(:longitude, :latitude))
        `;

        const replacements = {
            name,
            longitude,
            latitude
        };

        const [restaurant] = await sequelize.query(query, {
            replacements,
            mapToModel: true,
            model: Restaurant
        });

        res.status(201).json({
            message: "Restaurant created successfully!!!",
            data: replacements
        });
    } catch (error) {
        console.error("Error creating restaurant:", error);
        res.status(500).json({error: "Internal Server Error"});
    }
};

export const updateRestaurant = async  (req, res) => {
    try {
        const id = req.params.id;
        const updatedName = req.body.name;
        const updatedLongitude = req.body.longitude;
        const updatedLatitude = req.body.latitude;

        const restaurant = await Restaurant.findByPk<Restaurant>(id);

        if (!restaurant) {
            return res.status(404).json({message: "Restaurant not found!"});
        }

        // restaurant.name = updatedName;
        // restaurant.location = {type: "Point", coordinates: [updatedLongitude, updatedLatitude]};

        // await restaurant.save();
        const query = `
            UPDATE ${process.env.DB_SCHEMA}.restaurants
            SET name=:updatedName,
                location=gis.st_point(:updatedLongitude, :updatedLatitude)
            WHERE id = :id
        `;

        const replacements = {
            id,
            updatedName,
            updatedLongitude,
            updatedLatitude
        };

        const [updatedRestaurant] = await sequelize.query(query, {
            replacements,
            mapToModel: true,
            model: Restaurant
        });

        res.status(200)
            .json({
                message: "Restaurant updated!!!",
                data: replacements
            });
    } catch (err) {
        console.error(err);
        res.status(500).json({error: "Internal Server Error"});
    }
};

export const getRestaurants = async (req, res, next) => {
    Restaurant.findAll()
        .then(restaurants => {
            res.status(200).json({restaurants: restaurants});
        })
        .catch(err => console.log(err));
}


export const deleteRestaurant = async (req, res, next) => {
    const id = req.params.id;
    Restaurant.findByPk(id)
        .then(restaurant => {
            if (!restaurant) {
                return res.status(404).json({ message: 'Restaurant not found!' });
            }
            return Restaurant.destroy({
                where: {
                    id: id
                }
            });
        })
        .then(result => {
            res.status(200).json({ message: 'Restaurant deleted!' });
        })
        .catch(err => console.log(err));
}

export const getRestaurantByID = async (req, res, next) => {
    const id = req.params.id;
    Restaurant.findByPk(id)
        .then(restaurant => {
            if (!restaurant) {
                return res.status(404).json({ message: 'Restaurant not found!' });
            }
            res.status(200).json({ restaurant: restaurant });
        })
        .catch(err => console.log(err));
}

// export default {createRestaurant, updateRestaurant}; //createRestaurant;