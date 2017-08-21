import React from 'react'
import FilmList from './FilmList.jsx'

class FilmListing extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data: [{
        id:1, title:"Guardians Of The Galaxy", showtimes:"[09:00,12:00,16:00,19:00]", price: 7.00
      },
      {
        id:2, title:"Star Wars", showtimes:"[10:00,14:00,18:00,21:00]", price: 6.00
      },
      {
        id:3, title:"Howls Moving Castle", showtimes:"[09:00,12:00,15:00]", price: 6.00
        
      }]
    }
  }

  render() {
    return (
      <div className = "Film-Listing">
        <FilmList data = {this.state.data}/>
        <button>Get Showtimes</button>
      </div>

      )
  }
}

export default FilmListing
