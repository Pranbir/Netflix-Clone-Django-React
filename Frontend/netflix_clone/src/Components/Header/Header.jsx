import assests from './assests/logo.jpg';
import styles from './Header.module.css'
function Header() {
    return (
      <div className={styles.Header} >
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
    
    <img  className={styles.navigation} src={assests} alt="dedewdwe"  />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">TV Shows</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Movies</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">New & Popular</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">My List</a>
        </li>
      </ul>

      
      <form className="d-flex me-5">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success "  type="submit">Search</button>
      </form>

      
        <div class="dropdown me-5">
  <a class="btn btn-primary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    User
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
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
  