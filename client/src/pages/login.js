import React from "react";
import HeroImage from "../components/hero";
import LoginForm from "../components/Login";

const LoginPage = () => {
  return (
    <div>
      <HeroImage
        imageUrl="https://cdn.discordapp.com/attachments/1096249170999918683/1097707801985421353/Gray_Brown_Modern_Photo_Collage_SEEK_Cover_Image_1.png"
        altText="foodiecentral logo on a background of food"
      />
      <LoginForm />
    </div>
  );
};

export default LoginPage;