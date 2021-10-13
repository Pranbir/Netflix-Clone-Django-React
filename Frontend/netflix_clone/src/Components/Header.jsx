import assests from '../Components/Assests/logo.png';
import { Link, Redirect } from 'react-router-dom';
import { useState } from 'react';


const Header = (props) => {
  const [redirect, setRedirect] = useState(false)

  const onLogout = () => {
    localStorage.removeItem('token');
    setRedirect(true);
    alert("You have logout...");

  }
  if (redirect) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">

          <img height="35px" className="mr-3" src={assests} alt="logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/latest-show">Movies</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Sports</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Kids</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Tv Shows</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">My List</a>
              </li>
            </ul>


            <form className="d-flex me-5 w-25">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={props.Value}
                onChange={props.onTextChange}
              />
            </form>


            <div className="dropdown ">
              <a className="btn btn-primary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                User
              </a>

              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                <li><Link className="dropdown-item" to="/profile">Switch Profiles</Link></li>
                <li><a className="dropdown-item" href="/">Select Plans</a></li>
                <li><a className="dropdown-item" href="/">Purchases</a></li>
                <li><a className="dropdown-item" href="/">Account Setting</a></li>
                <li><h6 className="dropdown-item btn btn-link" onClick={onLogout} >Logout</h6></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>




    </>
  );
}

export default Header;