import React from "react";
import "./DisplayData.css";
import { useQuery, gql } from "@apollo/client";
import { QUERY_ALL_USERS } from "../../Graphql/graphql";

function DisplayData() {
  const { data } = useQuery(QUERY_ALL_USERS);
  console.log(data);
  return (
    <div>
      {data &&
        data.getAllUsers.map((user) => {
          return <div>
            <p>{user.name}<br/>{user.username}</p>
          </div>;
        })}
    </div>
  );
}

export default DisplayData;
