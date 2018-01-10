const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require("graphql");

// hardcoded data
const customers = [
  { id: "1", name: "John Doe", email: "johndoe@example.com", age: 21 },
  { id: "2", name: "Jane Day", email: "janeday@example.com", age: 33 },
  { id: "3", name: "Grim Jaw", email: "grimjawe@noemail.com", age: 18 }
];

// Customer type
const CustomerType = new GraphQLObjectType({
  name: "Customer",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});
// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    customer: {
      type: CustomerType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        return customers.find(function(customer) {
          if (customer.id === args.id) {
            return customer;
          }
        });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
