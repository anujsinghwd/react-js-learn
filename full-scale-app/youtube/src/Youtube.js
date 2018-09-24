import React, { Component } from 'react';

const API = 'AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA'
const channelID = 'UCVs53XNihf6oPDpvgJybUFQ'
const result = 10;

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;

class Youtube extends Component {

  constructor(props){
    super(props);

    this.state = {
      resultyt: []
    };
    this.clicked = this.clicked.bind(this);
  }

  clicked(){
    fetch(finalURL)
      .then((res) => res.json())
      .then((data) => {
        const resultyt = data.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
        this.setState({
          resultyt: resultyt
        });
      })
      .catch((error) => {
        console.log(error)
      });
  }
  componentWillMount(){
    this.clicked();
  }

  render(){
    return(
      <div>
        {
          this.state.resultyt.map((link, i) => {
            var frame = <div key={i} className="youtube"><iframe width="560" height="315" src={link}
              frameBorder="0" allow="autoplay; encrypted-media"
            allowFullScreen></iframe></div>;
            return frame;
          })
        }
    </div>
    );
  }
}

export default Youtube;
