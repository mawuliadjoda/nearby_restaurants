import { Request, Response, Router } from 'express';
import {
  createRestaurant,
  deleteRestaurant, getRestaurantByID, getRestaurants,
  updateRestaurant
} from "../../controller/restaurantController";

const router = Router();

router.get('/ping', async (req: Request, res: Response) => {
  try {
    res.status(200).send('restaurents working!')
    //res.status(200).json([]);
  } catch (error) {
    console.error('An error ocurred:', error);
    res.status(500).json(error);
  }
});

router.get('/', getRestaurants);
// router.get('/', async (req: Request, res: Response) => {
//   try {
//     res.status(200).send('Hello World!')
//     //res.status(200).json([]);
//   } catch (error) {
//     console.error('An error ocurred:', error);
//     res.status(500).json(error);
//   }
// });

router.get('/:id', getRestaurantByID);
// router.get('/:id', async (req: Request, res: Response) => {
//   try {
//     res.status(200).json({});
//   } catch (error) {
//     console.error('An error ocurred:', error);
//     res.status(500).json(error);
//   }
// });

router.post('/', createRestaurant);
// router.post('/', async (req: Request, res: Response) => {
//   try {
//     res.status(201).json({});
//   } catch (error) {
//     console.error('An error occurred:', error);
//     res.status(500).json(error);
//   }
// });

router.put('/:id', updateRestaurant);
//  router.put('/:id', async (req: Request, res: Response) => {
//    try {
//      res.status(200).json({});
//    } catch (error) {
//      console.error('An error occurred:', error);
//      res.status(500).json(error);
//    }
//  });

router.delete('/:id', deleteRestaurant);
// router.delete('/:id', async (req: Request, res: Response) => {
//   try {
//     res.status(200).json({});
//   } catch (error) {
//     console.error('An error occurred:', error);
//     res.status(500).json(error);
//   }
// });

export default router;
