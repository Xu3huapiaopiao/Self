const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route
app.use("/api/v1", require("./src/routes/uploadRoutes"));
app.use("/api/v1/graphs", require("./src/routes/dashboardGraphRoutes"));

const port = process.env.PORT || 8081;

app.listen(port, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
