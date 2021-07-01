import React, { useState, useEffect } from "react";

// A GitHubUser component that fetches a GitHub user and displays the
// username and avatar.
export default function GitHubUser({ username }) {
  // Initialize the state with the provided username.
  const [user, setUser] = useState(username);

  // When the state changes, fetch the user and update the state.
  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((user) => {
        setUser(user);
      });
  }, []);

  // Render the user's username and avatar.
  return (
    <div>
      <h1>{user.login}</h1>
      <img src={user.avatar_url} />
    </div>
  );
}
