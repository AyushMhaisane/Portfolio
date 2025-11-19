const mongoose = require('mongoose');

// Schema Define karein
const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  msg: {
    type: String,
    required: [true, 'Message is required'],
  },
}, { timestamps: true }); 

// Model Banayein
const MessageModel = mongoose.model('Message', messageSchema);

module.exports = MessageModel;
