import React from 'react';
import Title from './Title';
// import planets from '../data/planets';
// import PlanetCard from './PlanetCard';

// const cadaPlaneta = planets
//   .map((planeta, index) => (<li key={index}>{planeta.name}</li>));
// return (

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
      </div>
    );
  }
}

export default SolarSystem;
