import React from 'react'
import Film from './Film.jsx'

class FilmList extends React.Component {

  render() {

    const filmElements = this.props.data.map((film) => {
      return (
        <Film key ={Film.id} title={film.title} listing ={film.showtimes}>{film.price}
        </Film>
        )
    })

    return(
      <div className = 'film-list'>
        {filmElements}
      </div>
      )
  }
}

export default FilmList