const Comments = require('../models/Comments');
const News = require('../models/News');
const Products = require('../models/Products');

// Create Product
exports.createProduct = async (req, res) => {
  try {
    req.body.images = req?.files?.map((item) => item.path);

    const newProduct = new Products(req.body);
    const product = await newProduct.save();

    res.status(201).json({
      success: true,
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get All Products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Products.find();

    res.status(200).json({
      success: true,
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(500).json({
      succes: false,
      message: err.message,
    });
  }
};

// Get Product by Id
exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findById(id);
    res.status(200).json({
      success: true,
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.mesaage,
    });
  }
};

// Update a Product
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const findProduct = await Products.findById(id);
    const imagePaths = req?.files?.map((item) => item.path);

    const oldImages = req.body.oldImages;
    const dbImages = findProduct.images;

    const allOldImages = dbImages.filter((item) => {
      const dbImage = item?.split('uploads/')[1];
      if (oldImages?.includes(dbImage)) {
        return item;
      }
    });

    req.body.images = [...imagePaths, ...allOldImages];

    const product = await Products.findByIdAndUpdate(findProduct._id, req.body, { new: true });

    res.status(200).json({
      success: true,
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Delete A Product
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findById(id);

    await Products.findByIdAndRemove(product._id);

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Delete All Products
exports.deleteAllProducts = async (req, res) => {
  try {
    await Products.deleteMany();

    res.status(200).json({
      success: true,
      message: 'All products deleted successfully',
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    });
  }
};

exports.getDocumentCounts = async (req, res) => {
  try {
    const productCounts = await Products.find().countDocuments();
    const newsCounts = await News.find().countDocuments();
    const commentCounts = await Comments.find().countDocuments();

    res.status(200).json({
      success: true,
      data: {
        products: productCounts,
        news: newsCounts,
        comments: commentCounts,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    });
  }
};
