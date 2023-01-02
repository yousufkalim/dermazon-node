const News = require('../models/News');
const fs = require('fs');

exports.createNews = async (req, res) => {
  try {
    const image = req?.file?.path;
    req.body.image = image;
    const newNews = new News(req.body);
    const news = await newNews.save();

    res.status(201).json({
      success: true,
      data: {
        news,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getAllNews = async (req, res) => {
  try {
    const news = await News.find();

    res.status(200).json({
      success: true,
      data: {
        news,
      },
    });
  } catch (err) {
    res.status(500).json({
      succes: false,
      message: err.message,
    });
  }
};

exports.getNewsById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await News.findById(id);

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

exports.updateNews = async (req, res) => {
  try {
    const { id } = req.params;
    const { image } = req.body;
    const findNews = await News.findById(id);
    if (req?.file) {
      req.body.image = req.file.path;
      if (findNews.image) {
        await fs.unlink(findNews.image, () => {});
      }
    }
    if (!image || image === 'null') {
      if (findNews.image) {
        await fs.unlink(findNews.image, () => {
          req.body.image = null;
        });
      }
    }
    const news = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json({
      success: true,
      data: {
        news,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.deleteNews = async (req, res) => {
  try {
    await News.findByIdAndRemove(req.params.id);

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

exports.deleteAllNews = async (req, res) => {
  try {
    await News.deleteMany();

    res.status(200).json({
      success: true,
      message: 'All news deleted successfully',
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
