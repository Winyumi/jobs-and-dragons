import React from "react";

import 'materialize-css';

import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-spa";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <Loading />;
  }

  return (
    <div className="next-steps my-5">
      
      <h2 className="my-5 text-center">Welcome {user.name}</h2>
      <p>{user.email}</p>
      <img src={user.picture} alt="Profile" />

      <div class="row">
        <div class="col">
          <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
        </div>
      </div>

  </div>
  );
};

export default Profile;



