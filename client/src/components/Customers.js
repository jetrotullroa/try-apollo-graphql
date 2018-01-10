import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const query = gql`
  {
    customers {
      name
      email
      age
    }
  }
`;

class Customers extends Component {
  render() {
    let { data } = this.props;

    if (data.loading) {
      return <div>Loading...</div>;
    }
    console.log(data);
    return (
      <div>
        {data.customers.map(customer => (
          <div key={customer.name}>
            <h1>{customer.name}</h1>
            <p>{customer.email}</p>
            <p>{customer.age.toString()}</p>
          </div>
        ))}
      </div>
    );
  }
}

Customers = graphql(query)(Customers);

export default Customers;
