import React from "react";
import Profile from "../../components/Profile/profile";
import Footer from '../../components/Footer';
// import CommentForm from '../../components/Comments/add';
// import RenderComment from '../../components/Comments/render';

import './profilePage.scss'


const ProfilePage = () => {
  return (
    <div>
      <br />
      <Profile />

      <div className="footerComponent">
        <Footer />
      </div>
    </div>
  );
};

export default ProfilePage;
