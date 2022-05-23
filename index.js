const express = require("express");
const { ApolloServer } = require("apollo-server-express");

//Load schema & resolver
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");

let apolloServer = null;
async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}
startServer();
const app = express();

app.listen({ port: 4000 }, () => {
  console.log(`Server running at localhost:4000${apolloServer.graphqlPath}`);
});
