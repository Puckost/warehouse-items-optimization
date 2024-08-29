const express = require('express');
const warehouseInventoryRoutes = require('./routes/warehouseInventoryRoutes')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use('/api', warehouseInventoryRoutes)

app.listen(PORT, (error) => {
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else
        console.log("Error occurred, server can't start", error);
    }
);
