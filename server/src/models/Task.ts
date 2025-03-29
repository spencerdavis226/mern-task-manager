import mongoose, { Document, Schema } from 'mongoose';

// Define the TypeScript interface for a Task document
export interface ITask extends Document {
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Create the schema corresponding to the document interface
const TaskSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Export the model based on the schema and interface
export default mongoose.model<ITask>('Task', TaskSchema);
