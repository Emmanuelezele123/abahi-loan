const Loan = require("../models/loans")



const createLoan = (req, res) => {
    const loan = req.body;
    const newLoan = new Loan({ userId: loan.userId, type: loan.type, amountAvaliable: loan.amountAvaliable, status: loan.status });
    newLoan.save((err, result) => {
        if (err) {
            console.log(err.message)
            console.error(err)
            res.json({ Error: err.message })
        } else {
            res.json({status:"Success",message:result});
        }
    });
}



const deleteLoan = (req, res) => {
    const loanId = req.params.id;
    Loan.deleteOne({ _id: loanId }, (err, result) => {
        if (err) {
            console.log(err.message)
            console.error(err)
            res.json({ Error: err.message })
        } else {
            return res.json({ status:"Success", message: "Loan deleted with id "+loanId })

       

        }
    });
}
const getAllLoans = (req, res) => {

    Loan.find((err, result) => {
        if (err) {
            console.log(err.message)
            console.error(err)
            res.json({ Error: err.message })
        } else {
            res.json({status:"Success",message:result});
        }
    });
}

const getLoan = (req, res) => {
    const loanId = req.params.id
    Loan.findById(loanId, function (err, loan) {

        if (!loan) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
        }

        if (!err) {
            res.json({status:"Success",message:loan});
        } else {

            console.log(err.message)
            console.error(err)
            res.json({ Error: err.message })

        }

    })
}

const updateLoan = (req, res) => {
    const loanId = req.params.id
    const loan = req.body
    Loan.updateOne({ _id: loanId }, {
        userId: loan.userId, type: loan.type, amountAvaliable: loan.amountAvaliable, status: loan.status
    }, function (err, affected, resp) {
        if (err) {
            console.log(err.message)
            console.error(err)
            res.json({ Error: err.message })
        } else {
            return res.json({ status:"Success",message: "Customer updated with id "+loanId })

       
        }
    })
}

module.exports = {
    createLoan,
    deleteLoan,
    getAllLoans,
    getLoan,
    updateLoan
}

