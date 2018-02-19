import React from 'react';

class Filters extends React.Component {
  constructor() {
    super();
  }

  clickChange = event =>{
    this.props.onChangeType(event.target.value)
  }

  findPet = event => {
    this.props.onFindPetsClick()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value = {this.props.filters.type} onChange={this.clickChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.findPet}>Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
