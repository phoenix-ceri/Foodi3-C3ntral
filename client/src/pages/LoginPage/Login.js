import React from "react";
import Hero from "../../components/Hero";
import Login from "../../components/Login";
import TopNav from "../../components/TopBar";
import Footer from "../../components/Footer";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./Login.scss"

const LoginPage = () => {
  return (
    <div >
      <Hero />
      <TopNav />
      <Login />
      <Footer/>
    </div>
  );
};

export default LoginPage;