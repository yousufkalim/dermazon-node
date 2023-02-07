const Contact = require('../models/ContactUs');
const { contactUs } = require('../utils/sendEmail');

exports.createContact = async (req, res) => {
  try {
    const image = req?.file?.path;
    req.body.attachmentfile = image;
    const { name, company, phone, email, request, message } = req.body;
    const newContact = new Contact(req.body);

    // Sending contact email
    const attachment = `${process.env.HOST}/${image}`;
    await contactUs(name, company, phone, email, request, message, attachment);
    await newContact.save();

    res.status(201).json({
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
