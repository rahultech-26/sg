const mongoose = require("mongoose");

const connectDB = () => {
    mongoose
        .connect("mongodb+srv://rahul:9977@cluster0.otvzvlm.mongodb.net/saiyyadgroup", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("MongoDB Connected"))
        .catch((err) => {
            console.error(err.message);
            process.exit(1);
        });
};

module.exports = connectDB;