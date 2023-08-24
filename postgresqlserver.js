//Tutorial for https: https://javascript.plainenglish.io/enable-https-for-localhost-during-local-development-in-node-js-96204453d72b
require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 8004;
const cors = require("cors");

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOption = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Gühring API for PostgreSQL",
      version: "1.0.0",
      description:
        "This is a GET API made with Express and documented with Swagger",
      contact: {
        name: "API Support: xiangyi.kiong@guehring.de",
        email: "xiangyi.kiong@guehring.de",
      },
      license: {
        name: "Apache 2.0",
        url: "https://www.apache.org/licenses/LICENSE-2.0.html",
      },
    },
    servers: [
      {
        url: "http://localhost:8004",
      },
    ],
  },
  apis: ["./routes/mssql/*.js", "./routes/postgres/*.js"],
};

const specs = swaggerJsDoc(swaggerOption);

// Initialize instance of express
const app = express();

app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(specs, { explorer: true }) //add a search bar
);

// Init Middleware, get the data and read them as json
app.use(express.json());

//initialise cors
app.use(
  cors({
    origin: "*",
  })
);

// Server static html file to check if the server is working
app.use("/", express.static("public"));

// route
app.use("/prog", require("./routes/postgres/Prog"));
app.use("/Serialnummern", require("./routes/mssql/Serialnummern"));

// Error middleware
app.use((err, req, res, next) => {
  console.log(err.stack);
  return res.status(500).json({ error: err.message });
});

// Error
app.use("*", (req, res) => res.sendStatus(404)); // the server could not find what was requested

app.listen(PORT, console.log(`HTTP Server started on port ${PORT}`));
