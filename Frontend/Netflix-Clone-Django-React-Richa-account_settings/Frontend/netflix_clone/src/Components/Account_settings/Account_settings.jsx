import styles from './Account_settings.module.css';
import React from 'react';
import Assests from './Assests/netflix_icon.jpg';
const Account_settings = () => {
    return(
      <>
        <div class = "container" className={styles.container}>
          <h1 class = "header" className={styles.header}> ACCOUNT SETTINGS </h1>
          <div class = "container2" className={styles.container2}>
          <h5 class ="head5" className={styles.head5}> Membership & Billing</h5>
          <h6 class = "head1" className= {styles.head1}>alphanso.dev@gmail.com</h6>
          <h6 class = "head2" className= {styles.head2}>Password : </h6>
          <p class = "star" className = {styles.star}> ***********</p>
          <p class = "pass" className = {styles.pass}>Change Password</p>
          <hr/>
          <h5 class ="head6" className={styles.head6}> Settings</h5>
          <ul class = "list" className={styles.list}>
            <li>Edit Profile Details</li>
            <li>Manage Profiles</li>
            <li>Watch History</li>
            </ul>
            <hr/>
        
<div class="card" className={styles.card} >
<h5 class ="head7" className={styles.head7}> Profiles</h5>
  <img className={styles.card} src={Assests} alt="dedewdwe" />
  <h6 class = "head" className= {styles.head}>Alphanso Developer</h6>
  <p class = "para" className = {styles.para}>13+</p>
  
</div>
<hr/>
<div class="card" className={styles.card} >
  <img className={styles.card} src={Assests} alt="dedewdwe" />
  <h6 class = "head" className= {styles.head}>abcd</h6>
  <p class = "para" className = {styles.para}>All</p>
</div>
<hr/>
<div class="card" className={styles.card} >
  <img className={styles.card} src={Assests} alt="dedewdwe" />
  <h6 class = "head" className= {styles.head}>nbvnbv</h6>
  <p class = "para" className = {styles.para}>All</p>
</div>
<hr/>
<div class="card" className={styles.card} >
  <img className={styles.card} src={Assests} alt="dedewdwe" />
  <h6 class = "head" className= {styles.head}>bnvnb</h6>
  <p class = "para" className = {styles.para}>All</p>
</div>
<hr/>
</div>
</div>
      
      </>
    )
}

export default Account_settings;
