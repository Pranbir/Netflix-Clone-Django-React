import React from 'react';



const UserMenu = () => {
    return <div >
         
         <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
   User
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button class="dropdown-item" type="button">Switch Profile</button></li>
    <li><button class="dropdown-item" type="button">Select Plan</button></li>
    <li><button class="dropdown-item" type="button">Purchases</button></li>
    <li><button class="dropdown-item" type="button">Account Settings</button></li>
    <li><button class="dropdown-item" type="button">Logout</button></li>
  </ul>
</div>


    </div>;
};

export default UserMenu;