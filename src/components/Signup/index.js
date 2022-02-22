import React, { useState, useContext } from "react";
import "./signup.css";
import Input from "../Input";
import { FirebaseContext } from "../Firebase";
import { Link } from "react-router-dom";
import Button from "../Button";
import { Card, Form } from "react-bootstrap";

const Signup = (props) => {
  const datas = {
    pseudo: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const firebase = useContext(FirebaseContext);

  const [data, setData] = useState(datas);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setData({ ...data, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = data;
    firebase
      .signUp(email, password)
      .then((userAuth) => {
        return firebase.user(userAuth.user.uid).set({
          pseudo,
          email,
        });
      })
      .then(() => {
        setData({ ...datas });
        props.history.push("/welcome");
      })
      .catch((err) => {
        setError(err);
        setData({ ...datas });
      });
  };

  const { pseudo, email, password, confirmPassword } = data;
  const submitBtn =
    pseudo === "" ||
    email === "" ||
    password === "" ||
    password !== confirmPassword ? (
      <Button size="medium" label="S'inscrire" />
    ) : (
      <Button
        onClick={handleSubmit}
        size="medium"
        primary={true}
        label="S'inscrire"
      />
    );

  const msgErreur = error !== "" && <span>{error.message}</span>;
  return (
    <div className="container">
      <Card style={{ margin: "10px 0" }} className="col">
        <Card.Body>
          {msgErreur}
          <h2>Inscription</h2>
        </Card.Body>
        <form onSubmit={handleSubmit} className="card-todo">
          <div className="mb-3">
            <label className="form-label">Pseudo</label>
            <Input
              id="pseudo"
              placeholder="Entrer votre pseudo"
              onChange={handleChange}
              value={pseudo}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <Input
              id="email"
              type="email"
              placeholder="Entrer votre email"
              onChange={handleChange}
              value={email}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Mot de passe</label>
            <Input
              id="password"
              type="password"
              placeholder="Entrer votre mot de passe"
              onChange={handleChange}
              value={password}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirmer le mot de passe</label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirmer votre mot de passe"
              onChange={handleChange}
              value={confirmPassword}
            />
          </div>
          {submitBtn}
        </form>
      </Card>
      <div className="linkContainer">
        <Link className="simpleLink" to="/login">
          Déja inscrit ? Connectez-vous
        </Link>
      </div>
    </div>
  );
};

export default Signup;

{
  /* <div className="signUpLoginBox">
<div className="slContainer">
  <div className="formBoxLeftSignup"></div>
  <div className="formBoxRight">
    <div className="formContent">
      {msgErreur}
      <h2>Inscription</h2>
    
    </div>
  </div>
</div>
</div> */
}
