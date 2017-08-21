import React from 'react'

class Film extends React.Component {

  render() {
    return(
      <div className ='film'>

       <h3 className = "film-title">
          {"Title:" + this.props.title}
       </h3>

       <h4 className = "Film-listings">
          {"Listings:" + this.props.listing}
       </h4>
        {"Price: £" +this.props.children}
      </div>

      )
  }
}

export default Film