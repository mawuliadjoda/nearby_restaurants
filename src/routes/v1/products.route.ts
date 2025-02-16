import { Request, Response, Router } from 'express';
import {
    createProduct,
    deleteProduct,
    getProductByID,
    getProducts,
    updateProduct
} from "../../controller/productController";


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

router.get('/', getProducts);

router.get('/:id', getProductByID);

router.post('/', createProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

export default router;
