import React from 'react';
import SideBar from '../Sidebar';
import Calendar from '../Calendar';


function Profile() {

  return (
    <div>
      <Calendar />
      <SideBar bg="light" expand="lg" sticky="top" />

    </div>
  );
}

export default Profile;
