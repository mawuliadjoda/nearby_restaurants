import Product from "../models/product";

export const createProduct = async (req, res, next) => {

    const name = req.body.name;
    const qty = req.body.qty;

    Product.create({
        name: name,
        qty: qty,
        created_at: Date.now(),
        updated_at: Date.now()
    })
        .then(result => {
            console.log('Created Product');
            res.status(201).json({
                message: 'Product created successfully!',
                product: result
            });
        })
        .catch(err => {
            console.log(err);
        });
}

export const updateProduct = async (req, res, next) => {
    const id = req.params.id;
    const updatedName = req.body.name;
    const qty = req.body.qty;
    Product.findByPk(id)
        .then(product => {
            if (!product) {
                return res.status(404).json({ message: 'product not found!' });
            }
            product.name = updatedName;
            product.qty = qty;
            product.updated_at = Date.now();
            return product.save();
        })
        .then(result => {
            res.status(200).json({message: 'product updated!', product: result});
        })
        .catch(err => console.log(err));
}



export const getProducts = async (req, res, next) => {
    Product.findAll()
        .then(products => {
            res.status(200).json({products: products});
        })
        .catch(err => console.log(err));
}


export const deleteProduct = async (req, res, next) => {
    const id = req.params.id;
    Product.findByPk(id)
        .then(product => {
            if (!product) {
                return res.status(404).json({ message: 'product not found!' });
            }
            return Product.destroy({
                where: {
                    id: id
                }
            });
        })
        .then(result => {
            res.status(200).json({ message: 'product deleted!' });
        })
        .catch(err => console.log(err));
}

export const getProductByID = async (req, res, next) => {
    const id = req.params.id;
    Product.findByPk(id)
        .then(product => {
            if (!product) {
                return res.status(404).json({ message: 'product not found!' });
            }
            res.status(200).json({ product: product });
        })
        .catch(err => console.log(err));
}
