const express = require("express");
const mongoose = require("mongoose");
const db = require("../models");
const router = express.Router();
const stripe = require("stripe")("sk_test_UMzsrxnqnlBdIYXqfyuKIbQa");
// --------------------------------------------------------------------------------------


var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
// var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'taylor.dev25@gmail.com',
        pass: 'Anoumou25',
    },
});

// setup e-mail data with unicode symbols
function customMailOption(receiver){
     return {
        from: '"ASSIME-228" <taylor.dev25@gmail.com>', // sender address
        to: receiver, // list of receivers
        subject: 'Thanks for shopping with us!', // Subject line
        text: 'Hello', // plaintext body
        html: `<div>
            <h2><Hello Customer, Thanks For Shopping with us</h2>
            <img src="https://firebasestorage.googleapis.com/v0/b/assime-images.appspot.com/o/images%2Ff69fbedb-9b25-48cb-882d-dbe6f7475cb6.jpg?alt=media&token=c54a266b-b878-4f69-b9f2-29f52a66b629" atl="papara T-shirt"/>
        </div> `// html body
    };
}
// send mail with defined transport object

// --------------------------------------------------------------------------------------


router.post("/stripe", (req, res) => { 
    const stripeToken = req.body.stripeToken;
    const cart = req.body.cart
    const amountToCharge = Math.floor(req.body.amountToCharge) * 100

    stripe.charges.create({
        amount: amountToCharge,
        currency: "usd",
        description: JSON.stringify(cart),
        source: stripeToken,
    },function(err, charge) {
        if (err) {
            console.log(err)
            res.send({
                    success: false,
                    message: "Error: "
            }) 
        } else {
            // console.log("STRIPE DATA:  ",charge)
            
            const sells = JSON.parse(charge.description);
            sells.map(item => {
                item.customerEmail = req.body.email;
                item.customerAddress = `${charge.source.address_line1} ${charge.source.address_city}, ${charge.source.address_state} ${charge.source.address_zip}`,
                item.customerName = charge.source.name
                item.inventoryID = item._id
                delete item._id;
            });
// -----------------------------------------------------------------------------

            transporter.sendMail(customMailOption("taylor.yao25@yahoo.com"), function(error, info){
                if(error){
                    return console.log(error);
                }
                // console.log('Message sent: ' + info.response);
            });

// -----------------------------------------------------------------------------

            db.Sells.insertMany(sells).then(sells=>{
                res.send({
                    success: true,
                    message: "Success",
                    cart: sells
                });
            });
        }
    });

});


module.exports = router;