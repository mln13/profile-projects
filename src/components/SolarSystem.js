import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <ul>
          {planets.map((planeta, index) => (
            <PlanetCard
              key={ index }
              planetName={ planeta.name }
              planetImage={ planeta.image }
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
