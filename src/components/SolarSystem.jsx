import React from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="FirsSection" data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planetAndName">
          {Planets.map((element) => {
            const { name, image } = element;
            return (
              <PlanetCard
                key={ name }
                planetName={ name }
                planetImage={ image }
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
