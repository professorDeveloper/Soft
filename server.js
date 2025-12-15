const express = require('express');
const app = express();
app.use(express.json());
const roomTypeRoutes = require("./routes/roomTypeRoutes");
app.use("/api", roomTypeRoutes);
app.listen(5000, () => {
    console.log('server is running ');
})

//