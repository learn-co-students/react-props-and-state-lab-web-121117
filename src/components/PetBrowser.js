import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  
  render() {
      let petCards = []
      
      this.props.pets.forEach(p => {
        let result = this.props.adoptedPets.includes(p.id)
        petCards.push(<Pet 
          pet={p} 
          onAdoptPet={this.props.onAdoptPet} 
          isAdopted={result} 
        />)
      })
      
      return <div className="ui cards">{petCards}</div>
  }
}

export default PetBrowser;
