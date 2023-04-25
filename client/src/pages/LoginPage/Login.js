import React from "react";
import Hero from "../../components/Hero";
import Login from "../../components/Login";
import BotBar from "../../components/BotBar";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./Login.css"

const LoginPage = () => {
  return (
    <div>
      <Hero />
      <Login />
      <br />
      {/* <BotBar /> */}
    </div>
  );
};

export default LoginPage;