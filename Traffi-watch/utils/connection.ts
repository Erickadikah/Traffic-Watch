//IMPORT MONGOOSE
import mongoose from "mongoose"

// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { DATABASE_URI } = process.env

// connection function
export const connect = async () => {
  const conn = await mongoose
    .connect(DATABASE_URI! as string)
    .catch(err => console.log(err))
  console.log("Mongoose Connection Established")

  // OUR EVENT SCHEMA
  const EventSchema = new mongoose.Schema({
    location: String,
    description: String,
    image: String,
  })

  // OUR EVENT MODEL
  const Event = mongoose.models.Event || mongoose.model("Event", EventSchema)
  return { conn, Event }
}
