const app = require("./app");

const dotenv = require("dotenv");

const connectDatabase = require("./config/database");

//handling uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down down server due to uncaught rejection. `);
  server.close(() => process.exit(1));
});

//config
dotenv.config({ path: "backend/config/config.env" });

// connect DB

connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`successfully connected at ${process.env.PORT}`);
});

//Unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down down server due to unhandled rejection. `);
  server.close(() => process.exit(1));
});
