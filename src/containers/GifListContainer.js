import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component{

  state = { gifs: []}

  render(){
    return (
      <div>
      <GifList gifs={this.state.gifs}/>
      <GifSearch gifFetch = {this.fetchGifs} />
      </div>
    )
  }

fetchGifs = (query="dolphins") =>{
  fetch(`http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
  .then(res => res.json).then(({data}) => {this.setState({gifs: data.map(gif => ({url: gif.images.original.url}))})})
}

componentDidMount(){
  this.fetchGifs();
}


}
