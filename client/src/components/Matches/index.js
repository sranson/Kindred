import React from "react";
// import { useQuery } from "@apollo/client";
// import { QUERY_USERS } from "../../utils/queries";

const Matches = () => {
  // const { loading, data } = useQuery(QUERY_USERS);
  // if (loading) {
  //   return <h2>Loading...</h2>;
  // }

  return (
    <div>
      <h1>Matches</h1>
      {/* <div>
        {data.users.length > 0 ? (
          data.users.map((user) => {
            <p>{user.username}</p>;
          })
        ) : (
          <h2>No users found!!!</h2>
        )}
      </div> */}
    </div>
  );
};

export default Matches;
