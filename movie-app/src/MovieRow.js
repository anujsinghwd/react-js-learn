import React, { Component } from 'react';

class MovieRow extends Component {
  render(){
    return(
      <section>
          <div className="container py-3">
            <div className="card">
              <div className="row ">
                <div className="col-md-4">
                    <img src={this.props.poster} className="w-80" />
                  </div>
                  <div className="col-md-8 px-3">
                    <div className="card-block px-3">
                      <h4 className="card-title">{this.props.title}</h4>
                      <p className="card-text">{this.props.overview}</p>
                      <a href="#" className="btn btn-primary">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    );
  }
}

export default MovieRow;
