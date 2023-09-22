import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

const Login = () => {
  const { login, setToken, token, setName } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();
  const handleSubmit = () => {
    
    if (email==="" || pass === "") {
      alert("Please fill all the credentials");
    } else {
      const payload = {
        email: email,
        pass: pass,
      };
      // connecting FE with BE
      fetch("http://localhost:4500/users/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          alert(res.msg);
          setName(res.name)
          setToken(res.token);
        })
        .catch((err) => console.log(err));
    }
  };

  if (token) {
    login();
    navigate("/home");
  }

  // const handleClick=()=>{
  //     navigate("/signup")
  // }
  return (
    <div
      style={{
        width: "70%",
        margin: "auto",
        marginTop: "50px",
        height: "80vh",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <h1 style={{ textAlign: "center", paddingTop: "50px" }}>Login Page</h1>
      <div
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          width: "70%",
          margin: "auto",
          display: "grid",
          height: "40vh",
          padding: "50px",
        }}
      >
        <label>
          Email<span style={{ color: "red" }}>*</span>:
        </label>
        <input
          type="text"
          style={{ height: "60px" }}
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>
          Password<span style={{ color: "red" }}>*</span>:
        </label>
        <input
          type="password"
          style={{ height: "60px" }}
          placeholder="Enter Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button style={{ backgroundColor: "#6290c4" }} onClick={handleSubmit}>
          Submit
        </button>
      </div>
      {/* <p>If you are visiting first time on the website or not registered on the website than do registration first: <button onClick={handleClick}>Register</button></p> */}
    </div>
  );
};

export { Login };
