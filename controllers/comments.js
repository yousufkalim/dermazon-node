const Comments = require('../models/Comments');

exports.addComment = async (req, res) => {
  try {
    const { body } = req;

    const comment = await Comments.create(body);

    res.status(201).json({ success: true, data: { comment } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comments.find();
    res.status(200).json({ success: true, data: { comments } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getCommentyId = async (req, res) => {
  try {
    const comment = await Comments.findById(req.params?.id);
    res.status(200).json({ success: true, data: { comment } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateComment = async (req, res) => {
  try {
    const commentId = req.params.id;
    const findComment = await Comments.findById(commentId);

    if (!findComment) {
      return res.status(404).json({ success: false, message: 'Comment not found' });
    }

    const comment = await Comments.findByIdAndUpdate(commentId, req.body, { new: true });
    res.status(200).json({ success: true, data: { comment } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const commentId = req.params.id;
    const findComment = await Comments.findById(commentId);

    if (!findComment) {
      return res.status(404).json({ success: false, message: 'Comment not found' });
    }

    await Comments.findByIdAndDelete(commentId);
    res.status(200).json({ success: true, message: 'Comment has been deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
