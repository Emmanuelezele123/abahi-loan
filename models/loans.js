const mongoose = require("mongoose")
const { Schema } = mongoose

const LoanSchema = new Schema(
  {
    userId: {
      type: [mongoose.Schema.Types.ObjectId],
      required: true
    },
    type: {
      type: String,
      required: true,
      enum: ["Individual", "Group"],
      default: "Group"
    },
    loanAmount: {
      type: Number,
      required: true,
    },
    issueDate: {
      type: Date,
      required: true,
    },
    expiryDate: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ['Avaliable', 'Pending'],
      required: true
      

    }, guarantor_name: {
      type: String,
      required: true,
    }, guarantor_occupation: {
      type: String,
      required: true,
    }, guarantor_address: {
      type: String,
      required: true,
    }
    ,guarantor_phoneNumber: {
      type:String,
      required:true,
   }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Loan', LoanSchema);