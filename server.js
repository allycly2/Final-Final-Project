const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("login-db", "root", "root", {
  host: "localhost",
  port: 8889,
  dialect: "mysql",
  dialectOptions: {
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  },
});

// Define a User model
const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sync the model with the database
sequelize
  .sync()
  .then(() => {
    console.log("Models synced with the database!");
  })
  .catch((error) => {
    console.error("Error syncing models:", error);
  });

// Express route for handling the login form submission
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user in the database
    const user = await User.findOne({
      where: {
        username: username,
        password: password,
      },
    });

    if (user) {
      // User found, login successful
      res.status(200).json({ message: "Login successful" });
    } else {
      // User not found, login failed
      res.status(401).json({ message: "Login failed" });
    }
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
