import React, { useState, useContext } from "react";
import { FirebaseContext } from "../Firebase";
import { Link } from "react-router-dom";

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
      <button disabled>S'inscrire</button>
    ) : (
      <button>S'inscrire</button>
    );

  const msgErreur = error !== "" && <span>{error.message}</span>;
  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftSignup"></div>
        <div className="formBoxRight">
          <div className="formContent">
            {msgErreur}
            <h2>Inscription</h2>
            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <input
                  type="text"
                  id="pseudo"
                  onChange={handleChange}
                  value={pseudo}
                  required
                />
                <label htmlFor="pseudo">Pseudo</label>
              </div>
              <div className="inputBox">
                <input
                  type="email"
                  id="email"
                  onChange={handleChange}
                  value={email}
                  autocomplete="off"
                  required
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="inputBox">
                <input
                  type="password"
                  id="password"
                  onChange={handleChange}
                  value={password}
                  autocomplete="off"
                  required
                />
                <label htmlFor="password">Mot de Passe</label>
              </div>

              <div className="inputBox">
                <input
                  type="password"
                  id="confirmPassword"
                  onChange={handleChange}
                  value={confirmPassword}
                  required
                />
                <label htmlFor="confirmPassword">
                  Confirmer le mot de passe
                </label>
              </div>
              {submitBtn}
            </form>
            <div className="linkContainer">
              <Link className="simpleLink" to="/login">
                Déja inscrit ? Connectez-vous
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
