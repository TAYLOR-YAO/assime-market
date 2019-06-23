const express = require("express");
const mongoose = require("mongoose");
const db = require("../models");
const router = express.Router();

router.post("/delivered", (req, res)=>{
    db.Sells.deleteOne({"_id": req.body._id}).then(deleted=>{
    }).catch(err=>{
        return err.message
    });

    delete req.body._id
    db.Delivered.create(req.body).then(order=>{
        db.Inventory.findById(req.body.inventoryID, (err, item) => {
            if (err) return                   
            item.both = item.both - req.body.quantity;                 
            item.save((err, updatedItem) => {
                if (err) return err.message;
                res.send({
                    success: true,
                    message: "Success"
                })
            });
        });
    })
    .catch(function(err) {
        return err.message;
    })
    
});

router.get("/delivered", (req, res)=>{
        db.Delivered.find({"storeId":req.query.storeId}).then(orders =>{
        res.send(orders)
    });
});

module.exports = router;