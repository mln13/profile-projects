// import { logDOM } from '@testing-library/react';
import React from 'react';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <section>
        <h2>{headline}</h2>
      </section>
    );
  }
}

export default Title;
