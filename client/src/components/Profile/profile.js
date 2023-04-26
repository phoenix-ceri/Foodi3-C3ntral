import React from 'react';
import SideBar from '../SideBar';
import Calendar from '../Calendar';


function Profile() {

  return (
    <div>
      <SideBar bg="light" expand="lg" sticky="top"/> 
            <Calendar />
    </div>
  );
}

export default Profile;
