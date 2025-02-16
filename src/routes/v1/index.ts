import { Router } from 'express';

import books from './books.route';
import restaurantsRoute from "./restaurants.route";
import productsRoute from "./products.route";


const router = Router();

router.use('/books', books);
router.use('/restaurants', restaurantsRoute);
router.use('/products', productsRoute);


export default router;
