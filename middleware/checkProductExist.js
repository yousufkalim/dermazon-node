const Products = require('../models/Products');

exports.checkProductExists = async (req, res, next) => {
  const { id } = req.params;
  const findProduct = await Products.findById(id);

  if (!findProduct) {
    return res.status(404).json({
      success: false,
      message: 'No product found',
    });
  }

  next();
};
