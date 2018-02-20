import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {

    let petsCardsArr = []

    this.props.pets.forEach(pet => {
      let adoptedResult = this.props.adoptedPets.includes(pet.id)
      petsCardsArr.push(
        <Pet
          pet={pet}
          onAdoptPet={this.props.onAdoptPet}
          isAdopted={adoptedResult}
        />
      )
    })

    return (
      <div className="ui cards">
        {petsCardsArr}
      </div>
    );
  }
}

export default PetBrowser;
