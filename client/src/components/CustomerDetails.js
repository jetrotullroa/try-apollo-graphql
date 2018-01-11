import React, { Component } from "react";
import { Link } from "react-router-dom";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const query = gql`
  query FetchCustomer($id: String!) {
    customer(id: $id) {
      id
      name
      email
      age
    }
  }
`;

class CustomerDetails extends Component {
  render() {
    const { data } = this.props;
    if (data.loading) {
      return <div>Loading...</div>;
    }
    console.log(data);
    return (
      <div>
        <h1>Customer Details</h1>
        <h3>{data.customer.name}</h3>
        <p>{data.customer.email}</p>
        <p>{data.customer.age}</p>
      </div>
    );
  }
}
const queryOption = {
  options: props => ({
    variables: {
      id: props.match.params.customer_id
    }
  })
};
CustomerDetails = graphql(query, queryOption)(CustomerDetails);
export default CustomerDetails;
