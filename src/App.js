import React, { Component } from 'react';
import SearchBar from './searchBar';
import api from './components/api'
import ImageList from './ImageList';
class App extends Component {
state = {
  image: []
};
 onSearchSubmit = async term =>{
 const response = await api.get('/search/photos',{
 params : { query : term}
 });

   
console.log(response.data);
 this.setState({ image : response.data.results })
};

  render() {
    return (
     <div>
      <SearchBar onFormComp={this.onSearchSubmit} />      
      <ImageList images ={this.state.image} />
      
      </div>
    );
  }
}

export default App;
