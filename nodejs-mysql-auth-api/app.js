import express from "express";
import dbConnection from "./dbConnection.js";
import routes from "./routes.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

app.use((err, req, res, next) => {
  if (err.statusCode === 422) {
    // Handle validation errors
    return res.status(422).json({
      errors: err.errors, // Assuming the validation errors are stored in the `errors` property of the error object
    });
  }

  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    message: err.message,
  });
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", routes);

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    message: err.message,
  });
});

// If the database is connected successfully, then run the server
dbConnection
  .getConnection()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(`Failed to connect to the database: ${err.message}`);
  });
