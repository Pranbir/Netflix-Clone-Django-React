import React from "react";
import assests2 from '../MyList/assests/jw.jpg';
import styles from './../MyList/MyList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHeart } from '@fortawesome/free-solid-svg-icons';

const MyList = () => {

  return (
    <>
<div className="myList">
  <div class="container">
  <section id="tabs">
  <div class="row ml-5">
<nav>
  <div class="nav nav-tabs-expand-lg justify-content-end" id="nav-tab" role="tablist">
    <a class="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#nav-home"><button type="button" className={styles.buttonwatchlist}><FontAwesomeIcon icon={faBars} />  Watchlist</button></a>
    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile"><button type="button" className={styles.buttonfav}><FontAwesomeIcon icon={faHeart} /> Favorites</button></a>
  </div>
</nav>
</div>
</section>
<div class="tab-content" id="nav-tabContent" role="tablist">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
  <div className="container mt-4">
                <h4 className={styles.tex}>Watchlist</h4>
                <div className={styles.row}>
                    <div className="row mt-4">
                        <div className="col-lg-3">
                            <img alt="movie" src={assests2} width="250" height="200" />
                        </div>
                        <div className="col-lg-3">
                            <img alt="movie" src={assests2} width="250" height="200" />
                        </div>
                        <div className="col-lg-3">
                            <img alt="movie" src={assests2} width="250" height="200" />
                        </div>
                        <div className="col-lg-3">
                            <img alt="movie" src={assests2} width="250" height="200" />
                        </div>
                    </div>
                </div>
            </div>
  </div>
  <div class="tab-pane fade show " id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
  <div className="container mt-4">
                <h4 className={styles.tex}>Favourites</h4>

                <div className={styles.row}>
                    <div className="row mt-4">
                        <div className="col-lg-3">
                            <img alt="movie" src={assests2} width="250" height="200" />
                        </div>
                        <div className="col-lg-3">
                            <img alt="movie" src={assests2} width="250" height="200" />
                        </div>
                        
                    </div>
                </div>
            </div>

  </div>
</div>
  </div></div>


    </>
  );
};

export default MyList;
