const express = require("express");
const expressGQL = require("express-graphql");
const customers = require("./schemas/customers");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(
  "/graphql/customers",
  expressGQL({
    schema: customers,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Listing to port 4000");
});
