const orderModule = require('../modules/ordermodule');
const productmodule = require('../modules/productmodule');
const mongoose = require('mongoose');

// Create order
exports.Createorder = async (req, res, next) => {
    const session = await mongoose.startSession();
    try {
        session.startTransaction();
        const cartitems = req.body;
        const amount = Number(cartitems.reduce((acc, item) => acc + item.product.price * item.Qty, 0)).toFixed(2);
        const status = 'pending';
        const Order = await orderModule.create({ cartitems, amount, status });
        for (const item of cartitems) {
            let id = item.product._id;

            if (id && typeof id === 'object' && id.$oid) {
                id = id.$oid; // Extract the actual ID value
            }
            if (!mongoose.Types.ObjectId.isValid(id)) {
                console.error(`Invalid ObjectId: ${id}`);
                return;
            }
            const product = await productmodule.findById(id);         
            if (product) {
                product.stock -= item.Qty;
                console.log(product.stock, 'totstck');
                await product.save();
            } else {
                console.log(`Product with ID ${id} not found.`);
                await session.abortTransaction();
                session.endSession();
            }
        }
        await session.commitTransaction();
        session.endSession();
        res.json({
            success: true,
            message: "Order created successfully",
            data: Order,
        });
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message,
        });
    }
};
