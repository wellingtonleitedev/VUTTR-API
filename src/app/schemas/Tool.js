import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

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

ToolSchema.plugin(mongoosePaginate)

export default mongoose.model('Tool', ToolSchema);
