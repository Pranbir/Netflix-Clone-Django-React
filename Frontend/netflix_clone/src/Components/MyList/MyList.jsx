import React, { useEffect, useState } from "react";
import styles from './../MyList/MyList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHeart } from '@fortawesome/free-solid-svg-icons';
import Movie from "./Movie";


const movie_id_API = "https://api.themoviedb.org/3/movie/popular?api_key=56de4744cb9abe505ecfac3927d622e0";

const MyList = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(movie_id_API)
    .then(res => res.json())
    .then(data =>{
      setMovies(data.results);
    });
  }, []);



return (
  <> 
<div className={styles.myList}>
  <div className="container">
  <section id="tabs">
  <div className="row ml-5">
<nav>
  <div className="nav nav-tabs-expand-lg justify-content-end" id="nav-tab" role="tablist">
    <a className="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#nav-home"><button type="button" className={styles.buttonwatchlist}><FontAwesomeIcon icon={faBars} />  Watchlist</button></a>
    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile"><button type="button" className={styles.buttonfav}><FontAwesomeIcon icon={faHeart} /> Favorites</button></a>
  </div>
</nav>
</div>
</section>
<div className="tab-content" id="nav-tabContent" role="tablist">
  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
  <div className="container mt-4">
                <h4 className={styles.tex}>Watchlist</h4>
                <div className={styles.row}>
                    <div className="row mt-4">
                        
                    </div>
                </div>
            </div>
  </div>
  <div className="tab-pane fade show " id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
  <div className="container mt-4">
                <h4 className={styles.tex}>Favourites</h4>

                <div className={styles.row}>
                    <div className="row mt-4">
                        
                        
                    </div>
                </div>
            </div>

  </div>
</div>
  </div></div>
  <div className="movie-container">{movies.length > 0 && 
      movies.map((movie) => <Movie key={movie.id} {...movie} />
      )}
      </div>

    </>
  );
};

export default MyList;
