const express = require("express");
const expressGQL = require("express-graphql");
const customers = require("./schemas/customers");
const app = express();

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
