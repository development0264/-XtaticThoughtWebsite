import React, { useState } from "react";

const registerUser = async (username, password) => {
  await fetch("/api/register", {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json"
    },
    referrerPolicy: "no-referrer-when-downgrade",
    body: JSON.stringify({ username: username, password: password }),
    method: "POST",
    mode: "cors",
    credentials: "omit"
  }).then(res => res.json());
};

const Register = () => {
  const [username, setUsername] = useState("");

  const [password, setPassworde] = useState("");
  return (
    <main>
      <p>Please login!</p>
      <form method="post">
        {username}
        <input
          type="text"
          name="username"
          onChange={e => setUsername(e.target.value)}
        />
        {password}
        <input
          type="password"
          name="password"
          onChange={e => setPassworde(e.target.value)}
        />
        <button onClick={() => registerUser(username, password)}>Submit</button>
      </form>
    </main>
  );
};
export default Register;
