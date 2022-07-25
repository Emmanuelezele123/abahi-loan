const mongoose = require("mongoose")
const {Schema} = mongoose

const LoanSchema = new Schema(
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        required:true
       },
     type: {
        type: String,
        required:true,
        enum:["Individual","Group"]
    },
    amountAvaliable:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        enum: ['Avaliable', 'Pending'],
        required:true
        
    }
   },
     { timestamps: true }
    );

    module.exports = mongoose.model('Loan', LoanSchema);