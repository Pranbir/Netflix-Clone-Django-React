import assests from './assests/logo.png';
import styles from './Header.module.css'
function Header() {
  return (
    <div>
    

    <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
  <div className= "container-fluid">
    
    <img  className={styles.navigation} src={assests} alt="dedewdwe"  />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav w-100 me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white " aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link  text-white" href="/">Movie</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  text-white" href="/">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  text-white" href="/">Kids</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  text-white" href="/">TV Show</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  text-white" href="/">MyList</a>
        </li>
      </ul>

      
      <form className="d-flex me-5">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>

      </form>

        <div class="dropdown me-5 ">
  <a class="btn btn-primary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    User
  </a>

  <ul class="dropdown-menu dropdown-menu-end " aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="/">Switch Profiles</a></li>
    <li><a class="dropdown-item" href="/">Select Plans</a></li>
    <li><a class="dropdown-item" href="/">Purchases</a></li>
  <li><a class="dropdown-item" href="/">Account Setting</a></li>
    <li><a class="dropdown-item" href="/">Logout</a></li>
  </ul>
</div>


    </div>
  </div>
</nav>




    </div>
  );
}

export default Header;
