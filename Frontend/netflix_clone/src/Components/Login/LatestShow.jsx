import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Header from '../Header';
import "../Login/style.css";
import Footer from "../HomePage/Footer";
import ReactPlayer from 'react-player'

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  color: white;
  margin-bottom: 60px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
`;

export const CoverImage = styled.img`
  height: 280px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-evenly;;
`;

export default function LatestShow() {

    const token = localStorage.getItem('token');

    const [Movie, setMovie] = useState(null);

    const [searchQuery, updateSearchQuery] = useState("");

    const [movieList, updateMovieList] = useState([]);

    const [timeoutId, updateTimeoutId] = useState();

    const [page, setPage] = useState(1);

    useEffect(() => {
        getMoviesInfo(page).then(data => {
            setMovie(data.results);
        })
        // eslint-disable-next-line 
    }, [page]);

    const getMoviesInfo = async (page = 1) => {
        const res = await fetch(`http://fsd-feb-netflix-api.herokuapp.com/api/latest_show/?page=${page}`, {
            headers: {
                Authorization: 'Token ' + token
            },
            credentials: 'include',
        });
        return res.json();
    };

    const pageSwitcher = () => {
        const nextPage = page === 1 ? 2 : 1;
        setPage(nextPage);
    };

    const fetchData = async (searchString) => {

        await fetch(`https://fsd-feb-netflix-api.herokuapp.com/api/searchAPI?title=${searchString}`, {
            headers: {
                Authorization: 'Token ' + token
            },
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                updateMovieList(data);
            })
    };

    const onTextChange = (e) => {
        clearTimeout(timeoutId);
        updateSearchQuery(e.target.value);
        const timeout = setTimeout(() => fetchData(e.target.value), 500);
        updateTimeoutId(timeout);
    };

    return (
        <>
            <Container>
                <Header
                    Value={searchQuery}
                    onTextChange={onTextChange}
                />

                <MovieListContainer>
                    {movieList?.length ? (
                        movieList.map((movie, index) => (

                            <MovieContainer className="movie_st1" key={index}>
                                <CoverImage src={movie.video_gif} alt={movie.title} />
                                <div className="overlay1 p-5">

                                    <div className="text1">
                                        <ReactPlayer width="95%" controls url={movie.video_link} />
                                        <p className="mt-3">Title: {movie.title}</p>
                                        <p>Description: {movie.description}</p>
                                        <p>Cast: {movie.casting}</p>
                                        <p>Director: {movie.director}</p>
                                        <i className="btn btn-outline-light ml-2 mr-2 fa fa-heart text-danger"></i>
                                        <i className="btn btn-outline-light ml-2 mr-2 fa fa-check"></i>
                                    </div>
                                </div>

                            </MovieContainer>

                        ))
                    ) : (

                        <>
                            <MovieListContainer>

                                {Movie &&
                                    Movie.map((movie) => (
                                        <>
                                            <div key={movie.id}>
                                                <MovieContainer className="movie_st" >
                                                    <CoverImage src={movie.video_gif} alt={movie.title} />
                                                    <div className="overlay p-5">
                                                        <div className="text">
                                                            <ReactPlayer width="95%" controls url={movie.video_link} />
                                                            <p className="mt-3">Title: {movie.title}</p>
                                                            <p>Description: {movie.description}</p>
                                                            <p>Cast: {movie.casting}</p>
                                                            <p>Director: {movie.director}</p>
                                                            <i className="btn btn-outline-light ml-2 mr-2 fa fa-heart text-danger"></i>
                                                            <i className="btn btn-outline-light ml-2 mr-2 fa fa-check"></i>
                                                        </div>
                                                    </div>
                                                </MovieContainer>
                                            </div>

                                        </>
                                    ))
                                }
                            </MovieListContainer>
                        </>
                    )}

                </MovieListContainer>
                <div className="d-flex m-auto">
                    <button className="btn btn-outline-primary btn-lg text-white"
                        onClick={pageSwitcher}
                    >Load More...</button>
                </div>

            </Container>

            <Footer />

        </>
    )
}
