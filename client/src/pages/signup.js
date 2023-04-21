import React from "react";
import HeroImage from "./hero";
import SignUp from "../login/signup";

const SignUpPage = () => {
  return (
    <div>
      <HeroImage
        imageUrl="https://cdn.discordapp.com/attachments/1096249170999918683/1097707801985421353/Gray_Brown_Modern_Photo_Collage_SEEK_Cover_Image_1.png"
        altText="foodie central logo on a background of food"
      />
      <SignUp/>
    </div>
  );
};

export default SignUpPage;