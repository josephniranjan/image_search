import React from 'react';

class SearchBar extends React.Component {
state = {term : ''};

onFormSubmit = e =>{
e.preventDefault();
this.props.onFormComp(this.state.term);
}

render(){
return(
   <div className="container">
       <div className="form-group">
       <form onSubmit ={this.onFormSubmit}>
       <label >search images</label>
       <input placeholder="search here" className="form-control" onChange ={(event) => this.setState({term: event.target.value})} type="text" />
       </form>
       </div>
   </div>    

    )
}

}

export default SearchBar;
