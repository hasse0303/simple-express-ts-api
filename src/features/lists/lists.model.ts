import mongoose from 'mongoose';

const ListSchema = new mongoose.Schema({
    title: { type: 'string', required: true },
    description: { type: 'string'}
})

export default mongoose.model('Lists', ListSchema);