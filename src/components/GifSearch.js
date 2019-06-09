import React, { Component } from 'react'

class GifSearch extends Component {

state = {
  query: ""
}


handleSubmit = event => {
  event.preventDefault()
  this.props.fetchGIFs(this.state.query)
}

render(){
   return (
     <div>
       <form >
         <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
          <button type="submit" onSubmit={this.handleSubmit} class="gif">Search</button>
       </form>
     </div>
   )
}

}

export default GifSearch
