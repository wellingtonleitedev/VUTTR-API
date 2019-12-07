import mongoose from 'mongoose';

const ToolSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
});

export default mongoose.model('Tool', ToolSchema);
