import mongoose from "mongoose";

const tasksSchema = new mongoose.Schema({
    title: { type: "string", required: true },
    description: { type: "string"},
    completed: { type: "boolean", default: false },
    list_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Lists'}
})

export default mongoose.model('Tasks', tasksSchema);