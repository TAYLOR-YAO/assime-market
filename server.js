
//  Node packages
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
//  =================================================
var fileUpload = require('express-fileupload');
const imageRoutes = require("./routes/image-routes");

//  =================================================

const inventoryRoutes = require("./routes/inventory-routes")

const storeRoutes = require("./routes/stores-routes");
const DeliveredRoutes = require("./routes/Delivered-routes");
// const sellsRoutes = require("./routes/sells-routes");
const paymentRoute = require("./routes/payment-routes");
const users = require("./routes/User-routes");


const path = require("path");
//  =================================================

//  Connection with express modules
const app = express();
const PORT = process.env.PORT || 5000;

//  ========================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
if(process.env.NODE_ENV === "production"){
    app.use (express.static("client/build"))

}

//Connection to mongoDB
const mongoose = require('mongoose');
mongoose.Promise = Promise;
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://assime:assime228@ds341837.mlab.com:41837/heroku_tk9srqsq', ()=>{
//     console.log("Succesfuly Connected to MongoDB")
// });

// ---------------------------------CosmossDB Connector --------------------------------
mongoose.connect(process.env.CONNECTING_STRING || 'mongodb://localhost/assime228', ()=>{
        console.log("Succesfuly Connected to Localhost")
    });
// --------------------------------------------------------------------------------------


// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);


app.use("/api",inventoryRoutes);
app.use("/api", DeliveredRoutes);
// app.use("/api", userRoutes);
// app.use("/api", sellsRoutes);
app.use("/api", storeRoutes)
app.use("/api", paymentRoute);
app.use("/api/users", users);
//  =================================================

app.use("/api", imageRoutes);
//  =================================================

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});


// PORT Listener
app.listen(PORT,()=>{
    console.log(`Listening on port: ${PORT}`);
});