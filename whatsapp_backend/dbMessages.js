import mongoose from "mongoose";

const Schema = mongoose.Schema;

const messageSchema = new Schema(
	{
		message: String,
		name: String,
        received: Boolean,
        timestamp: String,
	},
);

export default mongoose.model("messages", messageSchema);