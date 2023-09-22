import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [cpass, setCPass] = useState("");

  const navigate = useNavigate();
  // const handleClick=()=>{
  //     navigate("/Login")
  // }
  const handleSubmit = () => {
    
    if (email==="" || pass==="" || name==="" || cpass === "") {
      alert("Please fill all the credentials");
    }else if (pass !== cpass) {
      alert("Your password is not matching.");
    }else {
      const payload = {
        name: name,
        email: email,
        pass: pass,
      };
      // connecting FE with BE
      fetch("http://localhost:4500/users/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((res) => {
          alert(res.msg);
          if(res){
             navigate("/login")
          }
          return res;
        })
        .catch((err) => console.log(err));
    }
  };

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
      <h1 style={{ textAlign: "center", paddingTop: "50px" }}>
        Registration Page
      </h1>
      <div
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          width: "70%",
          margin: "auto",
          display: "grid",
          height: "45vh",
          padding: "50px",
        }}
      >
        <label>
          Name<span style={{ color: "red" }}>*</span>:
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>
          Email<span style={{ color: "red" }}>*</span>:
        </label>
        <input
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>
          {" "}
          Password<span style={{ color: "red" }}>*</span>:
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <label>
          {" "}
          Confirm Password<span style={{ color: "red" }}>*</span>:
        </label>
        <input
          type="password"
          placeholder="Confirm Password"
          value={cpass}
          onChange={(e) => setCPass(e.target.value)}
        />

        <button style={{ backgroundColor: "#6290c4" }} onClick={handleSubmit}>
          Submit
        </button>
        {/* <p>If you are already registered on the website than do login: <button onClick={handleClick}>Login</button></p> */}
      </div>
    </div>
  );
};

export { Signup };
