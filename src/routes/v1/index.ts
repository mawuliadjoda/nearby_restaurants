import { Router } from 'express';

import books from './books.route';
import restaurantsRoute from "./restaurants.route";


const router = Router();

router.use('/books', books);
router.use('/restaurants', restaurantsRoute);


export default router;
