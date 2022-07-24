const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs = require("./Schema/typeDef");
const resolvers = require("./Schema/resolvers");

const mongoose = require("mongoose");

async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app: app });
  app.use((req, res) => {
    res.send("hello from express apollo server");
  });

  await mongoose.connect("mongodb://localhost:27017/users_db",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("mongoose connected...")

  app.listen(4000, () => console.log("server is running on 4000"));
}
startServer();
