import React from "react";
import UserProfile from "./UserProfile";
import users from "./user";

class UserProfiles extends React.Component {
  render () {
    return (users.map((user) => <UserProfile objeto={user} />))    
  }
}

export default UserProfiles