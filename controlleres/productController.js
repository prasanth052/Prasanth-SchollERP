const ProductModel = require('../modules/productmodule')
const productmodule = require('../modules/productmodule')

//  Get Products API
exports.getProducts = async (req, res, next) => {
    try {
        const query = req.query.keyword?{name: {
                $regex: req.query.keyword,
                $options: 'i'
            }} : {}
        const products = await productmodule.find(query)

        res.json({
            sucess: true,
            message: 'Get products Working',
            data: products
        })
    }
    catch (error) {
        res.json([{ Msg: error.message, status: 'N' }])
    }
}

//  Get SINGLE Product Through ID API
exports.getSingleProducts = async (req, res, next) => {
    try {
        const id = req.params.id
        const product = await ProductModel.findById(id)
        res.json({
            sucess: true,
            message: 'Get Single products Working',
            data: product
        })
    }
    catch (error) {
        res.json([{ Msg: error.message, status: 'N' }])
    }

} 