import React from "react";
import { useState } from "react";

function Form() {
  const [name, setName] = useState();
  const [Password, setPassword] = useState();
  const Email = new RegExp(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/);

  const store = () => {
    if (Email.test(name) === false) alert("email is not valid");
  };

  const lance = (event) => {
    event.preventdefault();
  };
  return (
    <div class="hher">
      <h1 id="ht">Welcome to My Login page</h1>
      <form onSubmit={lance}>
        <label>Email</label>

        <input
          type="email"
          id="name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br></br>
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br></br>
        <button type="submit" onClick={store}>
          submit
        </button>
      </form>
    </div>
  );
}

export default Form;
