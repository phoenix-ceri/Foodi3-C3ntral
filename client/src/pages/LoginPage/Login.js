import React from "react";
import Hero from "../../components/Hero";
import Login from "../../components/Login";
import BotBar from "../../components/BotBar";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./Login.scss"

const LoginPage = () => {
  return (
    <div >
      <Hero />
      <Login />
      <div className="fixed-bottom">

        <BotBar />
      </div>
    </div>
  );
};

export default LoginPage;