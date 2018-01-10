import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// COMPONENTS
import Customers from "./components/Customers";
import CustomerNew from "./components/CustomerNew";
import CustomerDetails from "./components/CustomerDetails";
// END COMPONENTS

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:4000/graphql/customers" }),
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Route exact path="/" component={Customers} />
            <Switch>
              <Route exact path="/customers/new" component={CustomerNew} />
              <Route
                exact
                path="/customers/:customer_id"
                component={CustomerDetails}
              />
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
