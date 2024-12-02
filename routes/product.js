var express =require('express')
const { getProducts, getSingleProducts } = require('../controlleres/productController')

const Router=express.Router()

Router.route('/products').get(getProducts)
Router.route('/products/:id').get(getSingleProducts)



module.exports = Router;
