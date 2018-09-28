import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import MovieRow from './MovieRow';

const key = "5b450502eece31887fe130255589e329";
const BASE_URL = `https://api.themoviedb.org/3/search/movie`;
//?api_key=&query=${query}
class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      movies: []
    };
    this.handlechange = this.handlechange.bind(this);
  }

  handlechange(event){
    if(event.target.value){
      if(event.target.value.length > 2){
        this.getMovies(event.target.value);
      }
    }
  }

  getMovies(query){
    let finalURL = `${BASE_URL}?api_key=${key}&query=${query}`;
    fetch(finalURL)
      .then((res) => res.json())
      .then((data) => {
        this.setState({movies: data.results})
      })
      .catch((err) => {
          console.log(err)
      });
  }

  componentDidMount(){
    this.getMovies('avengers');
  }

  render() {
    return (
      <div className="App">
        <Header />
        <input className="searchBar" placeholder="Enter Search term" onChange={this.handlechange} />
        {
          this.state.movies.map((data, i) => {
              return <MovieRow key={i} title={data.original_title} poster={"http://image.tmdb.org/t/p/w185"+data.poster_path} overview={data.overview} />
          })
        }
      </div>
    );
  }
}

export default App;
