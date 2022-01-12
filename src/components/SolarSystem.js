import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const eachPlanet = planets
      .map((planeta, index) => (<PlanetCard planetName={ planeta.props.children.name } planetImage={ planeta.props.children.image }  />));
      // console.log(eachName[0].props.children.name);
    return (

      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <ul>
          {eachPlanet}
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
