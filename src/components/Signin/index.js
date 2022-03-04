import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../Firebase";
import { Card, Form } from "react-bootstrap";
import Input from "../Input";
import Button from "../Button";

const Signin = (props) => {
  const firebase = useContext(FirebaseContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btn, setBtn] = useState(false);
  const [error, seterror] = useState("");

  useEffect(() => {
    if (password.length > 5 && email !== "") setBtn(true);
    else if (btn) setBtn(false);
  }, [password, email, btn]);

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .signIn(email, password)
      .then((res) => {
        // props.history.push("/welcome")
        console.log(res);
      })
      .catch((err) => {
        seterror(err);
        setEmail("");
        setPassword("");
      });
  };
  return (
    <div className="container">
      <Card style={{ margin: "10px 0" }} className="col">
        {error !== "" && <span>{error.message}</span>}
        <h2>Connexion</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <Input
              placeholder="Entrer votre email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <Input
              placeholder="Entrer votre mot de passe"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
            />
          </div>
          {btn ? (
            <Button
              onClick={handleSubmit}
              size="medium"
              primary={true}
              label="Se Sonnecter"
            />
          ) : (
            <Button size="medium" label="Se Sonnecter" />
          )}
        </form>
        <div className="linkContainer">
          <Link className="simpleLink" to="/signup">
            Pas de compte ? Inscrivez vous maintenant 🕸 !!
          </Link>
          <br />
          <Link className="simpleLink" to="/forgetpassword">
            Mot de passe oublié?
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Signin;
