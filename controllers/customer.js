const Customer = require('../models/customer')


const createCustomer = (req, res) => {
    const customer = req.body;
    const newCustomer = new Customer({ name: customer.name, email: customer.email, phoneNumber: customer.phoneNumber });
    newCustomer.save((err, result) => {
        if (err) {
            console.log(err.message)
            console.error(err)
            res.json({Error:err.message})
        } else {
            res.json({status:"Success",message:result});
        }
    });
}



const deleteCustomer = (req, res) => {
    const customerId = req.params.id;
    Customer.deleteOne({ _id: userId }, (err, result) => {
        if (err) {
            console.log(err.message)
            console.error(err)
            res.json({Error:err.message})
        } else {
            return res.json({ status:"Success",message: "Customer deleted with id "+customerId })

        }
    });
}
const getAllCustomers = (req, res) => {

    Customer.find((err, result) => {
        if (err) {
            console.log(err.message)
            console.error(err)
            res.json({Error:err.message})
        } else {
             return res.json({status:"Success",message:result});
        }
    });
}

const getCustomer = (req,res) => {
    const customerId = req.params.id
    Customer.findById(customerId, function(err,customer) {

        if(!user) {
          res.statusCode = 404;
          return res.send({ error: 'Not found' });
        }
  
        if(!err) {
           return res.json({status:"Success",message:customer});
        } else {
  
            console.log(err.message)
            console.error(err)
            res.json({Error:err.message})

        }

})
}

const updateCustomer = (req, res) => {
    const customerId = req.params.id
    const customer = req.body
    User.updateOne({ _id: userId }, {
        name: customer.name, email: customer.email, phoneNumber: customer.phoneNumber
    }, function (err, affected, resp) {
        if (err) {
            console.log(err.message)
            console.error(err)
            res.json({Error:err.message})
        } else {
            return res.json({ status:"Success", message: "Customer updated with id "+customerId })

        }
    })
}

module.exports = {
    createCustomer,
    deleteCustomer,
    getAllCustomers,
    getCustomer,
    updateCustomer,
}