import React from 'react';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p datatestid="planet-name">{planetName}</p>
        <img src={ planetImage } alt={ planetName } />
      </div>
    );
  }
}
PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.src,
};

export default PlanetCard;
