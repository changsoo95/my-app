import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
//import { loginUser } from "";

function App() {
  //const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {}, [msg]);

  const LoginFunc = (e: any) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>1</h1>
      <form onSubmit={LoginFunc}>
        <label>ID : </label>
        <input type="text" id="id" />
        <br />
        <button type="submit">로그인</button>
        {msg}
      </form>
    </div>
  );
}

export default App;
