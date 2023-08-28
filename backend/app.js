const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
const device = require("express-device")
dotenv.config({ path: "./config.env" });
const app = express();
connectDB();

app.use(cors({
    origin: '*'
}));
app.use(express.json({ extended: false, limit: "50mb" }));
app.use(device.capture())

 app.use("/api/login", require("./routes/login"));
 app.use("/api/party", require("./routes/party"));
 app.use("/api/broker", require("./routes/broker"));
 app.use("/api/mandipurchase", require("./routes/mandipurchase"));
 app.use("/api/partypurchase", require("./routes/partypurchase"));
 app.use("/api/thirdpartypurchase", require("./routes/thirdpartypurchase"));
 app.use("/api/farm", require("./routes/farm"));
 app.use("/api/yield", require("./routes/yield"));
 app.use("/api/godown", require("./routes/godown"));
 app.use("/api/tulai", require("./routes/tulai"));
 app.use("/api/brand", require("./routes/brand"));
 app.use("/api/bank", require("./routes/bank"));
 app.use("/api/mark", require("./routes/mark"));
 app.use("/api/producetype", require("./routes/producetype"));
 app.use("/api/partysaiyyad", require("./routes/partysaiyyad"));
 app.use("/api/brokersaiyyad", require("./routes/brokersaiyyad"));
 app.use("/api/mandisale", require("./routes/mandisale"));
 app.use("/api/bardanamark", require("./routes/bardanamark"));
 app.use("/api/translate", require("./routes/translate"));
 app.use("/api/bookletno", require("./routes/bookletno"));
 app.use("/api/transporter", require("./routes/transporter"));
 app.use("/api/undergroup", require("./routes/undergroup"));


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running at ${PORT}`));