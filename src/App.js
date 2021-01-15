import React from 'react';
import './App.css';
import Row from './Row';
import Request from './request'
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner/>  
      <Row 
      title="NETFLIX ORIGNALS" 
      fetchUrl = {Request.fetchNetflixOrignals} 
      isLargeRow
      />
      <Row title="Trending Now" fetchUrl = {Request.fetchTrending} />
      <Row title="Top Rated" fetchUrl = {Request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl = {Request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl = {Request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl = {Request.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl = {Request.fetchRomanceMovies} />
      <Row title="Documentries" fetchUrl = {Request.fetchDocumentries} />
    </div>
  );
}

export default App;
