const mongoose = require("mongoose")
const { Schema } = mongoose
var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};
const CustomerSchema = new Schema(
  {
    //title, description, timestamp.
    firstname: {
      type: String,
      required: true,
    }, lastname: {
      type: String,
      required: true,
    },
    middlename: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female'],
      required: true
    },
    nationality: {
      type: String,
      required: true,
    },
    lga: {
      type: String,
      required: true,
    },
    stateOfOrigin: {
      type: String,
      required: true,
    },
    businessName: {
      type: String,
      required: true,
    },
    businessAddress: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: 'Email address is required',
      validate: [validateEmail, 'Please fill a valid email address'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    phoneNumber: {
      type: String,
      minNumber: 11,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Customer', CustomerSchema);