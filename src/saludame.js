import React from "react";

export default function App() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <form>
      <input
        name="email"
        type="email"
        placeholder="Correo Electronico"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}