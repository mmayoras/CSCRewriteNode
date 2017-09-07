import mongoose from 'mongoose';

let Schema = mongoose.Schema;

export default mongoose.model('Consumer', new Schema({
  _id: Schema.Types.ObjectId,
  id: Number,
  firstName: String,
  middleInitial: String,
  lastName: String,
  strNumber:  String,
  date: Date,
  city: String,
  state: String,
  addressLine1: String,
  addressLine2: String,
  driverLicense: String,
  email: String,
}));
