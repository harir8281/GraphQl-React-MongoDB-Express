import React from "react";
import "./App.css";
import {ApolloClient,InMemoryCache,ApolloProvider} from '@apollo/client'

//components
import CreateUser from "./components/CreateUser/CreateUser";
import DeleteUser from "./components/DeleteUser/DeleteUser";
import UpdateUser from "./components/UpdateUser/UpdateUser";
import DisplayData from "./components/DisplayData/DisplayData";
function App() {
  const client=new ApolloClient({
    cache: new InMemoryCache (),
    uri:"http://localhost:4000/graphql"
  })
  return (
    <ApolloProvider client={client}>
    <div className="container">
      <div className="upper-container">
        <CreateUser />
        <UpdateUser />
        <DeleteUser />
      </div>
      <DisplayData/>
    </div>
    </ApolloProvider>
  );
}

export default App;
