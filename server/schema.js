import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';

import db from './db';

const Customer = new GraphQLObjectType({
  name: 'Customer',
  description: 'This is a customer',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve (customer) {
          return customer.id;
        }
      },
      first_name: {
        type: GraphQLString,
        resolve (customer) {
          return customer.first_name;
        }
      },
      last_name: {
        type: GraphQLString,
        resolve (customer) {
          return customer.last_name;
        }
      },
      email: {
        type: GraphQLString,
        resolve (customer) {
          return customer.email;
        }
      }
    }
  }
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query object',
  fields: () => {
    return {
      customers: {
        type: new GraphQLList(Customer),
        args: {
          id: { type: GraphQLInt },
          email: { type: GraphQLString }
        },
        resolve (root, args) {
          return db.models.customer.findAll({ where: args });
        }
      }
    }
  }
});

const Schema = new GraphQLSchema({
  query: Query
});

export default Schema;
